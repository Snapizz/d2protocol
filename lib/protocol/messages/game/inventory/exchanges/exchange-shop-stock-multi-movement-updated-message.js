/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectItemToSell = require('../../../../types/game/data/items/object-item-to-sell');
var ExchangeShopStockMultiMovementUpdatedMessage = (function (_super) {
    __extends(ExchangeShopStockMultiMovementUpdatedMessage, _super);
    function ExchangeShopStockMultiMovementUpdatedMessage() {
        this.objectInfoList = [];
        _super.call(this);
    }
    ExchangeShopStockMultiMovementUpdatedMessage.prototype.getMessageId = function () {
        return ExchangeShopStockMultiMovementUpdatedMessage.ID;
    };
    ExchangeShopStockMultiMovementUpdatedMessage.prototype.reset = function () {
        this.objectInfoList = [];
    };
    ExchangeShopStockMultiMovementUpdatedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeShopStockMultiMovementUpdatedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeShopStockMultiMovementUpdatedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeShopStockMultiMovementUpdatedMessage(param1);
    };
    ExchangeShopStockMultiMovementUpdatedMessage.prototype.serializeAs_ExchangeShopStockMultiMovementUpdatedMessage = function (param1) {
        param1.writeShort(this.objectInfoList.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objectInfoList.length) {
            (this.objectInfoList[_loc2_]).serializeAs_ObjectItemToSell(param1);
            _loc2_++;
        }
    };
    ExchangeShopStockMultiMovementUpdatedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeShopStockMultiMovementUpdatedMessage(param1);
    };
    ExchangeShopStockMultiMovementUpdatedMessage.prototype.deserializeAs_ExchangeShopStockMultiMovementUpdatedMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItemToSell();
            _loc4_.deserialize(param1);
            this.objectInfoList.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeShopStockMultiMovementUpdatedMessage.ID = 6038;
    return ExchangeShopStockMultiMovementUpdatedMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeShopStockMultiMovementUpdatedMessage;
