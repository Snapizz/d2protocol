/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeItemAutoCraftStopedMessage = (function (_super) {
    __extends(ExchangeItemAutoCraftStopedMessage, _super);
    function ExchangeItemAutoCraftStopedMessage() {
        this.reason = 0;
        _super.call(this);
    }
    ExchangeItemAutoCraftStopedMessage.prototype.getMessageId = function () {
        return ExchangeItemAutoCraftStopedMessage.ID;
    };
    ExchangeItemAutoCraftStopedMessage.prototype.reset = function () {
        this.reason = 0;
    };
    ExchangeItemAutoCraftStopedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeItemAutoCraftStopedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeItemAutoCraftStopedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeItemAutoCraftStopedMessage(param1);
    };
    ExchangeItemAutoCraftStopedMessage.prototype.serializeAs_ExchangeItemAutoCraftStopedMessage = function (param1) {
        param1.writeByte(this.reason);
    };
    ExchangeItemAutoCraftStopedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeItemAutoCraftStopedMessage(param1);
    };
    ExchangeItemAutoCraftStopedMessage.prototype.deserializeAs_ExchangeItemAutoCraftStopedMessage = function (param1) {
        this.reason = param1.readByte();
    };
    ExchangeItemAutoCraftStopedMessage.ID = 5810;
    return ExchangeItemAutoCraftStopedMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeItemAutoCraftStopedMessage;
