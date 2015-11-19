/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBuyOkMessage = (function (_super) {
    __extends(ExchangeBuyOkMessage, _super);
    function ExchangeBuyOkMessage() {
        _super.call(this);
    }
    ExchangeBuyOkMessage.prototype.getMessageId = function () {
        return ExchangeBuyOkMessage.ID;
    };
    ExchangeBuyOkMessage.prototype.reset = function () {
    };
    ExchangeBuyOkMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBuyOkMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBuyOkMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBuyOkMessage(param1);
    };
    ExchangeBuyOkMessage.prototype.serializeAs_ExchangeBuyOkMessage = function (param1) {
    };
    ExchangeBuyOkMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBuyOkMessage(param1);
    };
    ExchangeBuyOkMessage.prototype.deserializeAs_ExchangeBuyOkMessage = function (param1) {
    };
    ExchangeBuyOkMessage.ID = 5759;
    return ExchangeBuyOkMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBuyOkMessage;
