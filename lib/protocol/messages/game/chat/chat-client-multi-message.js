/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChatAbstractClientMessage = require('./chat-abstract-client-message');
var ChatClientMultiMessage = (function (_super) {
    __extends(ChatClientMultiMessage, _super);
    function ChatClientMultiMessage() {
        this.channel = 0;
        _super.call(this);
    }
    ChatClientMultiMessage.prototype.getMessageId = function () {
        return ChatClientMultiMessage.ID;
    };
    ChatClientMultiMessage.prototype.reset = function () {
        this.channel = 0;
    };
    ChatClientMultiMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChatClientMultiMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChatClientMultiMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChatClientMultiMessage(param1);
    };
    ChatClientMultiMessage.prototype.serializeAs_ChatClientMultiMessage = function (param1) {
        _super.prototype.serializeAs_ChatAbstractClientMessage.call(this, param1);
        param1.writeByte(this.channel);
    };
    ChatClientMultiMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChatClientMultiMessage(param1);
    };
    ChatClientMultiMessage.prototype.deserializeAs_ChatClientMultiMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.channel = param1.readByte();
        if (this.channel < 0) {
            throw new Error('Forbidden value (' + this.channel + ') on element of ChatClientMultiMessage.channel.');
        }
    };
    ChatClientMultiMessage.ID = 861;
    return ChatClientMultiMessage;
})(ChatAbstractClientMessage);
module.exports = ChatClientMultiMessage;
