/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeShopStockMultiMovementRemovedMessage = (function (_super) {
    __extends(ExchangeShopStockMultiMovementRemovedMessage, _super);
    function ExchangeShopStockMultiMovementRemovedMessage() {
        this.objectIdList = [];
        _super.call(this);
    }
    ExchangeShopStockMultiMovementRemovedMessage.prototype.getMessageId = function () {
        return ExchangeShopStockMultiMovementRemovedMessage.ID;
    };
    ExchangeShopStockMultiMovementRemovedMessage.prototype.reset = function () {
        this.objectIdList = [];
    };
    ExchangeShopStockMultiMovementRemovedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeShopStockMultiMovementRemovedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeShopStockMultiMovementRemovedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeShopStockMultiMovementRemovedMessage(param1);
    };
    ExchangeShopStockMultiMovementRemovedMessage.prototype.serializeAs_ExchangeShopStockMultiMovementRemovedMessage = function (param1) {
        param1.writeShort(this.objectIdList.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objectIdList.length) {
            if (this.objectIdList[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.objectIdList[_loc2_] + ') on element 1 (starting at 1) of objectIdList.');
            }
            param1.writeVarInt(this.objectIdList[_loc2_]);
            _loc2_++;
        }
    };
    ExchangeShopStockMultiMovementRemovedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeShopStockMultiMovementRemovedMessage(param1);
    };
    ExchangeShopStockMultiMovementRemovedMessage.prototype.deserializeAs_ExchangeShopStockMultiMovementRemovedMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of objectIdList.');
            }
            this.objectIdList.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeShopStockMultiMovementRemovedMessage.ID = 6037;
    return ExchangeShopStockMultiMovementRemovedMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeShopStockMultiMovementRemovedMessage;
