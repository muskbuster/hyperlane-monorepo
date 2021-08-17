/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TestHomeInterface extends ethers.utils.Interface {
  functions: {
    "MAX_MESSAGE_BODY_BYTES()": FunctionFragment;
    "count()": FunctionFragment;
    "current()": FunctionFragment;
    "doubleUpdate(bytes32,bytes32[2],bytes,bytes)": FunctionFragment;
    "enqueue(uint32,bytes32,bytes)": FunctionFragment;
    "homeDomainHash()": FunctionFragment;
    "improperUpdate(bytes32,bytes32,bytes)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "localDomain()": FunctionFragment;
    "nextLeafIndex()": FunctionFragment;
    "owner()": FunctionFragment;
    "queueContains(bytes32)": FunctionFragment;
    "queueEnd()": FunctionFragment;
    "queueLength()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "root()": FunctionFragment;
    "sequences(uint32)": FunctionFragment;
    "setFailed()": FunctionFragment;
    "setUpdater(address)": FunctionFragment;
    "setUpdaterManager(address)": FunctionFragment;
    "state()": FunctionFragment;
    "suggestUpdate()": FunctionFragment;
    "testDestinationAndSequence(uint32,uint32)": FunctionFragment;
    "testHomeDomainHash()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "tree()": FunctionFragment;
    "update(bytes32,bytes32,bytes)": FunctionFragment;
    "updater()": FunctionFragment;
    "updaterManager()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MAX_MESSAGE_BODY_BYTES",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "count", values?: undefined): string;
  encodeFunctionData(functionFragment: "current", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "doubleUpdate",
    values: [BytesLike, [BytesLike, BytesLike], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "enqueue",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "homeDomainHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "improperUpdate",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "localDomain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextLeafIndex",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queueContains",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "queueEnd", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queueLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "root", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sequences",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setFailed", values?: undefined): string;
  encodeFunctionData(functionFragment: "setUpdater", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setUpdaterManager",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "suggestUpdate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testDestinationAndSequence",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testHomeDomainHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "tree", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "updater", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updaterManager",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_MESSAGE_BODY_BYTES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "current", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "doubleUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "enqueue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "homeDomainHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "improperUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "localDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextLeafIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queueContains",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "queueEnd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queueLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sequences", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFailed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUpdater", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setUpdaterManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "suggestUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testDestinationAndSequence",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testHomeDomainHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tree", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updater", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updaterManager",
    data: BytesLike
  ): Result;

  events: {
    "Dispatch(uint256,uint64,bytes32,bytes32,bytes)": EventFragment;
    "DoubleUpdate(bytes32,bytes32[2],bytes,bytes)": EventFragment;
    "ImproperUpdate()": EventFragment;
    "NewUpdater(address)": EventFragment;
    "NewUpdaterManager(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Update(uint32,bytes32,bytes32,bytes)": EventFragment;
    "UpdaterSlashed(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Dispatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DoubleUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ImproperUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewUpdater"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewUpdaterManager"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Update"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdaterSlashed"): EventFragment;
}

export class TestHome extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TestHomeInterface;

  functions: {
    MAX_MESSAGE_BODY_BYTES(overrides?: CallOverrides): Promise<[BigNumber]>;

    count(overrides?: CallOverrides): Promise<[BigNumber]>;

    current(overrides?: CallOverrides): Promise<[string]>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enqueue(
      _destination: BigNumberish,
      _recipient: BytesLike,
      _body: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    homeDomainHash(overrides?: CallOverrides): Promise<[string]>;

    improperUpdate(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _updaterManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    localDomain(overrides?: CallOverrides): Promise<[number]>;

    nextLeafIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    queueContains(
      _item: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    queueEnd(overrides?: CallOverrides): Promise<[string]>;

    queueLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    root(overrides?: CallOverrides): Promise<[string]>;

    sequences(arg0: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    setFailed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUpdater(
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUpdaterManager(
      _updaterManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    state(overrides?: CallOverrides): Promise<[number]>;

    suggestUpdate(
      overrides?: CallOverrides
    ): Promise<[string, string] & { _current: string; _new: string }>;

    testDestinationAndSequence(
      _destination: BigNumberish,
      _sequence: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    testHomeDomainHash(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tree(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    update(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updater(overrides?: CallOverrides): Promise<[string]>;

    updaterManager(overrides?: CallOverrides): Promise<[string]>;
  };

  MAX_MESSAGE_BODY_BYTES(overrides?: CallOverrides): Promise<BigNumber>;

  count(overrides?: CallOverrides): Promise<BigNumber>;

  current(overrides?: CallOverrides): Promise<string>;

  doubleUpdate(
    _oldRoot: BytesLike,
    _newRoot: [BytesLike, BytesLike],
    _signature: BytesLike,
    _signature2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enqueue(
    _destination: BigNumberish,
    _recipient: BytesLike,
    _body: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  homeDomainHash(overrides?: CallOverrides): Promise<string>;

  improperUpdate(
    _oldRoot: BytesLike,
    _newRoot: BytesLike,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _updaterManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  localDomain(overrides?: CallOverrides): Promise<number>;

  nextLeafIndex(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  queueContains(_item: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  queueEnd(overrides?: CallOverrides): Promise<string>;

  queueLength(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  root(overrides?: CallOverrides): Promise<string>;

  sequences(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

  setFailed(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUpdater(
    _updater: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUpdaterManager(
    _updaterManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  state(overrides?: CallOverrides): Promise<number>;

  suggestUpdate(
    overrides?: CallOverrides
  ): Promise<[string, string] & { _current: string; _new: string }>;

  testDestinationAndSequence(
    _destination: BigNumberish,
    _sequence: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  testHomeDomainHash(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tree(overrides?: CallOverrides): Promise<BigNumber>;

  update(
    _oldRoot: BytesLike,
    _newRoot: BytesLike,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updater(overrides?: CallOverrides): Promise<string>;

  updaterManager(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    MAX_MESSAGE_BODY_BYTES(overrides?: CallOverrides): Promise<BigNumber>;

    count(overrides?: CallOverrides): Promise<BigNumber>;

    current(overrides?: CallOverrides): Promise<string>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    enqueue(
      _destination: BigNumberish,
      _recipient: BytesLike,
      _body: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    homeDomainHash(overrides?: CallOverrides): Promise<string>;

    improperUpdate(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      _updaterManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    localDomain(overrides?: CallOverrides): Promise<number>;

    nextLeafIndex(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    queueContains(
      _item: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    queueEnd(overrides?: CallOverrides): Promise<string>;

    queueLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    root(overrides?: CallOverrides): Promise<string>;

    sequences(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

    setFailed(overrides?: CallOverrides): Promise<void>;

    setUpdater(_updater: string, overrides?: CallOverrides): Promise<void>;

    setUpdaterManager(
      _updaterManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    state(overrides?: CallOverrides): Promise<number>;

    suggestUpdate(
      overrides?: CallOverrides
    ): Promise<[string, string] & { _current: string; _new: string }>;

    testDestinationAndSequence(
      _destination: BigNumberish,
      _sequence: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testHomeDomainHash(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tree(overrides?: CallOverrides): Promise<BigNumber>;

    update(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    updater(overrides?: CallOverrides): Promise<string>;

    updaterManager(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Dispatch(
      leafIndex?: BigNumberish | null,
      destinationAndSequence?: BigNumberish | null,
      leaf?: BytesLike | null,
      current?: null,
      message?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, string, string],
      {
        leafIndex: BigNumber;
        destinationAndSequence: BigNumber;
        leaf: string;
        current: string;
        message: string;
      }
    >;

    DoubleUpdate(
      oldRoot?: null,
      newRoot?: null,
      signature?: null,
      signature2?: null
    ): TypedEventFilter<
      [string, [string, string], string, string],
      {
        oldRoot: string;
        newRoot: [string, string];
        signature: string;
        signature2: string;
      }
    >;

    ImproperUpdate(): TypedEventFilter<[], {}>;

    NewUpdater(updater?: null): TypedEventFilter<[string], { updater: string }>;

    NewUpdaterManager(
      updaterManager?: null
    ): TypedEventFilter<[string], { updaterManager: string }>;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    Update(
      homeDomain?: BigNumberish | null,
      oldRoot?: BytesLike | null,
      newRoot?: BytesLike | null,
      signature?: null
    ): TypedEventFilter<
      [number, string, string, string],
      {
        homeDomain: number;
        oldRoot: string;
        newRoot: string;
        signature: string;
      }
    >;

    UpdaterSlashed(
      updater?: string | null,
      reporter?: string | null
    ): TypedEventFilter<
      [string, string],
      { updater: string; reporter: string }
    >;
  };

  estimateGas: {
    MAX_MESSAGE_BODY_BYTES(overrides?: CallOverrides): Promise<BigNumber>;

    count(overrides?: CallOverrides): Promise<BigNumber>;

    current(overrides?: CallOverrides): Promise<BigNumber>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enqueue(
      _destination: BigNumberish,
      _recipient: BytesLike,
      _body: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    homeDomainHash(overrides?: CallOverrides): Promise<BigNumber>;

    improperUpdate(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _updaterManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    localDomain(overrides?: CallOverrides): Promise<BigNumber>;

    nextLeafIndex(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    queueContains(
      _item: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queueEnd(overrides?: CallOverrides): Promise<BigNumber>;

    queueLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    root(overrides?: CallOverrides): Promise<BigNumber>;

    sequences(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFailed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUpdater(
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUpdaterManager(
      _updaterManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    suggestUpdate(overrides?: CallOverrides): Promise<BigNumber>;

    testDestinationAndSequence(
      _destination: BigNumberish,
      _sequence: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testHomeDomainHash(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tree(overrides?: CallOverrides): Promise<BigNumber>;

    update(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updater(overrides?: CallOverrides): Promise<BigNumber>;

    updaterManager(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_MESSAGE_BODY_BYTES(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    current(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enqueue(
      _destination: BigNumberish,
      _recipient: BytesLike,
      _body: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    homeDomainHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    improperUpdate(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _updaterManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextLeafIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queueContains(
      _item: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queueEnd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queueLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    root(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sequences(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFailed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUpdater(
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUpdaterManager(
      _updaterManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    suggestUpdate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    testDestinationAndSequence(
      _destination: BigNumberish,
      _sequence: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testHomeDomainHash(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tree(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    update(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updater(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updaterManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
