/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeStartAsVendorMessage = (function (_super) {
    __extends(ExchangeStartAsVendorMessage, _super);
    function ExchangeStartAsVendorMessage() {
        _super.call(this);
    }
    ExchangeStartAsVendorMessage.prototype.getMessageId = function () {
        return ExchangeStartAsVendorMessage.ID;
    };
    ExchangeStartAsVendorMessage.prototype.reset = function () {
    };
    ExchangeStartAsVendorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartAsVendorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartAsVendorMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartAsVendorMessage(param1);
    };
    ExchangeStartAsVendorMessage.prototype.serializeAs_ExchangeStartAsVendorMessage = function (param1) {
    };
    ExchangeStartAsVendorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartAsVendorMessage(param1);
    };
    ExchangeStartAsVendorMessage.prototype.deserializeAs_ExchangeStartAsVendorMessage = function (param1) {
    };
    ExchangeStartAsVendorMessage.ID = 5775;
    return ExchangeStartAsVendorMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStartAsVendorMessage;
