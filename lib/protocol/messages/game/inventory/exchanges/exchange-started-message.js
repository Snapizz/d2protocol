/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeStartedMessage = (function (_super) {
    __extends(ExchangeStartedMessage, _super);
    function ExchangeStartedMessage() {
        this.exchangeType = 0;
        _super.call(this);
    }
    ExchangeStartedMessage.prototype.getMessageId = function () {
        return ExchangeStartedMessage.ID;
    };
    ExchangeStartedMessage.prototype.reset = function () {
        this.exchangeType = 0;
    };
    ExchangeStartedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartedMessage(param1);
    };
    ExchangeStartedMessage.prototype.serializeAs_ExchangeStartedMessage = function (param1) {
        param1.writeByte(this.exchangeType);
    };
    ExchangeStartedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartedMessage(param1);
    };
    ExchangeStartedMessage.prototype.deserializeAs_ExchangeStartedMessage = function (param1) {
        this.exchangeType = param1.readByte();
    };
    ExchangeStartedMessage.ID = 5512;
    return ExchangeStartedMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStartedMessage;
