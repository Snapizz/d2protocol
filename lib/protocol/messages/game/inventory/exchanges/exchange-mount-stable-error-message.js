/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeMountStableErrorMessage = (function (_super) {
    __extends(ExchangeMountStableErrorMessage, _super);
    function ExchangeMountStableErrorMessage() {
        _super.call(this);
    }
    ExchangeMountStableErrorMessage.prototype.getMessageId = function () {
        return ExchangeMountStableErrorMessage.ID;
    };
    ExchangeMountStableErrorMessage.prototype.reset = function () {
    };
    ExchangeMountStableErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeMountStableErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeMountStableErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeMountStableErrorMessage(param1);
    };
    ExchangeMountStableErrorMessage.prototype.serializeAs_ExchangeMountStableErrorMessage = function (param1) {
    };
    ExchangeMountStableErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeMountStableErrorMessage(param1);
    };
    ExchangeMountStableErrorMessage.prototype.deserializeAs_ExchangeMountStableErrorMessage = function (param1) {
    };
    ExchangeMountStableErrorMessage.ID = 5981;
    return ExchangeMountStableErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeMountStableErrorMessage;
