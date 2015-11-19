/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBidSearchOkMessage = (function (_super) {
    __extends(ExchangeBidSearchOkMessage, _super);
    function ExchangeBidSearchOkMessage() {
        _super.call(this);
    }
    ExchangeBidSearchOkMessage.prototype.getMessageId = function () {
        return ExchangeBidSearchOkMessage.ID;
    };
    ExchangeBidSearchOkMessage.prototype.reset = function () {
    };
    ExchangeBidSearchOkMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidSearchOkMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidSearchOkMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidSearchOkMessage(param1);
    };
    ExchangeBidSearchOkMessage.prototype.serializeAs_ExchangeBidSearchOkMessage = function (param1) {
    };
    ExchangeBidSearchOkMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidSearchOkMessage(param1);
    };
    ExchangeBidSearchOkMessage.prototype.deserializeAs_ExchangeBidSearchOkMessage = function (param1) {
    };
    ExchangeBidSearchOkMessage.ID = 5802;
    return ExchangeBidSearchOkMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBidSearchOkMessage;
