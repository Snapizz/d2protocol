/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChatAbstractServerMessage = (function (_super) {
    __extends(ChatAbstractServerMessage, _super);
    function ChatAbstractServerMessage() {
        this.channel = 0;
        this.content = '';
        this.timestamp = 0;
        this.fingerprint = '';
        _super.call(this);
    }
    ChatAbstractServerMessage.prototype.getMessageId = function () {
        return ChatAbstractServerMessage.ID;
    };
    ChatAbstractServerMessage.prototype.reset = function () {
        this.channel = 0;
        this.content = '';
        this.timestamp = 0;
        this.fingerprint = '';
    };
    ChatAbstractServerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChatAbstractServerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChatAbstractServerMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChatAbstractServerMessage(param1);
    };
    ChatAbstractServerMessage.prototype.serializeAs_ChatAbstractServerMessage = function (param1) {
        param1.writeByte(this.channel);
        param1.writeUTF(this.content);
        if (this.timestamp < 0) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element timestamp.');
        }
        param1.writeInt(this.timestamp);
        param1.writeUTF(this.fingerprint);
    };
    ChatAbstractServerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChatAbstractServerMessage(param1);
    };
    ChatAbstractServerMessage.prototype.deserializeAs_ChatAbstractServerMessage = function (param1) {
        this.channel = param1.readByte();
        if (this.channel < 0) {
            throw new Error('Forbidden value (' + this.channel + ') on element of ChatAbstractServerMessage.channel.');
        }
        this.content = param1.readUTF();
        this.timestamp = param1.readInt();
        if (this.timestamp < 0) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element of ChatAbstractServerMessage.timestamp.');
        }
        this.fingerprint = param1.readUTF();
    };
    ChatAbstractServerMessage.ID = 880;
    return ChatAbstractServerMessage;
})(network_message_1.NetworkMessage);
module.exports = ChatAbstractServerMessage;
