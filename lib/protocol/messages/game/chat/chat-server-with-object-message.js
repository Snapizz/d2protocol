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
var ObjectItem = require('../../../types/game/data/items/object-item');
var ChatServerWithObjectMessage = (function (_super) {
    __extends(ChatServerWithObjectMessage, _super);
    function ChatServerWithObjectMessage() {
        this.objects = [];
        _super.call(this);
    }
    ChatServerWithObjectMessage.prototype.getMessageId = function () {
        return ChatServerWithObjectMessage.ID;
    };
    ChatServerWithObjectMessage.prototype.reset = function () {
        this.objects = [];
    };
    ChatServerWithObjectMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChatServerWithObjectMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChatServerWithObjectMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChatServerWithObjectMessage(param1);
    };
    ChatServerWithObjectMessage.prototype.serializeAs_ChatServerWithObjectMessage = function (param1) {
        _super.prototype.serializeAs_ChatServerMessage.call(this, param1);
        param1.writeShort(this.objects.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objects.length) {
            (this.objects[_loc2_]).serializeAs_ObjectItem(param1);
            _loc2_++;
        }
    };
    ChatServerWithObjectMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChatServerWithObjectMessage(param1);
    };
    ChatServerWithObjectMessage.prototype.deserializeAs_ChatServerWithObjectMessage = function (param1) {
        var _loc4_ = null;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItem();
            _loc4_.deserialize(param1);
            this.objects.push(_loc4_);
            _loc3_++;
        }
    };
    ChatServerWithObjectMessage.ID = 883;
    return ChatServerWithObjectMessage;
})(ChatServerMessage);
module.exports = ChatServerWithObjectMessage;
