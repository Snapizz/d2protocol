/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ObjectEffect = require('../../../../types/game/data/items/effects/object-effect');
declare class ExchangeBidHouseInListAddedMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    itemUID: number;
    objGenericId: number;
    effects: ObjectEffect[];
    prices: number[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeBidHouseInListAddedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeBidHouseInListAddedMessage(param1: ICustomDataInput): void;
}
export = ExchangeBidHouseInListAddedMessage;
