/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SystemMessageDisplayMessage = (function (_super) {
    __extends(SystemMessageDisplayMessage, _super);
    function SystemMessageDisplayMessage() {
        this.hangUp = false;
        this.msgId = 0;
        this.parameters = [];
        _super.call(this);
    }
    SystemMessageDisplayMessage.prototype.getMessageId = function () {
        return SystemMessageDisplayMessage.ID;
    };
    SystemMessageDisplayMessage.prototype.reset = function () {
        this.hangUp = false;
        this.msgId = 0;
        this.parameters = [];
    };
    SystemMessageDisplayMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SystemMessageDisplayMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SystemMessageDisplayMessage.prototype.serialize = function (param1) {
        this.serializeAs_SystemMessageDisplayMessage(param1);
    };
    SystemMessageDisplayMessage.prototype.serializeAs_SystemMessageDisplayMessage = function (param1) {
        param1.writeBoolean(this.hangUp);
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
    SystemMessageDisplayMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SystemMessageDisplayMessage(param1);
    };
    SystemMessageDisplayMessage.prototype.deserializeAs_SystemMessageDisplayMessage = function (param1) {
        var _loc4_ = null;
        this.hangUp = param1.readBoolean();
        this.msgId = param1.readVarUhShort();
        if (this.msgId < 0) {
            throw new Error('Forbidden value (' + this.msgId + ') on element of SystemMessageDisplayMessage.msgId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUTF();
            this.parameters.push(_loc4_);
            _loc3_++;
        }
    };
    SystemMessageDisplayMessage.ID = 189;
    return SystemMessageDisplayMessage;
})(network_message_1.NetworkMessage);
module.exports = SystemMessageDisplayMessage;
