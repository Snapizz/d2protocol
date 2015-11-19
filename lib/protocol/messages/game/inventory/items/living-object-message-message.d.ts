/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class LivingObjectMessageMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    msgId: number;
    timeStamp: number;
    owner: string;
    objectGenericId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_LivingObjectMessageMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_LivingObjectMessageMessage(param1: ICustomDataInput): void;
}
export = LivingObjectMessageMessage;
