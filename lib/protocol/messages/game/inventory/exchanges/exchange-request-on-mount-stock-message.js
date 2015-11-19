/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeRequestOnMountStockMessage = (function (_super) {
    __extends(ExchangeRequestOnMountStockMessage, _super);
    function ExchangeRequestOnMountStockMessage() {
        _super.call(this);
    }
    ExchangeRequestOnMountStockMessage.prototype.getMessageId = function () {
        return ExchangeRequestOnMountStockMessage.ID;
    };
    ExchangeRequestOnMountStockMessage.prototype.reset = function () {
    };
    ExchangeRequestOnMountStockMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeRequestOnMountStockMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeRequestOnMountStockMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeRequestOnMountStockMessage(param1);
    };
    ExchangeRequestOnMountStockMessage.prototype.serializeAs_ExchangeRequestOnMountStockMessage = function (param1) {
    };
    ExchangeRequestOnMountStockMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeRequestOnMountStockMessage(param1);
    };
    ExchangeRequestOnMountStockMessage.prototype.deserializeAs_ExchangeRequestOnMountStockMessage = function (param1) {
    };
    ExchangeRequestOnMountStockMessage.ID = 5986;
    return ExchangeRequestOnMountStockMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeRequestOnMountStockMessage;
