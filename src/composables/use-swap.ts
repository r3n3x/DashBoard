import { computed, ref, Ref, watch } from 'vue'
import {
  CurrencyAmount,
  Percent,
  Token,
  TradeType,
  V2_FACTORY_ADDRESSES,
  V2_ROUTER_ADDRESSES,
} from '@uniswap/sdk-core'
import { Pair, Route, Trade } from '@uniswap/v2-sdk'
import { ethers } from 'ethers'
import { useWeb3ProvidersStore } from '@/store'
import { useContract } from '@/composables/use-contract'
import { ErrorHandler } from '@/helpers'
import { Time } from '@distributedlab/tools'
import { MAX_UINT_256, SWAP_ASSETS } from '@/const'
import { ETHEREUM_CHAIN_IDS, SWAP_ASSETS_NAMES } from '@/enums'

const AVERAGE_SWAP_TX_PRICE = '1214895' // gwei
const SLIPPAGE = '50' // 0.5% slippage

export function useSwap(
  tokenInAddress: string,
  tokenOutAddress: string,
  tokenInValue: Ref<string>,
) {
  const web3ProvidersStore = useWeb3ProvidersStore()

  const tokenIn = ref<Token | null>(null)
  const tokenOut = ref<Token | null>(null)
  const pair = ref<Pair | null>(null)
  const route = ref<Route | null>(null)
  const trade = ref<Trade | null>(null)
  const estimatedTokenOutAmount = ref<string>('0')
  const pairAddress = ref('')
  const estimatedGasCost = ref('0')

  const tokenToSendContract = computed(() =>
    useContract(
      'ERC20__factory',
      tokenInAddress,
      web3ProvidersStore.l1Provider,
    ),
  )

  const wethContract = computed(() =>
    useContract(
      'ERC20__factory',
      SWAP_ASSETS.find(({ symbol }) => symbol === SWAP_ASSETS_NAMES.WETH)
        ?.address,
      web3ProvidersStore.l1Provider,
    ),
  )

  const tokenToReceiveContract = computed(() =>
    useContract(
      'ERC20__factory',
      tokenOutAddress,
      web3ProvidersStore.l1Provider,
    ),
  )

  const uniswapV2FactoryContract = computed(() =>
    useContract(
      'UniswapV2Factory__factory',
      V2_FACTORY_ADDRESSES[Number(ETHEREUM_CHAIN_IDS.ethereum)],
      web3ProvidersStore.l1Provider,
    ),
  )

  const uniswapV2RouterContract = computed(() =>
    useContract(
      'UniswapV2Router__factory',
      V2_ROUTER_ADDRESSES[Number(ETHEREUM_CHAIN_IDS.ethereum)],
      web3ProvidersStore.l1Provider,
    ),
  )

  const uniswapV2PairContract = computed(() =>
    useContract(
      'UniswapV2Pair__factory',
      pairAddress.value,
      web3ProvidersStore.l1Provider,
    ),
  )

  const loadTokensAndPair = async () => {
    try {
      pairAddress.value =
        await uniswapV2FactoryContract.value.providerBased.value.getPair(
          tokenInAddress,
          tokenOutAddress,
        )

      if (pairAddress.value === ethers.constants.AddressZero) {
        return
      }

      const [reserve0, reserve1] =
        await uniswapV2PairContract.value.providerBased.value.getReserves()

      const [tokenInDecimals, tokenOutDecimals] = await Promise.all([
        tokenToSendContract.value.providerBased.value.decimals(),
        tokenToReceiveContract.value.providerBased.value.decimals(),
      ])

      const [inToken, outToken] = [
        new Token(
          Number(ETHEREUM_CHAIN_IDS.ethereum),
          tokenInAddress,
          tokenInDecimals,
        ),
        new Token(
          Number(ETHEREUM_CHAIN_IDS.ethereum),
          tokenOutAddress,
          tokenOutDecimals,
        ),
      ]
      tokenIn.value = inToken
      tokenOut.value = outToken

      pair.value = new Pair(
        CurrencyAmount.fromRawAmount(inToken, reserve0.toString()),
        CurrencyAmount.fromRawAmount(outToken, reserve1.toString()),
      )
    } catch (error) {
      console.error('Error loading pair data:', error)
    }
  }

  const calculateTrade = async () => {
    if (!parseFloat(tokenInValue.value)) {
      return
    }
    await estimateGasCost()
    if (!tokenIn.value || !tokenOut.value || !pair.value) {
      console.warn('Tokens or pair not initialized correctly.')
      return
    }

    const tokenInDecimals = tokenIn.value.decimals
    const tokenInAmountInWei = ethers.utils.parseUnits(
      tokenInValue.value || '0',
      tokenInDecimals,
    )

    const routeInstance = new Route([pair.value], tokenIn.value, tokenOut.value)
    route.value = routeInstance

    const tradeInstance = new Trade(
      routeInstance,
      CurrencyAmount.fromRawAmount(
        tokenIn.value,
        tokenInAmountInWei.toString(),
      ),
      TradeType.EXACT_INPUT,
    )

    trade.value = tradeInstance
    estimatedTokenOutAmount.value = ethers.utils.formatUnits(
      tradeInstance.outputAmount.quotient.toString(),
      tokenOut.value.decimals,
    )
  }

  const estimateGasCost = async () => {
    try {
      const allowance =
        await tokenToSendContract.value.signerBased.value.allowance(
          web3ProvidersStore.address,
          V2_ROUTER_ADDRESSES[Number(ETHEREUM_CHAIN_IDS.ethereum)],
        )

      if (
        allowance.gte(
          ethers.utils.parseUnits(
            tokenInValue.value || '0',
            tokenIn.value.decimals,
          ),
        )
      ) {
        estimatedGasCost.value = ethers.utils.formatEther(
          ethers.utils.parseUnits(AVERAGE_SWAP_TX_PRICE, 'gwei'),
        )
        return
      }

      const approvalGasEstimate =
        await tokenToSendContract.value.signerBased.value.estimateGas.approve(
          V2_ROUTER_ADDRESSES[Number(ETHEREUM_CHAIN_IDS.ethereum)],
          ethers.utils.parseUnits(
            tokenInValue.value || '0',
            tokenIn.value.decimals,
          ),
        )
      const gasPrice = await web3ProvidersStore.l1Provider.getGasPrice()
      const totalGasCostInWei = approvalGasEstimate.mul(gasPrice)
      estimatedGasCost.value = ethers.utils
        .formatEther(
          totalGasCostInWei
            .add(ethers.utils.parseUnits(AVERAGE_SWAP_TX_PRICE, 'gwei'))
            .toString(),
        )
        .toString()
    } catch (error) {
      ErrorHandler.processWithoutFeedback(error)
      estimatedGasCost.value = ethers.BigNumber.from(0).toString()
    }
  }

  const executeTrade = async () => {
    if (tokenInAddress === wethContract.value.providerBased.value.address) {
      await performSwap(
        tokenIn.value!,
        tokenOut.value!,
        CurrencyAmount.fromRawAmount(
          tokenIn.value!,
          ethers.utils
            .parseUnits(tokenInValue.value, tokenIn.value!.decimals)
            .toString(),
        ),
      )
      return
    }
    await executeMultiSwap()
  }

  const performSwap = async (
    fromToken: Token,
    toToken: Token,
    amountIn: CurrencyAmount<Token>,
  ) => {
    const slippageTolerance = new Percent(SLIPPAGE, '10000')

    const sentTokenContract =
      fromToken.address === wethContract.value.providerBased.value.address
        ? wethContract.value.providerBased.value
        : tokenToSendContract.value.providerBased.value

    const allowance = await sentTokenContract.allowance(
      web3ProvidersStore.address,
      V2_ROUTER_ADDRESSES[Number(ETHEREUM_CHAIN_IDS.ethereum)],
    )

    if (allowance.lt(amountIn.quotient)) {
      const tx = await sentTokenContract.approve(
        V2_ROUTER_ADDRESSES[Number(ETHEREUM_CHAIN_IDS.ethereum)],
        MAX_UINT_256,
      )
      await tx.wait()
    }

    const tradeInstance = new Trade(
      new Route([pair.value!], fromToken, toToken),
      amountIn,
      TradeType.EXACT_INPUT,
    )

    const amountOutMin = tradeInstance
      .minimumAmountOut(slippageTolerance)
      .quotient.toString()

    const tx =
      uniswapV2RouterContract.value.signerBased.value.swapExactTokensForTokens(
        amountIn.quotient.toString(),
        amountOutMin,
        [fromToken.address, toToken.address],
        web3ProvidersStore.address,
        new Time().add(20, 'minutes').timestamp,
      )
    await tx.wait()
  }

  const executeMultiSwap = async () => {
    if (!tokenIn.value) return

    try {
      const tokenInDecimals = tokenIn.value.decimals
      const tokenInAmount = ethers.utils.parseUnits(
        tokenInValue.value,
        tokenInDecimals,
      )
      const currencyAmountIn = CurrencyAmount.fromRawAmount(
        tokenIn.value,
        tokenInAmount.toString(),
      )

      const wethDecimals =
        await wethContract.value.providerBased.value.decimals()

      const wethToken = new Token(
        Number(ETHEREUM_CHAIN_IDS.ethereum),
        wethContract.value.providerBased.value.address,
        wethDecimals,
      )
      await performSwap(tokenIn.value, wethToken, currencyAmountIn)

      const tokenToReceiveDecimals =
        await tokenToReceiveContract.value.providerBased.value.decimals()

      const stEthToken = new Token(
        Number(ETHEREUM_CHAIN_IDS.ethereum),
        tokenToReceiveContract.value.providerBased.value.address,
        tokenToReceiveDecimals,
      )
      const wethBalance =
        await wethContract.value.providerBased.value.balanceOf(
          web3ProvidersStore.address,
        )
      const wethAmountIn = CurrencyAmount.fromRawAmount(
        wethToken,
        wethBalance.toString(),
      )

      return performSwap(wethToken, stEthToken, wethAmountIn)
    } catch (error) {
      ErrorHandler.process(error)
    }
  }

  const init = async () => {
    await loadTokensAndPair()
    await calculateTrade()
  }

  watch(tokenInValue, init, { immediate: true })

  return {
    estimatedTokenOutAmount,
    estimatedGasCost,
    isApproved,

    executeTrade,
    calculateTrade,
  }
}
