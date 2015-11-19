/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChatMessageReportMessage = (function (_super) {
    __extends(ChatMessageReportMessage, _super);
    function ChatMessageReportMessage() {
        this.senderName = '';
        this.content = '';
        this.timestamp = 0;
        this.channel = 0;
        this.fingerprint = '';
        this.reason = 0;
        _super.call(this);
    }
    ChatMessageReportMessage.prototype.getMessageId = function () {
        return ChatMessageReportMessage.ID;
    };
    ChatMessageReportMessage.prototype.reset = function () {
        this.senderName = '';
        this.content = '';
        this.timestamp = 0;
        this.channel = 0;
        this.fingerprint = '';
        this.reason = 0;
    };
    ChatMessageReportMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChatMessageReportMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChatMessageReportMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChatMessageReportMessage(param1);
    };
    ChatMessageReportMessage.prototype.serializeAs_ChatMessageReportMessage = function (param1) {
        param1.writeUTF(this.senderName);
        param1.writeUTF(this.content);
        if (this.timestamp < 0) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element timestamp.');
        }
        param1.writeInt(this.timestamp);
        param1.writeByte(this.channel);
        param1.writeUTF(this.fingerprint);
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element reason.');
        }
        param1.writeByte(this.reason);
    };
    ChatMessageReportMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChatMessageReportMessage(param1);
    };
    ChatMessageReportMessage.prototype.deserializeAs_ChatMessageReportMessage = function (param1) {
        this.senderName = param1.readUTF();
        this.content = param1.readUTF();
        this.timestamp = param1.readInt();
        if (this.timestamp < 0) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element of ChatMessageReportMessage.timestamp.');
        }
        this.channel = param1.readByte();
        if (this.channel < 0) {
            throw new Error('Forbidden value (' + this.channel + ') on element of ChatMessageReportMessage.channel.');
        }
        this.fingerprint = param1.readUTF();
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of ChatMessageReportMessage.reason.');
        }
    };
    ChatMessageReportMessage.ID = 821;
    return ChatMessageReportMessage;
})(network_message_1.NetworkMessage);
module.exports = ChatMessageReportMessage;
