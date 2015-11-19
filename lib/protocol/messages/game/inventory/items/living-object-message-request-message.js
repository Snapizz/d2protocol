/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LivingObjectMessageRequestMessage = (function (_super) {
    __extends(LivingObjectMessageRequestMessage, _super);
    function LivingObjectMessageRequestMessage() {
        this.msgId = 0;
        this.parameters = [];
        this.livingObject = 0;
        _super.call(this);
    }
    LivingObjectMessageRequestMessage.prototype.getMessageId = function () {
        return LivingObjectMessageRequestMessage.ID;
    };
    LivingObjectMessageRequestMessage.prototype.reset = function () {
        this.msgId = 0;
        this.parameters = [];
        this.livingObject = 0;
    };
    LivingObjectMessageRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LivingObjectMessageRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LivingObjectMessageRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_LivingObjectMessageRequestMessage(param1);
    };
    LivingObjectMessageRequestMessage.prototype.serializeAs_LivingObjectMessageRequestMessage = function (param1) {
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
        if (this.livingObject < 0) {
            throw new Error('Forbidden value (' + this.livingObject + ') on element livingObject.');
        }
        param1.writeVarInt(this.livingObject);
    };
    LivingObjectMessageRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LivingObjectMessageRequestMessage(param1);
    };
    LivingObjectMessageRequestMessage.prototype.deserializeAs_LivingObjectMessageRequestMessage = function (param1) {
        var _loc4_ = null;
        this.msgId = param1.readVarUhShort();
        if (this.msgId < 0) {
            throw new Error('Forbidden value (' + this.msgId + ') on element of LivingObjectMessageRequestMessage.msgId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUTF();
            this.parameters.push(_loc4_);
            _loc3_++;
        }
        this.livingObject = param1.readVarUhInt();
        if (this.livingObject < 0) {
            throw new Error('Forbidden value (' + this.livingObject + ') on element of LivingObjectMessageRequestMessage.livingObject.');
        }
    };
    LivingObjectMessageRequestMessage.ID = 6066;
    return LivingObjectMessageRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = LivingObjectMessageRequestMessage;
