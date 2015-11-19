/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChatSmileyRequestMessage = (function (_super) {
    __extends(ChatSmileyRequestMessage, _super);
    function ChatSmileyRequestMessage() {
        this.smileyId = 0;
        _super.call(this);
    }
    ChatSmileyRequestMessage.prototype.getMessageId = function () {
        return ChatSmileyRequestMessage.ID;
    };
    ChatSmileyRequestMessage.prototype.reset = function () {
        this.smileyId = 0;
    };
    ChatSmileyRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChatSmileyRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChatSmileyRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChatSmileyRequestMessage(param1);
    };
    ChatSmileyRequestMessage.prototype.serializeAs_ChatSmileyRequestMessage = function (param1) {
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element smileyId.');
        }
        param1.writeVarShort(this.smileyId);
    };
    ChatSmileyRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChatSmileyRequestMessage(param1);
    };
    ChatSmileyRequestMessage.prototype.deserializeAs_ChatSmileyRequestMessage = function (param1) {
        this.smileyId = param1.readVarUhShort();
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element of ChatSmileyRequestMessage.smileyId.');
        }
    };
    ChatSmileyRequestMessage.ID = 800;
    return ChatSmileyRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = ChatSmileyRequestMessage;
