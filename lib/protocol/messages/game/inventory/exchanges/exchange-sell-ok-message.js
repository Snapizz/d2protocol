/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeSellOkMessage = (function (_super) {
    __extends(ExchangeSellOkMessage, _super);
    function ExchangeSellOkMessage() {
        _super.call(this);
    }
    ExchangeSellOkMessage.prototype.getMessageId = function () {
        return ExchangeSellOkMessage.ID;
    };
    ExchangeSellOkMessage.prototype.reset = function () {
    };
    ExchangeSellOkMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeSellOkMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeSellOkMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeSellOkMessage(param1);
    };
    ExchangeSellOkMessage.prototype.serializeAs_ExchangeSellOkMessage = function (param1) {
    };
    ExchangeSellOkMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeSellOkMessage(param1);
    };
    ExchangeSellOkMessage.prototype.deserializeAs_ExchangeSellOkMessage = function (param1) {
    };
    ExchangeSellOkMessage.ID = 5792;
    return ExchangeSellOkMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeSellOkMessage;
