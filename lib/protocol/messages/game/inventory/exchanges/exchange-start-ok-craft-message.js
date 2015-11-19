/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeStartOkCraftMessage = (function (_super) {
    __extends(ExchangeStartOkCraftMessage, _super);
    function ExchangeStartOkCraftMessage() {
        _super.call(this);
    }
    ExchangeStartOkCraftMessage.prototype.getMessageId = function () {
        return ExchangeStartOkCraftMessage.ID;
    };
    ExchangeStartOkCraftMessage.prototype.reset = function () {
    };
    ExchangeStartOkCraftMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartOkCraftMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartOkCraftMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartOkCraftMessage(param1);
    };
    ExchangeStartOkCraftMessage.prototype.serializeAs_ExchangeStartOkCraftMessage = function (param1) {
    };
    ExchangeStartOkCraftMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartOkCraftMessage(param1);
    };
    ExchangeStartOkCraftMessage.prototype.deserializeAs_ExchangeStartOkCraftMessage = function (param1) {
    };
    ExchangeStartOkCraftMessage.ID = 5813;
    return ExchangeStartOkCraftMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStartOkCraftMessage;
