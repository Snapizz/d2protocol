/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChatAbstractServerMessage = require('./chat-abstract-server-message');
var ChatServerMessage = (function (_super) {
    __extends(ChatServerMessage, _super);
    function ChatServerMessage() {
        this.senderId = 0;
        this.senderName = '';
        this.senderAccountId = 0;
        _super.call(this);
    }
    ChatServerMessage.prototype.getMessageId = function () {
        return ChatServerMessage.ID;
    };
    ChatServerMessage.prototype.reset = function () {
        this.senderId = 0;
        this.senderName = '';
        this.senderAccountId = 0;
    };
    ChatServerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChatServerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChatServerMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChatServerMessage(param1);
    };
    ChatServerMessage.prototype.serializeAs_ChatServerMessage = function (param1) {
        _super.prototype.serializeAs_ChatAbstractServerMessage.call(this, param1);
        param1.writeInt(this.senderId);
        param1.writeUTF(this.senderName);
        if (this.senderAccountId < 0) {
            throw new Error('Forbidden value (' + this.senderAccountId + ') on element senderAccountId.');
        }
        param1.writeInt(this.senderAccountId);
    };
    ChatServerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChatServerMessage(param1);
    };
    ChatServerMessage.prototype.deserializeAs_ChatServerMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.senderId = param1.readInt();
        this.senderName = param1.readUTF();
        this.senderAccountId = param1.readInt();
        if (this.senderAccountId < 0) {
            throw new Error('Forbidden value (' + this.senderAccountId + ') on element of ChatServerMessage.senderAccountId.');
        }
    };
    ChatServerMessage.ID = 881;
    return ChatServerMessage;
})(ChatAbstractServerMessage);
module.exports = ChatServerMessage;
