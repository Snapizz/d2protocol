/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeErrorMessage = (function (_super) {
    __extends(ExchangeErrorMessage, _super);
    function ExchangeErrorMessage() {
        this.errorType = 0;
        _super.call(this);
    }
    ExchangeErrorMessage.prototype.getMessageId = function () {
        return ExchangeErrorMessage.ID;
    };
    ExchangeErrorMessage.prototype.reset = function () {
        this.errorType = 0;
    };
    ExchangeErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeErrorMessage(param1);
    };
    ExchangeErrorMessage.prototype.serializeAs_ExchangeErrorMessage = function (param1) {
        param1.writeByte(this.errorType);
    };
    ExchangeErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeErrorMessage(param1);
    };
    ExchangeErrorMessage.prototype.deserializeAs_ExchangeErrorMessage = function (param1) {
        this.errorType = param1.readByte();
    };
    ExchangeErrorMessage.ID = 5513;
    return ExchangeErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeErrorMessage;
