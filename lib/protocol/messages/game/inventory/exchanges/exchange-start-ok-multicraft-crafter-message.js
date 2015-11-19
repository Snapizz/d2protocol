/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeStartOkMulticraftCrafterMessage = (function (_super) {
    __extends(ExchangeStartOkMulticraftCrafterMessage, _super);
    function ExchangeStartOkMulticraftCrafterMessage() {
        this.skillId = 0;
        _super.call(this);
    }
    ExchangeStartOkMulticraftCrafterMessage.prototype.getMessageId = function () {
        return ExchangeStartOkMulticraftCrafterMessage.ID;
    };
    ExchangeStartOkMulticraftCrafterMessage.prototype.reset = function () {
        this.skillId = 0;
    };
    ExchangeStartOkMulticraftCrafterMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartOkMulticraftCrafterMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartOkMulticraftCrafterMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartOkMulticraftCrafterMessage(param1);
    };
    ExchangeStartOkMulticraftCrafterMessage.prototype.serializeAs_ExchangeStartOkMulticraftCrafterMessage = function (param1) {
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarInt(this.skillId);
    };
    ExchangeStartOkMulticraftCrafterMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartOkMulticraftCrafterMessage(param1);
    };
    ExchangeStartOkMulticraftCrafterMessage.prototype.deserializeAs_ExchangeStartOkMulticraftCrafterMessage = function (param1) {
        this.skillId = param1.readVarUhInt();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of ExchangeStartOkMulticraftCrafterMessage.skillId.');
        }
    };
    ExchangeStartOkMulticraftCrafterMessage.ID = 5818;
    return ExchangeStartOkMulticraftCrafterMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStartOkMulticraftCrafterMessage;
