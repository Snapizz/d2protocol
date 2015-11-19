/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeShowVendorTaxMessage = (function (_super) {
    __extends(ExchangeShowVendorTaxMessage, _super);
    function ExchangeShowVendorTaxMessage() {
        _super.call(this);
    }
    ExchangeShowVendorTaxMessage.prototype.getMessageId = function () {
        return ExchangeShowVendorTaxMessage.ID;
    };
    ExchangeShowVendorTaxMessage.prototype.reset = function () {
    };
    ExchangeShowVendorTaxMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeShowVendorTaxMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeShowVendorTaxMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeShowVendorTaxMessage(param1);
    };
    ExchangeShowVendorTaxMessage.prototype.serializeAs_ExchangeShowVendorTaxMessage = function (param1) {
    };
    ExchangeShowVendorTaxMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeShowVendorTaxMessage(param1);
    };
    ExchangeShowVendorTaxMessage.prototype.deserializeAs_ExchangeShowVendorTaxMessage = function (param1) {
    };
    ExchangeShowVendorTaxMessage.ID = 5783;
    return ExchangeShowVendorTaxMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeShowVendorTaxMessage;
