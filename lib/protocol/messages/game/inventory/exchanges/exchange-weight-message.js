/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeWeightMessage = (function (_super) {
    __extends(ExchangeWeightMessage, _super);
    function ExchangeWeightMessage() {
        this.currentWeight = 0;
        this.maxWeight = 0;
        _super.call(this);
    }
    ExchangeWeightMessage.prototype.getMessageId = function () {
        return ExchangeWeightMessage.ID;
    };
    ExchangeWeightMessage.prototype.reset = function () {
        this.currentWeight = 0;
        this.maxWeight = 0;
    };
    ExchangeWeightMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeWeightMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeWeightMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeWeightMessage(param1);
    };
    ExchangeWeightMessage.prototype.serializeAs_ExchangeWeightMessage = function (param1) {
        if (this.currentWeight < 0) {
            throw new Error('Forbidden value (' + this.currentWeight + ') on element currentWeight.');
        }
        param1.writeVarInt(this.currentWeight);
        if (this.maxWeight < 0) {
            throw new Error('Forbidden value (' + this.maxWeight + ') on element maxWeight.');
        }
        param1.writeVarInt(this.maxWeight);
    };
    ExchangeWeightMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeWeightMessage(param1);
    };
    ExchangeWeightMessage.prototype.deserializeAs_ExchangeWeightMessage = function (param1) {
        this.currentWeight = param1.readVarUhInt();
        if (this.currentWeight < 0) {
            throw new Error('Forbidden value (' + this.currentWeight + ') on element of ExchangeWeightMessage.currentWeight.');
        }
        this.maxWeight = param1.readVarUhInt();
        if (this.maxWeight < 0) {
            throw new Error('Forbidden value (' + this.maxWeight + ') on element of ExchangeWeightMessage.maxWeight.');
        }
    };
    ExchangeWeightMessage.ID = 5793;
    return ExchangeWeightMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeWeightMessage;
