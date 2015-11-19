/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChatSmileyMessage = require('./chat-smiley-message');
var LocalizedChatSmileyMessage = (function (_super) {
    __extends(LocalizedChatSmileyMessage, _super);
    function LocalizedChatSmileyMessage() {
        this.cellId = 0;
        _super.call(this);
    }
    LocalizedChatSmileyMessage.prototype.getMessageId = function () {
        return LocalizedChatSmileyMessage.ID;
    };
    LocalizedChatSmileyMessage.prototype.reset = function () {
        this.cellId = 0;
    };
    LocalizedChatSmileyMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LocalizedChatSmileyMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LocalizedChatSmileyMessage.prototype.serialize = function (param1) {
        this.serializeAs_LocalizedChatSmileyMessage(param1);
    };
    LocalizedChatSmileyMessage.prototype.serializeAs_LocalizedChatSmileyMessage = function (param1) {
        _super.prototype.serializeAs_ChatSmileyMessage.call(this, param1);
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeVarShort(this.cellId);
    };
    LocalizedChatSmileyMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LocalizedChatSmileyMessage(param1);
    };
    LocalizedChatSmileyMessage.prototype.deserializeAs_LocalizedChatSmileyMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.cellId = param1.readVarUhShort();
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of LocalizedChatSmileyMessage.cellId.');
        }
    };
    LocalizedChatSmileyMessage.ID = 6185;
    return LocalizedChatSmileyMessage;
})(ChatSmileyMessage);
module.exports = LocalizedChatSmileyMessage;
