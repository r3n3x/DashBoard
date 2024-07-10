/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace IDistribution {
  export type PoolStruct = {
    payoutStart: BigNumberish;
    decreaseInterval: BigNumberish;
    withdrawLockPeriod: BigNumberish;
    claimLockPeriod: BigNumberish;
    withdrawLockPeriodAfterStake: BigNumberish;
    initialReward: BigNumberish;
    rewardDecrease: BigNumberish;
    minimalStake: BigNumberish;
    isPublic: boolean;
  };

  export type PoolStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
  ] & {
    payoutStart: BigNumber;
    decreaseInterval: BigNumber;
    withdrawLockPeriod: BigNumber;
    claimLockPeriod: BigNumber;
    withdrawLockPeriodAfterStake: BigNumber;
    initialReward: BigNumber;
    rewardDecrease: BigNumber;
    minimalStake: BigNumber;
    isPublic: boolean;
  };
}

export declare namespace IL1Factory {
  export type L1ParamsStruct = {
    isUpgradeable: boolean;
    owner: string;
    protocolName: string;
    poolsInfo: IDistribution.PoolStruct[];
    l2TokenReceiver: string;
    l2MessageReceiver: string;
  };

  export type L1ParamsStructOutput = [
    boolean,
    string,
    string,
    IDistribution.PoolStructOutput[],
    string,
    string
  ] & {
    isUpgradeable: boolean;
    owner: string;
    protocolName: string;
    poolsInfo: IDistribution.PoolStructOutput[];
    l2TokenReceiver: string;
    l2MessageReceiver: string;
  };

  export type PoolViewStruct = {
    protocol: string;
    distribution: string;
    l1Sender: string;
  };

  export type PoolViewStructOutput = [string, string, string] & {
    protocol: string;
    distribution: string;
    l1Sender: string;
  };

  export type ArbExternalDepsStruct = { endpoint: string };

  export type ArbExternalDepsStructOutput = [string] & { endpoint: string };

  export type DepositTokenExternalDepsStruct = {
    token: string;
    wToken: string;
  };

  export type DepositTokenExternalDepsStructOutput = [string, string] & {
    token: string;
    wToken: string;
  };

  export type LzExternalDepsStruct = {
    endpoint: string;
    zroPaymentAddress: string;
    adapterParams: BytesLike;
    destinationChainId: BigNumberish;
  };

  export type LzExternalDepsStructOutput = [string, string, string, number] & {
    endpoint: string;
    zroPaymentAddress: string;
    adapterParams: string;
    destinationChainId: number;
  };
}

