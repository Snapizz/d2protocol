/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeStartOkRunesTradeMessage = (function (_super) {
    __extends(ExchangeStartOkRunesTradeMessage, _super);
    function ExchangeStartOkRunesTradeMessage() {
        _super.call(this);
    }
    ExchangeStartOkRunesTradeMessage.prototype.getMessageId = function () {
        return ExchangeStartOkRunesTradeMessage.ID;
    };
    ExchangeStartOkRunesTradeMessage.prototype.reset = function () {
    };
    ExchangeStartOkRunesTradeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartOkRunesTradeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartOkRunesTradeMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartOkRunesTradeMessage(param1);
    };
    ExchangeStartOkRunesTradeMessage.prototype.serializeAs_ExchangeStartOkRunesTradeMessage = function (param1) {
    };
    ExchangeStartOkRunesTradeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartOkRunesTradeMessage(param1);
    };
    ExchangeStartOkRunesTradeMessage.prototype.deserializeAs_ExchangeStartOkRunesTradeMessage = function (param1) {
    };
    ExchangeStartOkRunesTradeMessage.ID = 6567;
    return ExchangeStartOkRunesTradeMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStartOkRunesTradeMessage;
