/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TextInformationMessage = (function (_super) {
    __extends(TextInformationMessage, _super);
    function TextInformationMessage() {
        this.msgType = 0;
        this.msgId = 0;
        this.parameters = [];
        _super.call(this);
    }
    TextInformationMessage.prototype.getMessageId = function () {
        return TextInformationMessage.ID;
    };
    TextInformationMessage.prototype.reset = function () {
        this.msgType = 0;
        this.msgId = 0;
        this.parameters = [];
    };
    TextInformationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TextInformationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TextInformationMessage.prototype.serialize = function (param1) {
        this.serializeAs_TextInformationMessage(param1);
    };
    TextInformationMessage.prototype.serializeAs_TextInformationMessage = function (param1) {
        param1.writeByte(this.msgType);
        if (this.msgId < 0) {
            throw new Error('Forbidden value (' + this.msgId + ') on element msgId.');
        }
        param1.writeVarShort(this.msgId);
        param1.writeShort(this.parameters.length);
        var _loc2_ = 0;
        while (_loc2_ < this.parameters.length) {
            param1.writeUTF(this.parameters[_loc2_]);
            _loc2_++;
        }
    };
    TextInformationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TextInformationMessage(param1);
    };
    TextInformationMessage.prototype.deserializeAs_TextInformationMessage = function (param1) {
        var _loc4_ = null;
        this.msgType = param1.readByte();
        if (this.msgType < 0) {
            throw new Error('Forbidden value (' + this.msgType + ') on element of TextInformationMessage.msgType.');
        }
        this.msgId = param1.readVarUhShort();
        if (this.msgId < 0) {
            throw new Error('Forbidden value (' + this.msgId + ') on element of TextInformationMessage.msgId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUTF();
            this.parameters.push(_loc4_);
            _loc3_++;
        }
    };
    TextInformationMessage.ID = 780;
    return TextInformationMessage;
})(network_message_1.NetworkMessage);
module.exports = TextInformationMessage;
