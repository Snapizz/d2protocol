/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MailStatusMessage = (function (_super) {
    __extends(MailStatusMessage, _super);
    function MailStatusMessage() {
        this.unread = 0;
        this.total = 0;
        _super.call(this);
    }
    MailStatusMessage.prototype.getMessageId = function () {
        return MailStatusMessage.ID;
    };
    MailStatusMessage.prototype.reset = function () {
        this.unread = 0;
        this.total = 0;
    };
    MailStatusMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MailStatusMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MailStatusMessage.prototype.serialize = function (param1) {
        this.serializeAs_MailStatusMessage(param1);
    };
    MailStatusMessage.prototype.serializeAs_MailStatusMessage = function (param1) {
        if (this.unread < 0) {
            throw new Error('Forbidden value (' + this.unread + ') on element unread.');
        }
        param1.writeVarShort(this.unread);
        if (this.total < 0) {
            throw new Error('Forbidden value (' + this.total + ') on element total.');
        }
        param1.writeVarShort(this.total);
    };
    MailStatusMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MailStatusMessage(param1);
    };
    MailStatusMessage.prototype.deserializeAs_MailStatusMessage = function (param1) {
        this.unread = param1.readVarUhShort();
        if (this.unread < 0) {
            throw new Error('Forbidden value (' + this.unread + ') on element of MailStatusMessage.unread.');
        }
        this.total = param1.readVarUhShort();
        if (this.total < 0) {
            throw new Error('Forbidden value (' + this.total + ') on element of MailStatusMessage.total.');
        }
    };
    MailStatusMessage.ID = 6275;
    return MailStatusMessage;
})(network_message_1.NetworkMessage);
module.exports = MailStatusMessage;
