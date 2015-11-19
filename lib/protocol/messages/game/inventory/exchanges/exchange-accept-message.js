/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeAcceptMessage = (function (_super) {
    __extends(ExchangeAcceptMessage, _super);
    function ExchangeAcceptMessage() {
        _super.call(this);
    }
    ExchangeAcceptMessage.prototype.getMessageId = function () {
        return ExchangeAcceptMessage.ID;
    };
    ExchangeAcceptMessage.prototype.reset = function () {
    };
    ExchangeAcceptMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeAcceptMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeAcceptMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeAcceptMessage(param1);
    };
    ExchangeAcceptMessage.prototype.serializeAs_ExchangeAcceptMessage = function (param1) {
    };
    ExchangeAcceptMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeAcceptMessage(param1);
    };
    ExchangeAcceptMessage.prototype.deserializeAs_ExchangeAcceptMessage = function (param1) {
    };
    ExchangeAcceptMessage.ID = 5508;
    return ExchangeAcceptMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeAcceptMessage;
