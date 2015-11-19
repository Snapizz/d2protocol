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
var ExchangeStartedWithStorageMessage = (function (_super) {
    __extends(ExchangeStartedWithStorageMessage, _super);
    function ExchangeStartedWithStorageMessage() {
        this.storageMaxSlot = 0;
        _super.call(this);
    }
    ExchangeStartedWithStorageMessage.prototype.getMessageId = function () {
        return ExchangeStartedWithStorageMessage.ID;
    };
    ExchangeStartedWithStorageMessage.prototype.reset = function () {
        this.storageMaxSlot = 0;
    };
    ExchangeStartedWithStorageMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartedWithStorageMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartedWithStorageMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartedWithStorageMessage(param1);
    };
    ExchangeStartedWithStorageMessage.prototype.serializeAs_ExchangeStartedWithStorageMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeStartedMessage.call(this, param1);
        if (this.storageMaxSlot < 0) {
            throw new Error('Forbidden value (' + this.storageMaxSlot + ') on element storageMaxSlot.');
        }
        param1.writeVarInt(this.storageMaxSlot);
    };
    ExchangeStartedWithStorageMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartedWithStorageMessage(param1);
    };
    ExchangeStartedWithStorageMessage.prototype.deserializeAs_ExchangeStartedWithStorageMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.storageMaxSlot = param1.readVarUhInt();
        if (this.storageMaxSlot < 0) {
            throw new Error('Forbidden value (' + this.storageMaxSlot + ') on element of ExchangeStartedWithStorageMessage.storageMaxSlot.');
        }
    };
    ExchangeStartedWithStorageMessage.ID = 6236;
    return ExchangeStartedWithStorageMessage;
})(ExchangeStartedMessage);
module.exports = ExchangeStartedWithStorageMessage;
