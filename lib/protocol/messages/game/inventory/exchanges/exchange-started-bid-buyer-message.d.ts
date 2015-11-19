/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import SellerBuyerDescriptor = require('../../../../types/game/data/items/seller-buyer-descriptor');
declare class ExchangeStartedBidBuyerMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    buyerDescriptor: SellerBuyerDescriptor;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ExchangeStartedBidBuyerMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ExchangeStartedBidBuyerMessage(param1: ICustomDataInput): void;
}
export = ExchangeStartedBidBuyerMessage;
