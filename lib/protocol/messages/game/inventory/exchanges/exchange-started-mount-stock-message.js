/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectItem = require('../../../../types/game/data/items/object-item');
var ExchangeStartedMountStockMessage = (function (_super) {
    __extends(ExchangeStartedMountStockMessage, _super);
    function ExchangeStartedMountStockMessage() {
        this.objectsInfos = [];
        _super.call(this);
    }
    ExchangeStartedMountStockMessage.prototype.getMessageId = function () {
        return ExchangeStartedMountStockMessage.ID;
    };
    ExchangeStartedMountStockMessage.prototype.reset = function () {
        this.objectsInfos = [];
    };
    ExchangeStartedMountStockMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartedMountStockMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartedMountStockMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartedMountStockMessage(param1);
    };
    ExchangeStartedMountStockMessage.prototype.serializeAs_ExchangeStartedMountStockMessage = function (param1) {
        param1.writeShort(this.objectsInfos.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objectsInfos.length) {
            (this.objectsInfos[_loc2_]).serializeAs_ObjectItem(param1);
            _loc2_++;
        }
    };
    ExchangeStartedMountStockMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartedMountStockMessage(param1);
    };
    ExchangeStartedMountStockMessage.prototype.deserializeAs_ExchangeStartedMountStockMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItem();
            _loc4_.deserialize(param1);
            this.objectsInfos.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeStartedMountStockMessage.ID = 5984;
    return ExchangeStartedMountStockMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStartedMountStockMessage;
