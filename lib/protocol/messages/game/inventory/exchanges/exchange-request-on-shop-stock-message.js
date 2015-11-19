/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeRequestOnShopStockMessage = (function (_super) {
    __extends(ExchangeRequestOnShopStockMessage, _super);
    function ExchangeRequestOnShopStockMessage() {
        _super.call(this);
    }
    ExchangeRequestOnShopStockMessage.prototype.getMessageId = function () {
        return ExchangeRequestOnShopStockMessage.ID;
    };
    ExchangeRequestOnShopStockMessage.prototype.reset = function () {
    };
    ExchangeRequestOnShopStockMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeRequestOnShopStockMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeRequestOnShopStockMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeRequestOnShopStockMessage(param1);
    };
    ExchangeRequestOnShopStockMessage.prototype.serializeAs_ExchangeRequestOnShopStockMessage = function (param1) {
    };
    ExchangeRequestOnShopStockMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeRequestOnShopStockMessage(param1);
    };
    ExchangeRequestOnShopStockMessage.prototype.deserializeAs_ExchangeRequestOnShopStockMessage = function (param1) {
    };
    ExchangeRequestOnShopStockMessage.ID = 5753;
    return ExchangeRequestOnShopStockMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeRequestOnShopStockMessage;
