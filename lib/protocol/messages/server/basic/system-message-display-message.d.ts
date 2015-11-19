/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
declare class SystemMessageDisplayMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    hangUp: boolean;
    msgId: number;
    parameters: string[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_SystemMessageDisplayMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_SystemMessageDisplayMessage(param1: ICustomDataInput): void;
}
export = SystemMessageDisplayMessage;
