/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChatSmileyMessage = (function (_super) {
    __extends(ChatSmileyMessage, _super);
    function ChatSmileyMessage() {
        this.entityId = 0;
        this.smileyId = 0;
        this.accountId = 0;
        _super.call(this);
    }
    ChatSmileyMessage.prototype.getMessageId = function () {
        return ChatSmileyMessage.ID;
    };
    ChatSmileyMessage.prototype.reset = function () {
        this.entityId = 0;
        this.smileyId = 0;
        this.accountId = 0;
    };
    ChatSmileyMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChatSmileyMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChatSmileyMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChatSmileyMessage(param1);
    };
    ChatSmileyMessage.prototype.serializeAs_ChatSmileyMessage = function (param1) {
        param1.writeInt(this.entityId);
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element smileyId.');
        }
        param1.writeVarShort(this.smileyId);
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
    };
    ChatSmileyMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChatSmileyMessage(param1);
    };
    ChatSmileyMessage.prototype.deserializeAs_ChatSmileyMessage = function (param1) {
        this.entityId = param1.readInt();
        this.smileyId = param1.readVarUhShort();
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element of ChatSmileyMessage.smileyId.');
        }
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of ChatSmileyMessage.accountId.');
        }
    };
    ChatSmileyMessage.ID = 801;
    return ChatSmileyMessage;
})(network_message_1.NetworkMessage);
module.exports = ChatSmileyMessage;
