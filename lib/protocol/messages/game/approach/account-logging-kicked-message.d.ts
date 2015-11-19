/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class AccountLoggingKickedMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    days: number;
    hours: number;
    minutes: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_AccountLoggingKickedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_AccountLoggingKickedMessage(param1: ICustomDataInput): void;
}
export = AccountLoggingKickedMessage;
