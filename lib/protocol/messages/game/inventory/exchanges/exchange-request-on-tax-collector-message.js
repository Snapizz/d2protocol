/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeRequestOnTaxCollectorMessage = (function (_super) {
    __extends(ExchangeRequestOnTaxCollectorMessage, _super);
    function ExchangeRequestOnTaxCollectorMessage() {
        this.taxCollectorId = 0;
        _super.call(this);
    }
    ExchangeRequestOnTaxCollectorMessage.prototype.getMessageId = function () {
        return ExchangeRequestOnTaxCollectorMessage.ID;
    };
    ExchangeRequestOnTaxCollectorMessage.prototype.reset = function () {
        this.taxCollectorId = 0;
    };
    ExchangeRequestOnTaxCollectorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeRequestOnTaxCollectorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeRequestOnTaxCollectorMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeRequestOnTaxCollectorMessage(param1);
    };
    ExchangeRequestOnTaxCollectorMessage.prototype.serializeAs_ExchangeRequestOnTaxCollectorMessage = function (param1) {
        param1.writeInt(this.taxCollectorId);
    };
    ExchangeRequestOnTaxCollectorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeRequestOnTaxCollectorMessage(param1);
    };
    ExchangeRequestOnTaxCollectorMessage.prototype.deserializeAs_ExchangeRequestOnTaxCollectorMessage = function (param1) {
        this.taxCollectorId = param1.readInt();
    };
    ExchangeRequestOnTaxCollectorMessage.ID = 5779;
    return ExchangeRequestOnTaxCollectorMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeRequestOnTaxCollectorMessage;
