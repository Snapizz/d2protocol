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
var ChatServerCopyMessage = (function (_super) {
    __extends(ChatServerCopyMessage, _super);
    function ChatServerCopyMessage() {
        this.receiverId = 0;
        this.receiverName = '';
        _super.call(this);
    }
    ChatServerCopyMessage.prototype.getMessageId = function () {
        return ChatServerCopyMessage.ID;
    };
    ChatServerCopyMessage.prototype.reset = function () {
        this.receiverId = 0;
        this.receiverName = '';
    };
    ChatServerCopyMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChatServerCopyMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChatServerCopyMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChatServerCopyMessage(param1);
    };
    ChatServerCopyMessage.prototype.serializeAs_ChatServerCopyMessage = function (param1) {
        _super.prototype.serializeAs_ChatAbstractServerMessage.call(this, param1);
        if (this.receiverId < 0) {
            throw new Error('Forbidden value (' + this.receiverId + ') on element receiverId.');
        }
        param1.writeVarInt(this.receiverId);
        param1.writeUTF(this.receiverName);
    };
    ChatServerCopyMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChatServerCopyMessage(param1);
    };
    ChatServerCopyMessage.prototype.deserializeAs_ChatServerCopyMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.receiverId = param1.readVarUhInt();
        if (this.receiverId < 0) {
            throw new Error('Forbidden value (' + this.receiverId + ') on element of ChatServerCopyMessage.receiverId.');
        }
        this.receiverName = param1.readUTF();
    };
    ChatServerCopyMessage.ID = 882;
    return ChatServerCopyMessage;
})(ChatAbstractServerMessage);
module.exports = ChatServerCopyMessage;
