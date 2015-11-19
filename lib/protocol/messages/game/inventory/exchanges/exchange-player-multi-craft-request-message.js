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
var ExchangePlayerMultiCraftRequestMessage = (function (_super) {
    __extends(ExchangePlayerMultiCraftRequestMessage, _super);
    function ExchangePlayerMultiCraftRequestMessage() {
        this.target = 0;
        this.skillId = 0;
        _super.call(this);
    }
    ExchangePlayerMultiCraftRequestMessage.prototype.getMessageId = function () {
        return ExchangePlayerMultiCraftRequestMessage.ID;
    };
    ExchangePlayerMultiCraftRequestMessage.prototype.reset = function () {
        this.target = 0;
        this.skillId = 0;
    };
    ExchangePlayerMultiCraftRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangePlayerMultiCraftRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangePlayerMultiCraftRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangePlayerMultiCraftRequestMessage(param1);
    };
    ExchangePlayerMultiCraftRequestMessage.prototype.serializeAs_ExchangePlayerMultiCraftRequestMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeRequestMessage.call(this, param1);
        if (this.target < 0) {
            throw new Error('Forbidden value (' + this.target + ') on element target.');
        }
        param1.writeVarInt(this.target);
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarInt(this.skillId);
    };
    ExchangePlayerMultiCraftRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangePlayerMultiCraftRequestMessage(param1);
    };
    ExchangePlayerMultiCraftRequestMessage.prototype.deserializeAs_ExchangePlayerMultiCraftRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.target = param1.readVarUhInt();
        if (this.target < 0) {
            throw new Error('Forbidden value (' + this.target + ') on element of ExchangePlayerMultiCraftRequestMessage.target.');
        }
        this.skillId = param1.readVarUhInt();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of ExchangePlayerMultiCraftRequestMessage.skillId.');
        }
    };
    ExchangePlayerMultiCraftRequestMessage.ID = 5784;
    return ExchangePlayerMultiCraftRequestMessage;
})(ExchangeRequestMessage);
module.exports = ExchangePlayerMultiCraftRequestMessage;
