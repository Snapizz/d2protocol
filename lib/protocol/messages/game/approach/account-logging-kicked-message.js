/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AccountLoggingKickedMessage = (function (_super) {
    __extends(AccountLoggingKickedMessage, _super);
    function AccountLoggingKickedMessage() {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        _super.call(this);
    }
    AccountLoggingKickedMessage.prototype.getMessageId = function () {
        return AccountLoggingKickedMessage.ID;
    };
    AccountLoggingKickedMessage.prototype.reset = function () {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
    };
    AccountLoggingKickedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AccountLoggingKickedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AccountLoggingKickedMessage.prototype.serialize = function (param1) {
        this.serializeAs_AccountLoggingKickedMessage(param1);
    };
    AccountLoggingKickedMessage.prototype.serializeAs_AccountLoggingKickedMessage = function (param1) {
        if (this.days < 0) {
            throw new Error('Forbidden value (' + this.days + ') on element days.');
        }
        param1.writeVarShort(this.days);
        if (this.hours < 0) {
            throw new Error('Forbidden value (' + this.hours + ') on element hours.');
        }
        param1.writeByte(this.hours);
        if (this.minutes < 0) {
            throw new Error('Forbidden value (' + this.minutes + ') on element minutes.');
        }
        param1.writeByte(this.minutes);
    };
    AccountLoggingKickedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AccountLoggingKickedMessage(param1);
    };
    AccountLoggingKickedMessage.prototype.deserializeAs_AccountLoggingKickedMessage = function (param1) {
        this.days = param1.readVarUhShort();
        if (this.days < 0) {
            throw new Error('Forbidden value (' + this.days + ') on element of AccountLoggingKickedMessage.days.');
        }
        this.hours = param1.readByte();
        if (this.hours < 0) {
            throw new Error('Forbidden value (' + this.hours + ') on element of AccountLoggingKickedMessage.hours.');
        }
        this.minutes = param1.readByte();
        if (this.minutes < 0) {
            throw new Error('Forbidden value (' + this.minutes + ') on element of AccountLoggingKickedMessage.minutes.');
        }
    };
    AccountLoggingKickedMessage.ID = 6029;
    return AccountLoggingKickedMessage;
})(network_message_1.NetworkMessage);
module.exports = AccountLoggingKickedMessage;
