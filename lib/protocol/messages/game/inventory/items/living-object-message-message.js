/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LivingObjectMessageMessage = (function (_super) {
    __extends(LivingObjectMessageMessage, _super);
    function LivingObjectMessageMessage() {
        this.msgId = 0;
        this.timeStamp = 0;
        this.owner = '';
        this.objectGenericId = 0;
        _super.call(this);
    }
    LivingObjectMessageMessage.prototype.getMessageId = function () {
        return LivingObjectMessageMessage.ID;
    };
    LivingObjectMessageMessage.prototype.reset = function () {
        this.msgId = 0;
        this.timeStamp = 0;
        this.owner = '';
        this.objectGenericId = 0;
    };
    LivingObjectMessageMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LivingObjectMessageMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LivingObjectMessageMessage.prototype.serialize = function (param1) {
        this.serializeAs_LivingObjectMessageMessage(param1);
    };
    LivingObjectMessageMessage.prototype.serializeAs_LivingObjectMessageMessage = function (param1) {
        if (this.msgId < 0) {
            throw new Error('Forbidden value (' + this.msgId + ') on element msgId.');
        }
        param1.writeVarShort(this.msgId);
        if (this.timeStamp < 0) {
            throw new Error('Forbidden value (' + this.timeStamp + ') on element timeStamp.');
        }
        param1.writeInt(this.timeStamp);
        param1.writeUTF(this.owner);
        if (this.objectGenericId < 0) {
            throw new Error('Forbidden value (' + this.objectGenericId + ') on element objectGenericId.');
        }
        param1.writeVarShort(this.objectGenericId);
    };
    LivingObjectMessageMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LivingObjectMessageMessage(param1);
    };
    LivingObjectMessageMessage.prototype.deserializeAs_LivingObjectMessageMessage = function (param1) {
        this.msgId = param1.readVarUhShort();
        if (this.msgId < 0) {
            throw new Error('Forbidden value (' + this.msgId + ') on element of LivingObjectMessageMessage.msgId.');
        }
        this.timeStamp = param1.readInt();
        if (this.timeStamp < 0) {
            throw new Error('Forbidden value (' + this.timeStamp + ') on element of LivingObjectMessageMessage.timeStamp.');
        }
        this.owner = param1.readUTF();
        this.objectGenericId = param1.readVarUhShort();
        if (this.objectGenericId < 0) {
            throw new Error('Forbidden value (' + this.objectGenericId + ') on element of LivingObjectMessageMessage.objectGenericId.');
        }
    };
    LivingObjectMessageMessage.ID = 6065;
    return LivingObjectMessageMessage;
})(network_message_1.NetworkMessage);
module.exports = LivingObjectMessageMessage;
