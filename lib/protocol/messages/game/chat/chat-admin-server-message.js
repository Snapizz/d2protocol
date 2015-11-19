/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChatServerMessage = require('./chat-server-message');
var ChatAdminServerMessage = (function (_super) {
    __extends(ChatAdminServerMessage, _super);
    function ChatAdminServerMessage() {
        _super.call(this);
    }
    ChatAdminServerMessage.prototype.getMessageId = function () {
        return ChatAdminServerMessage.ID;
    };
    ChatAdminServerMessage.prototype.reset = function () {
    };
    ChatAdminServerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChatAdminServerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChatAdminServerMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChatAdminServerMessage(param1);
    };
    ChatAdminServerMessage.prototype.serializeAs_ChatAdminServerMessage = function (param1) {
        _super.prototype.serializeAs_ChatServerMessage.call(this, param1);
    };
    ChatAdminServerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChatAdminServerMessage(param1);
    };
    ChatAdminServerMessage.prototype.deserializeAs_ChatAdminServerMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    ChatAdminServerMessage.ID = 6135;
    return ChatAdminServerMessage;
})(ChatServerMessage);
module.exports = ChatAdminServerMessage;
