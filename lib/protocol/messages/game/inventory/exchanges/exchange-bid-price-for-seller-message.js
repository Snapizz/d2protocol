/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBidPriceMessage = require('./exchange-bid-price-message');
var ExchangeBidPriceForSellerMessage = (function (_super) {
    __extends(ExchangeBidPriceForSellerMessage, _super);
    function ExchangeBidPriceForSellerMessage() {
        this.allIdentical = false;
        this.minimalPrices = [];
        _super.call(this);
    }
    ExchangeBidPriceForSellerMessage.prototype.getMessageId = function () {
        return ExchangeBidPriceForSellerMessage.ID;
    };
    ExchangeBidPriceForSellerMessage.prototype.reset = function () {
        this.allIdentical = false;
        this.minimalPrices = [];
    };
    ExchangeBidPriceForSellerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidPriceForSellerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidPriceForSellerMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidPriceForSellerMessage(param1);
    };
    ExchangeBidPriceForSellerMessage.prototype.serializeAs_ExchangeBidPriceForSellerMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeBidPriceMessage.call(this, param1);
        param1.writeBoolean(this.allIdentical);
        param1.writeShort(this.minimalPrices.length);
        var _loc2_ = 0;
        while (_loc2_ < this.minimalPrices.length) {
            if (this.minimalPrices[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.minimalPrices[_loc2_] + ') on element 2 (starting at 1) of minimalPrices.');
            }
            param1.writeVarInt(this.minimalPrices[_loc2_]);
            _loc2_++;
        }
    };
    ExchangeBidPriceForSellerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidPriceForSellerMessage(param1);
    };
    ExchangeBidPriceForSellerMessage.prototype.deserializeAs_ExchangeBidPriceForSellerMessage = function (param1) {
        var _loc4_ = 0;
        _super.prototype.deserialize.call(this, param1);
        this.allIdentical = param1.readBoolean();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of minimalPrices.');
            }
            this.minimalPrices.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeBidPriceForSellerMessage.ID = 6464;
    return ExchangeBidPriceForSellerMessage;
})(ExchangeBidPriceMessage);
module.exports = ExchangeBidPriceForSellerMessage;
