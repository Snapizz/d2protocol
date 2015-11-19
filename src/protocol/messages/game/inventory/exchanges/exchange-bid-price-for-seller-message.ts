/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ExchangeBidPriceMessage = require('./exchange-bid-price-message');

class ExchangeBidPriceForSellerMessage extends ExchangeBidPriceMessage {
    public static ID: number = 6464;

    allIdentical: boolean;
    minimalPrices: number[];

    constructor() {
        this.allIdentical = false;
        this.minimalPrices = [];
        super();
    }

    public getMessageId(): number {
        return ExchangeBidPriceForSellerMessage.ID;
    }

    public reset(): void {
        this.allIdentical = false;
        this.minimalPrices = [];
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
        this.serializeAs_ExchangeBidPriceForSellerMessage(param1);
    }

    public serializeAs_ExchangeBidPriceForSellerMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ExchangeBidPriceMessage(param1);
        param1.writeBoolean(this.allIdentical);
        param1.writeShort(this.minimalPrices.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.minimalPrices.length) {
            if (this.minimalPrices[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.minimalPrices[_loc2_] + ') on element 2 (starting at 1) of minimalPrices.');
            }
            param1.writeVarInt(this.minimalPrices[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeBidPriceForSellerMessage(param1);
    }

    public deserializeAs_ExchangeBidPriceForSellerMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        super.deserialize(param1);
        this.allIdentical = param1.readBoolean();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of minimalPrices.');
            }
            this.minimalPrices.push(_loc4_);
            _loc3_++;
        }

    }
}

export = ExchangeBidPriceForSellerMessage;
