/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import DecraftedItemStackInfo = require('../../../../types/game/context/roleplay/job/decrafted-item-stack-info');
declare class DecraftResultMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    results: DecraftedItemStackInfo[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_DecraftResultMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_DecraftResultMessage(param1: ICustomDataInput): void;
}
export = DecraftResultMessage;
