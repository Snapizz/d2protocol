/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeReplyTaxVendorMessage = (function (_super) {
    __extends(ExchangeReplyTaxVendorMessage, _super);
    function ExchangeReplyTaxVendorMessage() {
        this.objectValue = 0;
        this.totalTaxValue = 0;
        _super.call(this);
    }
    ExchangeReplyTaxVendorMessage.prototype.getMessageId = function () {
        return ExchangeReplyTaxVendorMessage.ID;
    };
    ExchangeReplyTaxVendorMessage.prototype.reset = function () {
        this.objectValue = 0;
        this.totalTaxValue = 0;
    };
    ExchangeReplyTaxVendorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeReplyTaxVendorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeReplyTaxVendorMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeReplyTaxVendorMessage(param1);
    };
    ExchangeReplyTaxVendorMessage.prototype.serializeAs_ExchangeReplyTaxVendorMessage = function (param1) {
        if (this.objectValue < 0) {
            throw new Error('Forbidden value (' + this.objectValue + ') on element objectValue.');
        }
        param1.writeVarInt(this.objectValue);
        if (this.totalTaxValue < 0) {
            throw new Error('Forbidden value (' + this.totalTaxValue + ') on element totalTaxValue.');
        }
        param1.writeVarInt(this.totalTaxValue);
    };
    ExchangeReplyTaxVendorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeReplyTaxVendorMessage(param1);
    };
    ExchangeReplyTaxVendorMessage.prototype.deserializeAs_ExchangeReplyTaxVendorMessage = function (param1) {
        this.objectValue = param1.readVarUhInt();
        if (this.objectValue < 0) {
            throw new Error('Forbidden value (' + this.objectValue + ') on element of ExchangeReplyTaxVendorMessage.objectValue.');
        }
        this.totalTaxValue = param1.readVarUhInt();
        if (this.totalTaxValue < 0) {
            throw new Error('Forbidden value (' + this.totalTaxValue + ') on element of ExchangeReplyTaxVendorMessage.totalTaxValue.');
        }
    };
    ExchangeReplyTaxVendorMessage.ID = 5787;
    return ExchangeReplyTaxVendorMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeReplyTaxVendorMessage;
