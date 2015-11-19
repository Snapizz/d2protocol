/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeRequestedMessage = (function (_super) {
    __extends(ExchangeRequestedMessage, _super);
    function ExchangeRequestedMessage() {
        this.exchangeType = 0;
        _super.call(this);
    }
    ExchangeRequestedMessage.prototype.getMessageId = function () {
        return ExchangeRequestedMessage.ID;
    };
    ExchangeRequestedMessage.prototype.reset = function () {
        this.exchangeType = 0;
    };
    ExchangeRequestedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeRequestedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeRequestedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeRequestedMessage(param1);
    };
    ExchangeRequestedMessage.prototype.serializeAs_ExchangeRequestedMessage = function (param1) {
        param1.writeByte(this.exchangeType);
    };
    ExchangeRequestedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeRequestedMessage(param1);
    };
    ExchangeRequestedMessage.prototype.deserializeAs_ExchangeRequestedMessage = function (param1) {
        this.exchangeType = param1.readByte();
    };
    ExchangeRequestedMessage.ID = 5522;
    return ExchangeRequestedMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeRequestedMessage;
