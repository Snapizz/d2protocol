/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeReadyMessage = (function (_super) {
    __extends(ExchangeReadyMessage, _super);
    function ExchangeReadyMessage() {
        this.ready = false;
        this.step = 0;
        _super.call(this);
    }
    ExchangeReadyMessage.prototype.getMessageId = function () {
        return ExchangeReadyMessage.ID;
    };
    ExchangeReadyMessage.prototype.reset = function () {
        this.ready = false;
        this.step = 0;
    };
    ExchangeReadyMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeReadyMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeReadyMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeReadyMessage(param1);
    };
    ExchangeReadyMessage.prototype.serializeAs_ExchangeReadyMessage = function (param1) {
        param1.writeBoolean(this.ready);
        if (this.step < 0) {
            throw new Error('Forbidden value (' + this.step + ') on element step.');
        }
        param1.writeVarShort(this.step);
    };
    ExchangeReadyMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeReadyMessage(param1);
    };
    ExchangeReadyMessage.prototype.deserializeAs_ExchangeReadyMessage = function (param1) {
        this.ready = param1.readBoolean();
        this.step = param1.readVarUhShort();
        if (this.step < 0) {
            throw new Error('Forbidden value (' + this.step + ') on element of ExchangeReadyMessage.step.');
        }
    };
    ExchangeReadyMessage.ID = 5511;
    return ExchangeReadyMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeReadyMessage;
