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

export declare namespace IL2MessageReceiver {
  export type ConfigStruct = {
    gateway: string;
    sender: string;
    senderChainId: BigNumberish;
  };

  export type ConfigStructOutput = [string, string, number] & {
    gateway: string;
    sender: string;
    senderChainId: number;
  };
}

export interface L2MessageReceiverInterface extends utils.Interface {
  functions: {
    "L2MessageReceiver__init(address,(address,address,uint16))": FunctionFragment;
    "config()": FunctionFragment;
    "failedMessages(uint16,bytes,uint64)": FunctionFragment;
    "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
    "nonblockingLzReceive(uint16,bytes,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "setLzSender(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "L2MessageReceiver__init"
      | "config"
      | "failedMessages"
      | "lzReceive"
      | "nonblockingLzReceive"
      | "owner"
      | "renounceOwnership"
      | "retryMessage"
      | "rewardToken"
      | "setLzSender"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "L2MessageReceiver__init",
    values: [string, IL2MessageReceiver.ConfigStruct]
  ): string;
  encodeFunctionData(functionFragment: "config", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "failedMessages",
    values: [BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lzReceive",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "nonblockingLzReceive",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "retryMessage",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setLzSender", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "L2MessageReceiver__init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "failedMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nonblockingLzReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retryMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLzSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "MessageFailed(uint16,bytes,uint64,bytes,bytes)": EventFragment;
    "MessageSuccess(uint16,bytes,uint64,bytes)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RetryMessageSuccess(uint16,bytes,uint64,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageSuccess"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RetryMessageSuccess"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface MessageFailedEventObject {
  senderChainId: number;
  senderAndReceiverAddresses: string;
  nonce: BigNumber;
  payload: string;
  reason: string;
}
export type MessageFailedEvent = TypedEvent<
  [number, string, BigNumber, string, string],
  MessageFailedEventObject
>;

export type MessageFailedEventFilter = TypedEventFilter<MessageFailedEvent>;

export interface MessageSuccessEventObject {
  senderChainId: number;
  senderAndReceiverAddresses: string;
  nonce: BigNumber;
  payload: string;
}
export type MessageSuccessEvent = TypedEvent<
  [number, string, BigNumber, string],
  MessageSuccessEventObject
>;

export type MessageSuccessEventFilter = TypedEventFilter<MessageSuccessEvent>;

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

export interface RetryMessageSuccessEventObject {
  senderChainId: number;
  senderAndReceiverAddresses: string;
  nonce: BigNumber;
  payload: string;
}
export type RetryMessageSuccessEvent = TypedEvent<
  [number, string, BigNumber, string],
  RetryMessageSuccessEventObject
>;

export type RetryMessageSuccessEventFilter =
  TypedEventFilter<RetryMessageSuccessEvent>;

export interface L2MessageReceiver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: L2MessageReceiverInterface;

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
    L2MessageReceiver__init(
      rewardToken_: string,
      config_: IL2MessageReceiver.ConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    config(
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & {
        gateway: string;
        sender: string;
        senderChainId: number;
      }
    >;

    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    lzReceive(
      senderChainId_: BigNumberish,
      senderAndReceiverAddresses_: BytesLike,
      nonce_: BigNumberish,
      payload_: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    nonblockingLzReceive(
      senderChainId_: BigNumberish,
      senderAndReceiverAddresses_: BytesLike,
      payload_: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    retryMessage(
      senderChainId_: BigNumberish,
      senderAndReceiverAddresses_: BytesLike,
      nonce_: BigNumberish,
      payload_: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    setLzSender(
      lzSender_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  L2MessageReceiver__init(
    rewardToken_: string,
    config_: IL2MessageReceiver.ConfigStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  config(
    overrides?: CallOverrides
  ): Promise<
    [string, string, number] & {
      gateway: string;
      sender: string;
      senderChainId: number;
    }
  >;

  failedMessages(
    arg0: BigNumberish,
    arg1: BytesLike,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  lzReceive(
    senderChainId_: BigNumberish,
    senderAndReceiverAddresses_: BytesLike,
    nonce_: BigNumberish,
    payload_: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  nonblockingLzReceive(
    senderChainId_: BigNumberish,
    senderAndReceiverAddresses_: BytesLike,
    payload_: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  retryMessage(
    senderChainId_: BigNumberish,
    senderAndReceiverAddresses_: BytesLike,
    nonce_: BigNumberish,
    payload_: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  setLzSender(
    lzSender_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    L2MessageReceiver__init(
      rewardToken_: string,
      config_: IL2MessageReceiver.ConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    config(
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & {
        gateway: string;
        sender: string;
        senderChainId: number;
      }
    >;

    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    lzReceive(
      senderChainId_: BigNumberish,
      senderAndReceiverAddresses_: BytesLike,
      nonce_: BigNumberish,
      payload_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    nonblockingLzReceive(
      senderChainId_: BigNumberish,
      senderAndReceiverAddresses_: BytesLike,
      payload_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    retryMessage(
      senderChainId_: BigNumberish,
      senderAndReceiverAddresses_: BytesLike,
      nonce_: BigNumberish,
      payload_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    setLzSender(lzSender_: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(
      senderChainId?: null,
      senderAndReceiverAddresses?: null,
      nonce?: null,
      payload?: null,
      reason?: null
    ): MessageFailedEventFilter;
    MessageFailed(
      senderChainId?: null,
      senderAndReceiverAddresses?: null,
      nonce?: null,
      payload?: null,
      reason?: null
    ): MessageFailedEventFilter;

    "MessageSuccess(uint16,bytes,uint64,bytes)"(
      senderChainId?: null,
      senderAndReceiverAddresses?: null,
      nonce?: null,
      payload?: null
    ): MessageSuccessEventFilter;
    MessageSuccess(
      senderChainId?: null,
      senderAndReceiverAddresses?: null,
      nonce?: null,
      payload?: null
    ): MessageSuccessEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "RetryMessageSuccess(uint16,bytes,uint64,bytes)"(
      senderChainId?: null,
      senderAndReceiverAddresses?: null,
      nonce?: null,
      payload?: null
    ): RetryMessageSuccessEventFilter;
    RetryMessageSuccess(
      senderChainId?: null,
      senderAndReceiverAddresses?: null,
      nonce?: null,
      payload?: null
    ): RetryMessageSuccessEventFilter;
  };

  estimateGas: {
    L2MessageReceiver__init(
      rewardToken_: string,
      config_: IL2MessageReceiver.ConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    config(overrides?: CallOverrides): Promise<BigNumber>;

    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lzReceive(
      senderChainId_: BigNumberish,
      senderAndReceiverAddresses_: BytesLike,
      nonce_: BigNumberish,
      payload_: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    nonblockingLzReceive(
      senderChainId_: BigNumberish,
      senderAndReceiverAddresses_: BytesLike,
      payload_: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    retryMessage(
      senderChainId_: BigNumberish,
      senderAndReceiverAddresses_: BytesLike,
      nonce_: BigNumberish,
      payload_: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    setLzSender(
      lzSender_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    L2MessageReceiver__init(
      rewardToken_: string,
      config_: IL2MessageReceiver.ConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    config(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lzReceive(
      senderChainId_: BigNumberish,
      senderAndReceiverAddresses_: BytesLike,
      nonce_: BigNumberish,
      payload_: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    nonblockingLzReceive(
      senderChainId_: BigNumberish,
      senderAndReceiverAddresses_: BytesLike,
      payload_: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    retryMessage(
      senderChainId_: BigNumberish,
      senderAndReceiverAddresses_: BytesLike,
      nonce_: BigNumberish,
      payload_: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setLzSender(
      lzSender_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}