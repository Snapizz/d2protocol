/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChatServerCopyMessage = require('./chat-server-copy-message');
var ObjectItem = require('../../../types/game/data/items/object-item');
var ChatServerCopyWithObjectMessage = (function (_super) {
    __extends(ChatServerCopyWithObjectMessage, _super);
    function ChatServerCopyWithObjectMessage() {
        this.objects = [];
        _super.call(this);
    }
    ChatServerCopyWithObjectMessage.prototype.getMessageId = function () {
        return ChatServerCopyWithObjectMessage.ID;
    };
    ChatServerCopyWithObjectMessage.prototype.reset = function () {
        this.objects = [];
    };
    ChatServerCopyWithObjectMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChatServerCopyWithObjectMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChatServerCopyWithObjectMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChatServerCopyWithObjectMessage(param1);
    };
    ChatServerCopyWithObjectMessage.prototype.serializeAs_ChatServerCopyWithObjectMessage = function (param1) {
        _super.prototype.serializeAs_ChatServerCopyMessage.call(this, param1);
        param1.writeShort(this.objects.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objects.length) {
            (this.objects[_loc2_]).serializeAs_ObjectItem(param1);
            _loc2_++;
        }
    };
    ChatServerCopyWithObjectMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChatServerCopyWithObjectMessage(param1);
    };
    ChatServerCopyWithObjectMessage.prototype.deserializeAs_ChatServerCopyWithObjectMessage = function (param1) {
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
    ChatServerCopyWithObjectMessage.ID = 884;
    return ChatServerCopyWithObjectMessage;
})(ChatServerCopyMessage);
module.exports = ChatServerCopyWithObjectMessage;
