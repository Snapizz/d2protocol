/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChatAbstractClientMessage = (function (_super) {
    __extends(ChatAbstractClientMessage, _super);
    function ChatAbstractClientMessage() {
        this.content = '';
        _super.call(this);
    }
    ChatAbstractClientMessage.prototype.getMessageId = function () {
        return ChatAbstractClientMessage.ID;
    };
    ChatAbstractClientMessage.prototype.reset = function () {
        this.content = '';
    };
    ChatAbstractClientMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChatAbstractClientMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChatAbstractClientMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChatAbstractClientMessage(param1);
    };
    ChatAbstractClientMessage.prototype.serializeAs_ChatAbstractClientMessage = function (param1) {
        param1.writeUTF(this.content);
    };
    ChatAbstractClientMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChatAbstractClientMessage(param1);
    };
    ChatAbstractClientMessage.prototype.deserializeAs_ChatAbstractClientMessage = function (param1) {
        this.content = param1.readUTF();
    };
    ChatAbstractClientMessage.ID = 850;
    return ChatAbstractClientMessage;
})(network_message_1.NetworkMessage);
module.exports = ChatAbstractClientMessage;
