/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import SellerBuyerDescriptor = require('../../../../types/game/data/items/seller-buyer-descriptor');
import ObjectItemToSellInBid = require('../../../../types/game/data/items/object-item-to-sell-in-bid');
declare class ExchangeStartedBidSellerMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    sellerDescriptor: SellerBuyerDescriptor;
    objectsInfos: ObjectItemToSellInBid[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeStartedBidSellerMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeStartedBidSellerMessage(param1: ICustomDataInput): void;
}
export = ExchangeStartedBidSellerMessage;
