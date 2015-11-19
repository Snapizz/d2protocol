/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeObjectMessage = require('../exchanges/exchange-object-message');
var ExchangeKamaModifiedMessage = (function (_super) {
    __extends(ExchangeKamaModifiedMessage, _super);
    function ExchangeKamaModifiedMessage() {
        this.quantity = 0;
        _super.call(this);
    }
    ExchangeKamaModifiedMessage.prototype.getMessageId = function () {
        return ExchangeKamaModifiedMessage.ID;
    };
    ExchangeKamaModifiedMessage.prototype.reset = function () {
        this.quantity = 0;
    };
    ExchangeKamaModifiedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeKamaModifiedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeKamaModifiedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeKamaModifiedMessage(param1);
    };
    ExchangeKamaModifiedMessage.prototype.serializeAs_ExchangeKamaModifiedMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeObjectMessage.call(this, param1);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
    };
    ExchangeKamaModifiedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeKamaModifiedMessage(param1);
    };
    ExchangeKamaModifiedMessage.prototype.deserializeAs_ExchangeKamaModifiedMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ExchangeKamaModifiedMessage.quantity.');
        }
    };
    ExchangeKamaModifiedMessage.ID = 5521;
    return ExchangeKamaModifiedMessage;
})(ExchangeObjectMessage);
module.exports = ExchangeKamaModifiedMessage;
