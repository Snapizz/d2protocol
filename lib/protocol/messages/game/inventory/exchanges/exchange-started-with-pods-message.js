/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeStartedMessage = require('./exchange-started-message');
var ExchangeStartedWithPodsMessage = (function (_super) {
    __extends(ExchangeStartedWithPodsMessage, _super);
    function ExchangeStartedWithPodsMessage() {
        this.firstCharacterId = 0;
        this.firstCharacterCurrentWeight = 0;
        this.firstCharacterMaxWeight = 0;
        this.secondCharacterId = 0;
        this.secondCharacterCurrentWeight = 0;
        this.secondCharacterMaxWeight = 0;
        _super.call(this);
    }
    ExchangeStartedWithPodsMessage.prototype.getMessageId = function () {
        return ExchangeStartedWithPodsMessage.ID;
    };
    ExchangeStartedWithPodsMessage.prototype.reset = function () {
        this.firstCharacterId = 0;
        this.firstCharacterCurrentWeight = 0;
        this.firstCharacterMaxWeight = 0;
        this.secondCharacterId = 0;
        this.secondCharacterCurrentWeight = 0;
        this.secondCharacterMaxWeight = 0;
    };
    ExchangeStartedWithPodsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartedWithPodsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartedWithPodsMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartedWithPodsMessage(param1);
    };
    ExchangeStartedWithPodsMessage.prototype.serializeAs_ExchangeStartedWithPodsMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeStartedMessage.call(this, param1);
        param1.writeInt(this.firstCharacterId);
        if (this.firstCharacterCurrentWeight < 0) {
            throw new Error('Forbidden value (' + this.firstCharacterCurrentWeight + ') on element firstCharacterCurrentWeight.');
        }
        param1.writeVarInt(this.firstCharacterCurrentWeight);
        if (this.firstCharacterMaxWeight < 0) {
            throw new Error('Forbidden value (' + this.firstCharacterMaxWeight + ') on element firstCharacterMaxWeight.');
        }
        param1.writeVarInt(this.firstCharacterMaxWeight);
        param1.writeInt(this.secondCharacterId);
        if (this.secondCharacterCurrentWeight < 0) {
            throw new Error('Forbidden value (' + this.secondCharacterCurrentWeight + ') on element secondCharacterCurrentWeight.');
        }
        param1.writeVarInt(this.secondCharacterCurrentWeight);
        if (this.secondCharacterMaxWeight < 0) {
            throw new Error('Forbidden value (' + this.secondCharacterMaxWeight + ') on element secondCharacterMaxWeight.');
        }
        param1.writeVarInt(this.secondCharacterMaxWeight);
    };
    ExchangeStartedWithPodsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartedWithPodsMessage(param1);
    };
    ExchangeStartedWithPodsMessage.prototype.deserializeAs_ExchangeStartedWithPodsMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.firstCharacterId = param1.readInt();
        this.firstCharacterCurrentWeight = param1.readVarUhInt();
        if (this.firstCharacterCurrentWeight < 0) {
            throw new Error('Forbidden value (' + this.firstCharacterCurrentWeight + ') on element of ExchangeStartedWithPodsMessage.firstCharacterCurrentWeight.');
        }
        this.firstCharacterMaxWeight = param1.readVarUhInt();
        if (this.firstCharacterMaxWeight < 0) {
            throw new Error('Forbidden value (' + this.firstCharacterMaxWeight + ') on element of ExchangeStartedWithPodsMessage.firstCharacterMaxWeight.');
        }
        this.secondCharacterId = param1.readInt();
        this.secondCharacterCurrentWeight = param1.readVarUhInt();
        if (this.secondCharacterCurrentWeight < 0) {
            throw new Error('Forbidden value (' + this.secondCharacterCurrentWeight + ') on element of ExchangeStartedWithPodsMessage.secondCharacterCurrentWeight.');
        }
        this.secondCharacterMaxWeight = param1.readVarUhInt();
        if (this.secondCharacterMaxWeight < 0) {
            throw new Error('Forbidden value (' + this.secondCharacterMaxWeight + ') on element of ExchangeStartedWithPodsMessage.secondCharacterMaxWeight.');
        }
    };
    ExchangeStartedWithPodsMessage.ID = 6129;
    return ExchangeStartedWithPodsMessage;
})(ExchangeStartedMessage);
module.exports = ExchangeStartedWithPodsMessage;
