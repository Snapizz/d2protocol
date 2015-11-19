/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeRequestMessage = require('./exchange-request-message');
var ExchangePlayerRequestMessage = (function (_super) {
    __extends(ExchangePlayerRequestMessage, _super);
    function ExchangePlayerRequestMessage() {
        this.target = 0;
        _super.call(this);
    }
    ExchangePlayerRequestMessage.prototype.getMessageId = function () {
        return ExchangePlayerRequestMessage.ID;
    };
    ExchangePlayerRequestMessage.prototype.reset = function () {
        this.target = 0;
    };
    ExchangePlayerRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangePlayerRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangePlayerRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangePlayerRequestMessage(param1);
    };
    ExchangePlayerRequestMessage.prototype.serializeAs_ExchangePlayerRequestMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeRequestMessage.call(this, param1);
        if (this.target < 0) {
            throw new Error('Forbidden value (' + this.target + ') on element target.');
        }
        param1.writeVarInt(this.target);
    };
    ExchangePlayerRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangePlayerRequestMessage(param1);
    };
    ExchangePlayerRequestMessage.prototype.deserializeAs_ExchangePlayerRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.target = param1.readVarUhInt();
        if (this.target < 0) {
            throw new Error('Forbidden value (' + this.target + ') on element of ExchangePlayerRequestMessage.target.');
        }
    };
    ExchangePlayerRequestMessage.ID = 5773;
    return ExchangePlayerRequestMessage;
})(ExchangeRequestMessage);
module.exports = ExchangePlayerRequestMessage;
