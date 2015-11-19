/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ObjectItemToSellInNpcShop = require('../../../../types/game/data/items/object-item-to-sell-in-npc-shop');
declare class ExchangeStartOkNpcShopMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    npcSellerId: number;
    tokenId: number;
    objectsInfos: ObjectItemToSellInNpcShop[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeStartOkNpcShopMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeStartOkNpcShopMessage(param1: ICustomDataInput): void;
}
export = ExchangeStartOkNpcShopMessage;
