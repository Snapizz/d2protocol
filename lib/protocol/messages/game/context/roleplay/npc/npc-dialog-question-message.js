/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var NpcDialogQuestionMessage = (function (_super) {
    __extends(NpcDialogQuestionMessage, _super);
    function NpcDialogQuestionMessage() {
        this.messageId = 0;
        this.dialogParams = [];
        this.visibleReplies = [];
        _super.call(this);
    }
    NpcDialogQuestionMessage.prototype.getMessageId = function () {
        return NpcDialogQuestionMessage.ID;
    };
    NpcDialogQuestionMessage.prototype.reset = function () {
        this.messageId = 0;
        this.dialogParams = [];
        this.visibleReplies = [];
    };
    NpcDialogQuestionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    NpcDialogQuestionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    NpcDialogQuestionMessage.prototype.serialize = function (param1) {
        this.serializeAs_NpcDialogQuestionMessage(param1);
    };
    NpcDialogQuestionMessage.prototype.serializeAs_NpcDialogQuestionMessage = function (param1) {
        if (this.messageId < 0) {
            throw new Error('Forbidden value (' + this.messageId + ') on element messageId.');
        }
        param1.writeVarShort(this.messageId);
        param1.writeShort(this.dialogParams.length);
        var _loc2_ = 0;
        while (_loc2_ < this.dialogParams.length) {
            param1.writeUTF(this.dialogParams[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.visibleReplies.length);
        var _loc3_ = 0;
        while (_loc3_ < this.visibleReplies.length) {
            if (this.visibleReplies[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.visibleReplies[_loc3_] + ') on element 3 (starting at 1) of visibleReplies.');
            }
            param1.writeVarShort(this.visibleReplies[_loc3_]);
            _loc3_++;
        }
    };
    NpcDialogQuestionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_NpcDialogQuestionMessage(param1);
    };
    NpcDialogQuestionMessage.prototype.deserializeAs_NpcDialogQuestionMessage = function (param1) {
        var _loc6_ = null;
        var _loc7_ = 0;
        this.messageId = param1.readVarUhShort();
        if (this.messageId < 0) {
            throw new Error('Forbidden value (' + this.messageId + ') on element of NpcDialogQuestionMessage.messageId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readUTF();
            this.dialogParams.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readVarUhShort();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of visibleReplies.');
            }
            this.visibleReplies.push(_loc7_);
            _loc5_++;
        }
    };
    NpcDialogQuestionMessage.ID = 5617;
    return NpcDialogQuestionMessage;
})(network_message_1.NetworkMessage);
module.exports = NpcDialogQuestionMessage;