export interface L1FactoryInterface extends utils.Interface {
  functions: {
    "DISTRIBUTION_POOL()": FunctionFragment;
    "L1Factory_init()": FunctionFragment;
    "L1_SENDER_POOL()": FunctionFragment;
    "arbExternalDeps()": FunctionFragment;
    "countProtocols(address)": FunctionFragment;
    "deploy((bool,address,string,(uint128,uint128,uint128,uint128,uint128,uint256,uint256,uint256,bool)[],address,address))": FunctionFragment;
    "depositTokenExternalDeps()": FunctionFragment;
    "feeConfig()": FunctionFragment;
    "freezePool(string,string)": FunctionFragment;
    "getBeacon(string)": FunctionFragment;
    "getDeployedPools(address,uint256,uint256)": FunctionFragment;
    "getImplementation(string)": FunctionFragment;
    "getProxyPool(address,string,string)": FunctionFragment;
    "listProtocols(address,uint256,uint256)": FunctionFragment;
    "lzExternalDeps()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "predictAddresses(address,string)": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setArbExternalDeps((address))": FunctionFragment;
    "setDepositTokenExternalDeps((address,address))": FunctionFragment;
    "setFeeConfig(address)": FunctionFragment;
    "setImplementations(string[],address[])": FunctionFragment;
    "setLzExternalDeps((address,address,bytes,uint16))": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unfreezePool(string,string)": FunctionFragment;
    "unpause()": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DISTRIBUTION_POOL"
      | "L1Factory_init"
      | "L1_SENDER_POOL"
      | "arbExternalDeps"
      | "countProtocols"
      | "deploy"
      | "depositTokenExternalDeps"
      | "feeConfig"
      | "freezePool"
      | "getBeacon"
      | "getDeployedPools"
      | "getImplementation"
      | "getProxyPool"
      | "listProtocols"
      | "lzExternalDeps"
      | "owner"
      | "pause"
      | "paused"
      | "predictAddresses"
      | "proxiableUUID"
      | "renounceOwnership"
      | "setArbExternalDeps"
      | "setDepositTokenExternalDeps"
      | "setFeeConfig"
      | "setImplementations"
      | "setLzExternalDeps"
      | "transferOwnership"
      | "unfreezePool"
      | "unpause"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DISTRIBUTION_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "L1Factory_init",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "L1_SENDER_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "arbExternalDeps",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "countProtocols",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [IL1Factory.L1ParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "depositTokenExternalDeps",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feeConfig", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "freezePool",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "getBeacon", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getDeployedPools",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getImplementation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getProxyPool",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "listProtocols",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lzExternalDeps",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "predictAddresses",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setArbExternalDeps",
    values: [IL1Factory.ArbExternalDepsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setDepositTokenExternalDeps",
    values: [IL1Factory.DepositTokenExternalDepsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeConfig",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setImplementations",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setLzExternalDeps",
    values: [IL1Factory.LzExternalDepsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unfreezePool",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DISTRIBUTION_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "L1Factory_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "L1_SENDER_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "arbExternalDeps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "countProtocols",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositTokenExternalDeps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeConfig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "freezePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBeacon", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDeployedPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProxyPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "listProtocols",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lzExternalDeps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "predictAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setArbExternalDeps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDepositTokenExternalDeps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setImplementations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLzExternalDeps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unfreezePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "ProxyDeployed(address,address,string,string)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProxyDeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface ProxyDeployedEventObject {
  proxy: string;
  implementation: string;
  protocol: string;
  poolType: string;
}
export type ProxyDeployedEvent = TypedEvent<
  [string, string, string, string],
  ProxyDeployedEventObject
>;

export type ProxyDeployedEventFilter = TypedEventFilter<ProxyDeployedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface L1Factory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: L1FactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DISTRIBUTION_POOL(overrides?: CallOverrides): Promise<[string]>;

    L1Factory_init(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    L1_SENDER_POOL(overrides?: CallOverrides): Promise<[string]>;

    arbExternalDeps(
      overrides?: CallOverrides
    ): Promise<[string] & { endpoint: string }>;

    countProtocols(
      deployer_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deploy(
      l1Params_: IL1Factory.L1ParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    depositTokenExternalDeps(
      overrides?: CallOverrides
    ): Promise<[string, string] & { token: string; wToken: string }>;

    feeConfig(overrides?: CallOverrides): Promise<[string]>;

    freezePool(
      protocol_: string,
      poolType_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getBeacon(poolType_: string, overrides?: CallOverrides): Promise<[string]>;

    getDeployedPools(
      deployer_: string,
      offset_: BigNumberish,
      limit_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [IL1Factory.PoolViewStructOutput[]] & {
        pools_: IL1Factory.PoolViewStructOutput[];
      }
    >;

    getImplementation(
      poolType_: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getProxyPool(
      deployer_: string,
      protocol_: string,
      poolType_: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    listProtocols(
      deployer_: string,
      offset_: BigNumberish,
      limit_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]] & { protocols_: string[] }>;

    lzExternalDeps(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number] & {
        endpoint: string;
        zroPaymentAddress: string;
        adapterParams: string;
        destinationChainId: number;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    predictAddresses(
      deployer_: string,
      protocol_: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { distribution_: string; l1Sender_: string }>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setArbExternalDeps(
      arbExternalDeps_: IL1Factory.ArbExternalDepsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setDepositTokenExternalDeps(
      depositTokenExternalDeps_: IL1Factory.DepositTokenExternalDepsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setFeeConfig(
      feeConfig_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setImplementations(
      poolTypes_: string[],
      implementations_: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setLzExternalDeps(
      lzExternalDeps_: IL1Factory.LzExternalDepsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    unfreezePool(
      protocol_: string,
      poolType_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  DISTRIBUTION_POOL(overrides?: CallOverrides): Promise<string>;

  L1Factory_init(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  L1_SENDER_POOL(overrides?: CallOverrides): Promise<string>;

  arbExternalDeps(overrides?: CallOverrides): Promise<string>;

  countProtocols(
    deployer_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deploy(
    l1Params_: IL1Factory.L1ParamsStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  depositTokenExternalDeps(
    overrides?: CallOverrides
  ): Promise<[string, string] & { token: string; wToken: string }>;

  feeConfig(overrides?: CallOverrides): Promise<string>;

  freezePool(
    protocol_: string,
    poolType_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getBeacon(poolType_: string, overrides?: CallOverrides): Promise<string>;

  getDeployedPools(
    deployer_: string,
    offset_: BigNumberish,
    limit_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IL1Factory.PoolViewStructOutput[]>;

  getImplementation(
    poolType_: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getProxyPool(
    deployer_: string,
    protocol_: string,
    poolType_: string,
    overrides?: CallOverrides
  ): Promise<string>;

  listProtocols(
    deployer_: string,
    offset_: BigNumberish,
    limit_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  lzExternalDeps(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, number] & {
      endpoint: string;
      zroPaymentAddress: string;
      adapterParams: string;
      destinationChainId: number;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  predictAddresses(
    deployer_: string,
    protocol_: string,
    overrides?: CallOverrides
  ): Promise<[string, string] & { distribution_: string; l1Sender_: string }>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setArbExternalDeps(
    arbExternalDeps_: IL1Factory.ArbExternalDepsStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setDepositTokenExternalDeps(
    depositTokenExternalDeps_: IL1Factory.DepositTokenExternalDepsStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setFeeConfig(
    feeConfig_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setImplementations(
    poolTypes_: string[],
    implementations_: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setLzExternalDeps(
    lzExternalDeps_: IL1Factory.LzExternalDepsStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  unfreezePool(
    protocol_: string,
    poolType_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    DISTRIBUTION_POOL(overrides?: CallOverrides): Promise<string>;

    L1Factory_init(overrides?: CallOverrides): Promise<void>;

    L1_SENDER_POOL(overrides?: CallOverrides): Promise<string>;

    arbExternalDeps(overrides?: CallOverrides): Promise<string>;

    countProtocols(
      deployer_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deploy(
      l1Params_: IL1Factory.L1ParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    depositTokenExternalDeps(
      overrides?: CallOverrides
    ): Promise<[string, string] & { token: string; wToken: string }>;

    feeConfig(overrides?: CallOverrides): Promise<string>;

    freezePool(
      protocol_: string,
      poolType_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getBeacon(poolType_: string, overrides?: CallOverrides): Promise<string>;

    getDeployedPools(
      deployer_: string,
      offset_: BigNumberish,
      limit_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IL1Factory.PoolViewStructOutput[]>;

    getImplementation(
      poolType_: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getProxyPool(
      deployer_: string,
      protocol_: string,
      poolType_: string,
      overrides?: CallOverrides
    ): Promise<string>;

    listProtocols(
      deployer_: string,
      offset_: BigNumberish,
      limit_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    lzExternalDeps(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number] & {
        endpoint: string;
        zroPaymentAddress: string;
        adapterParams: string;
        destinationChainId: number;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    predictAddresses(
      deployer_: string,
      protocol_: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { distribution_: string; l1Sender_: string }>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setArbExternalDeps(
      arbExternalDeps_: IL1Factory.ArbExternalDepsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setDepositTokenExternalDeps(
      depositTokenExternalDeps_: IL1Factory.DepositTokenExternalDepsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeConfig(feeConfig_: string, overrides?: CallOverrides): Promise<void>;

    setImplementations(
      poolTypes_: string[],
      implementations_: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    setLzExternalDeps(
      lzExternalDeps_: IL1Factory.LzExternalDepsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unfreezePool(
      protocol_: string,
      poolType_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "ProxyDeployed(address,address,string,string)"(
      proxy?: null,
      implementation?: string | null,
      protocol?: null,
      poolType?: null
    ): ProxyDeployedEventFilter;
    ProxyDeployed(
      proxy?: null,
      implementation?: string | null,
      protocol?: null,
      poolType?: null
    ): ProxyDeployedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    DISTRIBUTION_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    L1Factory_init(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    L1_SENDER_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    arbExternalDeps(overrides?: CallOverrides): Promise<BigNumber>;

    countProtocols(
      deployer_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deploy(
      l1Params_: IL1Factory.L1ParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    depositTokenExternalDeps(overrides?: CallOverrides): Promise<BigNumber>;

    feeConfig(overrides?: CallOverrides): Promise<BigNumber>;

    freezePool(
      protocol_: string,
      poolType_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getBeacon(poolType_: string, overrides?: CallOverrides): Promise<BigNumber>;

    getDeployedPools(
      deployer_: string,
      offset_: BigNumberish,
      limit_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getImplementation(
      poolType_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProxyPool(
      deployer_: string,
      protocol_: string,
      poolType_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listProtocols(
      deployer_: string,
      offset_: BigNumberish,
      limit_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lzExternalDeps(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    predictAddresses(
      deployer_: string,
      protocol_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setArbExternalDeps(
      arbExternalDeps_: IL1Factory.ArbExternalDepsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setDepositTokenExternalDeps(
      depositTokenExternalDeps_: IL1Factory.DepositTokenExternalDepsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setFeeConfig(
      feeConfig_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setImplementations(
      poolTypes_: string[],
      implementations_: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setLzExternalDeps(
      lzExternalDeps_: IL1Factory.LzExternalDepsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    unfreezePool(
      protocol_: string,
      poolType_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    unpause(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DISTRIBUTION_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    L1Factory_init(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    L1_SENDER_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    arbExternalDeps(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    countProtocols(
      deployer_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deploy(
      l1Params_: IL1Factory.L1ParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    depositTokenExternalDeps(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    freezePool(
      protocol_: string,
      poolType_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getBeacon(
      poolType_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDeployedPools(
      deployer_: string,
      offset_: BigNumberish,
      limit_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getImplementation(
      poolType_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProxyPool(
      deployer_: string,
      protocol_: string,
      poolType_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listProtocols(
      deployer_: string,
      offset_: BigNumberish,
      limit_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lzExternalDeps(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    predictAddresses(
      deployer_: string,
      protocol_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setArbExternalDeps(
      arbExternalDeps_: IL1Factory.ArbExternalDepsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setDepositTokenExternalDeps(
      depositTokenExternalDeps_: IL1Factory.DepositTokenExternalDepsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setFeeConfig(
      feeConfig_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setImplementations(
      poolTypes_: string[],
      implementations_: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setLzExternalDeps(
      lzExternalDeps_: IL1Factory.LzExternalDepsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    unfreezePool(
      protocol_: string,
      poolType_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
