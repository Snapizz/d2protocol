/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectItemToSellInHumanVendorShop = require('../../../../types/game/data/items/object-item-to-sell-in-human-vendor-shop');
var ExchangeStartOkHumanVendorMessage = (function (_super) {
    __extends(ExchangeStartOkHumanVendorMessage, _super);
    function ExchangeStartOkHumanVendorMessage() {
        this.sellerId = 0;
        this.objectsInfos = [];
        _super.call(this);
    }
    ExchangeStartOkHumanVendorMessage.prototype.getMessageId = function () {
        return ExchangeStartOkHumanVendorMessage.ID;
    };
    ExchangeStartOkHumanVendorMessage.prototype.reset = function () {
        this.sellerId = 0;
        this.objectsInfos = [];
    };
    ExchangeStartOkHumanVendorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartOkHumanVendorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartOkHumanVendorMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartOkHumanVendorMessage(param1);
    };
    ExchangeStartOkHumanVendorMessage.prototype.serializeAs_ExchangeStartOkHumanVendorMessage = function (param1) {
        if (this.sellerId < 0) {
            throw new Error('Forbidden value (' + this.sellerId + ') on element sellerId.');
        }
        param1.writeVarInt(this.sellerId);
        param1.writeShort(this.objectsInfos.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objectsInfos.length) {
            (this.objectsInfos[_loc2_]).serializeAs_ObjectItemToSellInHumanVendorShop(param1);
            _loc2_++;
        }
    };
    ExchangeStartOkHumanVendorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartOkHumanVendorMessage(param1);
    };
    ExchangeStartOkHumanVendorMessage.prototype.deserializeAs_ExchangeStartOkHumanVendorMessage = function (param1) {
        var _loc4_ = null;
        this.sellerId = param1.readVarUhInt();
        if (this.sellerId < 0) {
            throw new Error('Forbidden value (' + this.sellerId + ') on element of ExchangeStartOkHumanVendorMessage.sellerId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItemToSellInHumanVendorShop();
            _loc4_.deserialize(param1);
            this.objectsInfos.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeStartOkHumanVendorMessage.ID = 5767;
    return ExchangeStartOkHumanVendorMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStartOkHumanVendorMessage;
