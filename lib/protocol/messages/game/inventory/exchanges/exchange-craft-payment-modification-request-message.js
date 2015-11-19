/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeCraftPaymentModificationRequestMessage = (function (_super) {
    __extends(ExchangeCraftPaymentModificationRequestMessage, _super);
    function ExchangeCraftPaymentModificationRequestMessage() {
        this.quantity = 0;
        _super.call(this);
    }
    ExchangeCraftPaymentModificationRequestMessage.prototype.getMessageId = function () {
        return ExchangeCraftPaymentModificationRequestMessage.ID;
    };
    ExchangeCraftPaymentModificationRequestMessage.prototype.reset = function () {
        this.quantity = 0;
    };
    ExchangeCraftPaymentModificationRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeCraftPaymentModificationRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeCraftPaymentModificationRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeCraftPaymentModificationRequestMessage(param1);
    };
    ExchangeCraftPaymentModificationRequestMessage.prototype.serializeAs_ExchangeCraftPaymentModificationRequestMessage = function (param1) {
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
    };
    ExchangeCraftPaymentModificationRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeCraftPaymentModificationRequestMessage(param1);
    };
    ExchangeCraftPaymentModificationRequestMessage.prototype.deserializeAs_ExchangeCraftPaymentModificationRequestMessage = function (param1) {
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ExchangeCraftPaymentModificationRequestMessage.quantity.');
        }
    };
    ExchangeCraftPaymentModificationRequestMessage.ID = 6579;
    return ExchangeCraftPaymentModificationRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeCraftPaymentModificationRequestMessage;
