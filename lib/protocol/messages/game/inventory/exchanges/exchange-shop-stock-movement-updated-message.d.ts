/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ObjectItemToSell = require('../../../../types/game/data/items/object-item-to-sell');
declare class ExchangeShopStockMovementUpdatedMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    objectInfo: ObjectItemToSell;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeShopStockMovementUpdatedMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeShopStockMovementUpdatedMessage(param1: ICustomDataInput): void;
}
export = ExchangeShopStockMovementUpdatedMessage;
