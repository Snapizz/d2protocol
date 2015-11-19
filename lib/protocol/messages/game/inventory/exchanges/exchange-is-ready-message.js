/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeIsReadyMessage = (function (_super) {
    __extends(ExchangeIsReadyMessage, _super);
    function ExchangeIsReadyMessage() {
        this.id = 0;
        this.ready = false;
        _super.call(this);
    }
    ExchangeIsReadyMessage.prototype.getMessageId = function () {
        return ExchangeIsReadyMessage.ID;
    };
    ExchangeIsReadyMessage.prototype.reset = function () {
        this.id = 0;
        this.ready = false;
    };
    ExchangeIsReadyMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeIsReadyMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeIsReadyMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeIsReadyMessage(param1);
    };
    ExchangeIsReadyMessage.prototype.serializeAs_ExchangeIsReadyMessage = function (param1) {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarInt(this.id);
        param1.writeBoolean(this.ready);
    };
    ExchangeIsReadyMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeIsReadyMessage(param1);
    };
    ExchangeIsReadyMessage.prototype.deserializeAs_ExchangeIsReadyMessage = function (param1) {
        this.id = param1.readVarUhInt();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of ExchangeIsReadyMessage.id.');
        }
        this.ready = param1.readBoolean();
    };
    ExchangeIsReadyMessage.ID = 5509;
    return ExchangeIsReadyMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeIsReadyMessage;
