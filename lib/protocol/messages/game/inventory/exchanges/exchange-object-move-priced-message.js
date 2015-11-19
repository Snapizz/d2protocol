/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeObjectMoveMessage = require('./exchange-object-move-message');
var ExchangeObjectMovePricedMessage = (function (_super) {
    __extends(ExchangeObjectMovePricedMessage, _super);
    function ExchangeObjectMovePricedMessage() {
        this.price = 0;
        _super.call(this);
    }
    ExchangeObjectMovePricedMessage.prototype.getMessageId = function () {
        return ExchangeObjectMovePricedMessage.ID;
    };
    ExchangeObjectMovePricedMessage.prototype.reset = function () {
        this.price = 0;
    };
    ExchangeObjectMovePricedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectMovePricedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectMovePricedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectMovePricedMessage(param1);
    };
    ExchangeObjectMovePricedMessage.prototype.serializeAs_ExchangeObjectMovePricedMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeObjectMoveMessage.call(this, param1);
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeVarInt(this.price);
    };
    ExchangeObjectMovePricedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectMovePricedMessage(param1);
    };
    ExchangeObjectMovePricedMessage.prototype.deserializeAs_ExchangeObjectMovePricedMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of ExchangeObjectMovePricedMessage.price.');
        }
    };
    ExchangeObjectMovePricedMessage.ID = 5514;
    return ExchangeObjectMovePricedMessage;
})(ExchangeObjectMoveMessage);
module.exports = ExchangeObjectMovePricedMessage;
