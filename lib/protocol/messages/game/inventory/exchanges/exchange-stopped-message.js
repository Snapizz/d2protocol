/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeStoppedMessage = (function (_super) {
    __extends(ExchangeStoppedMessage, _super);
    function ExchangeStoppedMessage() {
        this.id = 0;
        _super.call(this);
    }
    ExchangeStoppedMessage.prototype.getMessageId = function () {
        return ExchangeStoppedMessage.ID;
    };
    ExchangeStoppedMessage.prototype.reset = function () {
        this.id = 0;
    };
    ExchangeStoppedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStoppedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStoppedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStoppedMessage(param1);
    };
    ExchangeStoppedMessage.prototype.serializeAs_ExchangeStoppedMessage = function (param1) {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarInt(this.id);
    };
    ExchangeStoppedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStoppedMessage(param1);
    };
    ExchangeStoppedMessage.prototype.deserializeAs_ExchangeStoppedMessage = function (param1) {
        this.id = param1.readVarUhInt();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of ExchangeStoppedMessage.id.');
        }
    };
    ExchangeStoppedMessage.ID = 6589;
    return ExchangeStoppedMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStoppedMessage;
