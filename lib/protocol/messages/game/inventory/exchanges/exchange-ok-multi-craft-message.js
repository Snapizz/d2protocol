/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeOkMultiCraftMessage = (function (_super) {
    __extends(ExchangeOkMultiCraftMessage, _super);
    function ExchangeOkMultiCraftMessage() {
        this.initiatorId = 0;
        this.otherId = 0;
        this.role = 0;
        _super.call(this);
    }
    ExchangeOkMultiCraftMessage.prototype.getMessageId = function () {
        return ExchangeOkMultiCraftMessage.ID;
    };
    ExchangeOkMultiCraftMessage.prototype.reset = function () {
        this.initiatorId = 0;
        this.otherId = 0;
        this.role = 0;
    };
    ExchangeOkMultiCraftMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeOkMultiCraftMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeOkMultiCraftMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeOkMultiCraftMessage(param1);
    };
    ExchangeOkMultiCraftMessage.prototype.serializeAs_ExchangeOkMultiCraftMessage = function (param1) {
        if (this.initiatorId < 0) {
            throw new Error('Forbidden value (' + this.initiatorId + ') on element initiatorId.');
        }
        param1.writeVarInt(this.initiatorId);
        if (this.otherId < 0) {
            throw new Error('Forbidden value (' + this.otherId + ') on element otherId.');
        }
        param1.writeVarInt(this.otherId);
        param1.writeByte(this.role);
    };
    ExchangeOkMultiCraftMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeOkMultiCraftMessage(param1);
    };
    ExchangeOkMultiCraftMessage.prototype.deserializeAs_ExchangeOkMultiCraftMessage = function (param1) {
        this.initiatorId = param1.readVarUhInt();
        if (this.initiatorId < 0) {
            throw new Error('Forbidden value (' + this.initiatorId + ') on element of ExchangeOkMultiCraftMessage.initiatorId.');
        }
        this.otherId = param1.readVarUhInt();
        if (this.otherId < 0) {
            throw new Error('Forbidden value (' + this.otherId + ') on element of ExchangeOkMultiCraftMessage.otherId.');
        }
        this.role = param1.readByte();
    };
    ExchangeOkMultiCraftMessage.ID = 5768;
    return ExchangeOkMultiCraftMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeOkMultiCraftMessage;
