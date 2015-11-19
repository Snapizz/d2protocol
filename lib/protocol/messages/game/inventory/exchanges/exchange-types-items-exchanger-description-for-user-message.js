/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BidExchangerObjectInfo = require('../../../../types/game/data/items/bid-exchanger-object-info');
var ExchangeTypesItemsExchangerDescriptionForUserMessage = (function (_super) {
    __extends(ExchangeTypesItemsExchangerDescriptionForUserMessage, _super);
    function ExchangeTypesItemsExchangerDescriptionForUserMessage() {
        this.itemTypeDescriptions = [];
        _super.call(this);
    }
    ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.getMessageId = function () {
        return ExchangeTypesItemsExchangerDescriptionForUserMessage.ID;
    };
    ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.reset = function () {
        this.itemTypeDescriptions = [];
    };
    ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage(param1);
    };
    ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.serializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage = function (param1) {
        param1.writeShort(this.itemTypeDescriptions.length);
        var _loc2_ = 0;
        while (_loc2_ < this.itemTypeDescriptions.length) {
            (this.itemTypeDescriptions[_loc2_]).serializeAs_BidExchangerObjectInfo(param1);
            _loc2_++;
        }
    };
    ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage(param1);
    };
    ExchangeTypesItemsExchangerDescriptionForUserMessage.prototype.deserializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new BidExchangerObjectInfo();
            _loc4_.deserialize(param1);
            this.itemTypeDescriptions.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeTypesItemsExchangerDescriptionForUserMessage.ID = 5752;
    return ExchangeTypesItemsExchangerDescriptionForUserMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeTypesItemsExchangerDescriptionForUserMessage;
