/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeObjectMoveMessage = (function (_super) {
    __extends(ExchangeObjectMoveMessage, _super);
    function ExchangeObjectMoveMessage() {
        this.objectUID = 0;
        this.quantity = 0;
        _super.call(this);
    }
    ExchangeObjectMoveMessage.prototype.getMessageId = function () {
        return ExchangeObjectMoveMessage.ID;
    };
    ExchangeObjectMoveMessage.prototype.reset = function () {
        this.objectUID = 0;
        this.quantity = 0;
    };
    ExchangeObjectMoveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectMoveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectMoveMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectMoveMessage(param1);
    };
    ExchangeObjectMoveMessage.prototype.serializeAs_ExchangeObjectMoveMessage = function (param1) {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        param1.writeVarInt(this.quantity);
    };
    ExchangeObjectMoveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectMoveMessage(param1);
    };
    ExchangeObjectMoveMessage.prototype.deserializeAs_ExchangeObjectMoveMessage = function (param1) {
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ExchangeObjectMoveMessage.objectUID.');
        }
        this.quantity = param1.readVarInt();
    };
    ExchangeObjectMoveMessage.ID = 5518;
    return ExchangeObjectMoveMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeObjectMoveMessage;
