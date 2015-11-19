/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeCraftPaymentModifiedMessage = (function (_super) {
    __extends(ExchangeCraftPaymentModifiedMessage, _super);
    function ExchangeCraftPaymentModifiedMessage() {
        this.goldSum = 0;
        _super.call(this);
    }
    ExchangeCraftPaymentModifiedMessage.prototype.getMessageId = function () {
        return ExchangeCraftPaymentModifiedMessage.ID;
    };
    ExchangeCraftPaymentModifiedMessage.prototype.reset = function () {
        this.goldSum = 0;
    };
    ExchangeCraftPaymentModifiedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeCraftPaymentModifiedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeCraftPaymentModifiedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeCraftPaymentModifiedMessage(param1);
    };
    ExchangeCraftPaymentModifiedMessage.prototype.serializeAs_ExchangeCraftPaymentModifiedMessage = function (param1) {
        if (this.goldSum < 0) {
            throw new Error('Forbidden value (' + this.goldSum + ') on element goldSum.');
        }
        param1.writeVarInt(this.goldSum);
    };
    ExchangeCraftPaymentModifiedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeCraftPaymentModifiedMessage(param1);
    };
    ExchangeCraftPaymentModifiedMessage.prototype.deserializeAs_ExchangeCraftPaymentModifiedMessage = function (param1) {
        this.goldSum = param1.readVarUhInt();
        if (this.goldSum < 0) {
            throw new Error('Forbidden value (' + this.goldSum + ') on element of ExchangeCraftPaymentModifiedMessage.goldSum.');
        }
    };
    ExchangeCraftPaymentModifiedMessage.ID = 6578;
    return ExchangeCraftPaymentModifiedMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeCraftPaymentModifiedMessage;
