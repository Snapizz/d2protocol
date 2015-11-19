/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import SellerBuyerDescriptor = require('../../../../types/game/data/items/seller-buyer-descriptor');
import ObjectItemToSellInBid = require('../../../../types/game/data/items/object-item-to-sell-in-bid');

class ExchangeStartedBidSellerMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5905;

    sellerDescriptor: SellerBuyerDescriptor;
    objectsInfos: ObjectItemToSellInBid[];

    constructor() {
        this.sellerDescriptor = new SellerBuyerDescriptor();
        this.objectsInfos = [];
        super();
    }

    public getMessageId(): number {
        return ExchangeStartedBidSellerMessage.ID;
    }

    public reset(): void {
        this.sellerDescriptor = new SellerBuyerDescriptor();
        this.objectsInfos = [];
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ExchangeStartedBidSellerMessage(param1);
    }

    public serializeAs_ExchangeStartedBidSellerMessage(param1: ICustomDataOutput): void {
        this.sellerDescriptor.serializeAs_SellerBuyerDescriptor(param1);
        param1.writeShort(this.objectsInfos.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.objectsInfos.length) {
            (this.objectsInfos[_loc2_]).serializeAs_ObjectItemToSellInBid(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeStartedBidSellerMessage(param1);
    }

    public deserializeAs_ExchangeStartedBidSellerMessage(param1: ICustomDataInput): void {
        var _loc4_: ObjectItemToSellInBid = null;
        this.sellerDescriptor = new SellerBuyerDescriptor();
        this.sellerDescriptor.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new ObjectItemToSellInBid();
            _loc4_.deserialize(param1);
            this.objectsInfos.push(_loc4_);
            _loc3_++;
        }

    }
}

export = ExchangeStartedBidSellerMessage;
