/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeWaitingResultMessage = (function (_super) {
    __extends(ExchangeWaitingResultMessage, _super);
    function ExchangeWaitingResultMessage() {
        this.bwait = false;
        _super.call(this);
    }
    ExchangeWaitingResultMessage.prototype.getMessageId = function () {
        return ExchangeWaitingResultMessage.ID;
    };
    ExchangeWaitingResultMessage.prototype.reset = function () {
        this.bwait = false;
    };
    ExchangeWaitingResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeWaitingResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeWaitingResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeWaitingResultMessage(param1);
    };
    ExchangeWaitingResultMessage.prototype.serializeAs_ExchangeWaitingResultMessage = function (param1) {
        param1.writeBoolean(this.bwait);
    };
    ExchangeWaitingResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeWaitingResultMessage(param1);
    };
    ExchangeWaitingResultMessage.prototype.deserializeAs_ExchangeWaitingResultMessage = function (param1) {
        this.bwait = param1.readBoolean();
    };
    ExchangeWaitingResultMessage.ID = 5786;
    return ExchangeWaitingResultMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeWaitingResultMessage;
