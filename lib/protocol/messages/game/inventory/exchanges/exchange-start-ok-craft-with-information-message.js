/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeStartOkCraftMessage = require('./exchange-start-ok-craft-message');
var ExchangeStartOkCraftWithInformationMessage = (function (_super) {
    __extends(ExchangeStartOkCraftWithInformationMessage, _super);
    function ExchangeStartOkCraftWithInformationMessage() {
        this.skillId = 0;
        _super.call(this);
    }
    ExchangeStartOkCraftWithInformationMessage.prototype.getMessageId = function () {
        return ExchangeStartOkCraftWithInformationMessage.ID;
    };
    ExchangeStartOkCraftWithInformationMessage.prototype.reset = function () {
        this.skillId = 0;
    };
    ExchangeStartOkCraftWithInformationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartOkCraftWithInformationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartOkCraftWithInformationMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartOkCraftWithInformationMessage(param1);
    };
    ExchangeStartOkCraftWithInformationMessage.prototype.serializeAs_ExchangeStartOkCraftWithInformationMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeStartOkCraftMessage.call(this, param1);
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarInt(this.skillId);
    };
    ExchangeStartOkCraftWithInformationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartOkCraftWithInformationMessage(param1);
    };
    ExchangeStartOkCraftWithInformationMessage.prototype.deserializeAs_ExchangeStartOkCraftWithInformationMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.skillId = param1.readVarUhInt();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of ExchangeStartOkCraftWithInformationMessage.skillId.');
        }
    };
    ExchangeStartOkCraftWithInformationMessage.ID = 5941;
    return ExchangeStartOkCraftWithInformationMessage;
})(ExchangeStartOkCraftMessage);
module.exports = ExchangeStartOkCraftWithInformationMessage;
