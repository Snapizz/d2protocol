/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeSellMessage = (function (_super) {
    __extends(ExchangeSellMessage, _super);
    function ExchangeSellMessage() {
        this.objectToSellId = 0;
        this.quantity = 0;
        _super.call(this);
    }
    ExchangeSellMessage.prototype.getMessageId = function () {
        return ExchangeSellMessage.ID;
    };
    ExchangeSellMessage.prototype.reset = function () {
        this.objectToSellId = 0;
        this.quantity = 0;
    };
    ExchangeSellMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeSellMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeSellMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeSellMessage(param1);
    };
    ExchangeSellMessage.prototype.serializeAs_ExchangeSellMessage = function (param1) {
        if (this.objectToSellId < 0) {
            throw new Error('Forbidden value (' + this.objectToSellId + ') on element objectToSellId.');
        }
        param1.writeVarInt(this.objectToSellId);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
    };
    ExchangeSellMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeSellMessage(param1);
    };
    ExchangeSellMessage.prototype.deserializeAs_ExchangeSellMessage = function (param1) {
        this.objectToSellId = param1.readVarUhInt();
        if (this.objectToSellId < 0) {
            throw new Error('Forbidden value (' + this.objectToSellId + ') on element of ExchangeSellMessage.objectToSellId.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ExchangeSellMessage.quantity.');
        }
    };
    ExchangeSellMessage.ID = 5778;
    return ExchangeSellMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeSellMessage;
