/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChatSmileyExtraPackListMessage = (function (_super) {
    __extends(ChatSmileyExtraPackListMessage, _super);
    function ChatSmileyExtraPackListMessage() {
        this.packIds = [];
        _super.call(this);
    }
    ChatSmileyExtraPackListMessage.prototype.getMessageId = function () {
        return ChatSmileyExtraPackListMessage.ID;
    };
    ChatSmileyExtraPackListMessage.prototype.reset = function () {
        this.packIds = [];
    };
    ChatSmileyExtraPackListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChatSmileyExtraPackListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChatSmileyExtraPackListMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChatSmileyExtraPackListMessage(param1);
    };
    ChatSmileyExtraPackListMessage.prototype.serializeAs_ChatSmileyExtraPackListMessage = function (param1) {
        param1.writeShort(this.packIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.packIds.length) {
            if (this.packIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.packIds[_loc2_] + ') on element 1 (starting at 1) of packIds.');
            }
            param1.writeByte(this.packIds[_loc2_]);
            _loc2_++;
        }
    };
    ChatSmileyExtraPackListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChatSmileyExtraPackListMessage(param1);
    };
    ChatSmileyExtraPackListMessage.prototype.deserializeAs_ChatSmileyExtraPackListMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readByte();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of packIds.');
            }
            this.packIds.push(_loc4_);
            _loc3_++;
        }
    };
    ChatSmileyExtraPackListMessage.ID = 6596;
    return ChatSmileyExtraPackListMessage;
})(network_message_1.NetworkMessage);
module.exports = ChatSmileyExtraPackListMessage;
