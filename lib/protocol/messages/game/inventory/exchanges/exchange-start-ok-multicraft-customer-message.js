/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeStartOkMulticraftCustomerMessage = (function (_super) {
    __extends(ExchangeStartOkMulticraftCustomerMessage, _super);
    function ExchangeStartOkMulticraftCustomerMessage() {
        this.skillId = 0;
        this.crafterJobLevel = 0;
        _super.call(this);
    }
    ExchangeStartOkMulticraftCustomerMessage.prototype.getMessageId = function () {
        return ExchangeStartOkMulticraftCustomerMessage.ID;
    };
    ExchangeStartOkMulticraftCustomerMessage.prototype.reset = function () {
        this.skillId = 0;
        this.crafterJobLevel = 0;
    };
    ExchangeStartOkMulticraftCustomerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartOkMulticraftCustomerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartOkMulticraftCustomerMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartOkMulticraftCustomerMessage(param1);
    };
    ExchangeStartOkMulticraftCustomerMessage.prototype.serializeAs_ExchangeStartOkMulticraftCustomerMessage = function (param1) {
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarInt(this.skillId);
        if (this.crafterJobLevel < 0 || this.crafterJobLevel > 255) {
            throw new Error('Forbidden value (' + this.crafterJobLevel + ') on element crafterJobLevel.');
        }
        param1.writeByte(this.crafterJobLevel);
    };
    ExchangeStartOkMulticraftCustomerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartOkMulticraftCustomerMessage(param1);
    };
    ExchangeStartOkMulticraftCustomerMessage.prototype.deserializeAs_ExchangeStartOkMulticraftCustomerMessage = function (param1) {
        this.skillId = param1.readVarUhInt();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of ExchangeStartOkMulticraftCustomerMessage.skillId.');
        }
        this.crafterJobLevel = param1.readUnsignedByte();
        if (this.crafterJobLevel < 0 || this.crafterJobLevel > 255) {
            throw new Error('Forbidden value (' + this.crafterJobLevel + ') on element of ExchangeStartOkMulticraftCustomerMessage.crafterJobLevel.');
        }
    };
    ExchangeStartOkMulticraftCustomerMessage.ID = 5817;
    return ExchangeStartOkMulticraftCustomerMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStartOkMulticraftCustomerMessage;
