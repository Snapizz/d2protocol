/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeRequestedMessage = require('./exchange-requested-message');
var ExchangeRequestedTradeMessage = (function (_super) {
    __extends(ExchangeRequestedTradeMessage, _super);
    function ExchangeRequestedTradeMessage() {
        this.source = 0;
        this.target = 0;
        _super.call(this);
    }
    ExchangeRequestedTradeMessage.prototype.getMessageId = function () {
        return ExchangeRequestedTradeMessage.ID;
    };
    ExchangeRequestedTradeMessage.prototype.reset = function () {
        this.source = 0;
        this.target = 0;
    };
    ExchangeRequestedTradeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeRequestedTradeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeRequestedTradeMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeRequestedTradeMessage(param1);
    };
    ExchangeRequestedTradeMessage.prototype.serializeAs_ExchangeRequestedTradeMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeRequestedMessage.call(this, param1);
        if (this.source < 0) {
            throw new Error('Forbidden value (' + this.source + ') on element source.');
        }
        param1.writeVarInt(this.source);
        if (this.target < 0) {
            throw new Error('Forbidden value (' + this.target + ') on element target.');
        }
        param1.writeVarInt(this.target);
    };
    ExchangeRequestedTradeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeRequestedTradeMessage(param1);
    };
    ExchangeRequestedTradeMessage.prototype.deserializeAs_ExchangeRequestedTradeMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.source = param1.readVarUhInt();
        if (this.source < 0) {
            throw new Error('Forbidden value (' + this.source + ') on element of ExchangeRequestedTradeMessage.source.');
        }
        this.target = param1.readVarUhInt();
        if (this.target < 0) {
            throw new Error('Forbidden value (' + this.target + ') on element of ExchangeRequestedTradeMessage.target.');
        }
    };
    ExchangeRequestedTradeMessage.ID = 5523;
    return ExchangeRequestedTradeMessage;
})(ExchangeRequestedMessage);
module.exports = ExchangeRequestedTradeMessage;
