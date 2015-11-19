/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LivingObjectChangeSkinRequestMessage = (function (_super) {
    __extends(LivingObjectChangeSkinRequestMessage, _super);
    function LivingObjectChangeSkinRequestMessage() {
        this.livingUID = 0;
        this.livingPosition = 0;
        this.skinId = 0;
        _super.call(this);
    }
    LivingObjectChangeSkinRequestMessage.prototype.getMessageId = function () {
        return LivingObjectChangeSkinRequestMessage.ID;
    };
    LivingObjectChangeSkinRequestMessage.prototype.reset = function () {
        this.livingUID = 0;
        this.livingPosition = 0;
        this.skinId = 0;
    };
    LivingObjectChangeSkinRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LivingObjectChangeSkinRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LivingObjectChangeSkinRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_LivingObjectChangeSkinRequestMessage(param1);
    };
    LivingObjectChangeSkinRequestMessage.prototype.serializeAs_LivingObjectChangeSkinRequestMessage = function (param1) {
        if (this.livingUID < 0) {
            throw new Error('Forbidden value (' + this.livingUID + ') on element livingUID.');
        }
        param1.writeVarInt(this.livingUID);
        if (this.livingPosition < 0 || this.livingPosition > 255) {
            throw new Error('Forbidden value (' + this.livingPosition + ') on element livingPosition.');
        }
        param1.writeByte(this.livingPosition);
        if (this.skinId < 0) {
            throw new Error('Forbidden value (' + this.skinId + ') on element skinId.');
        }
        param1.writeVarInt(this.skinId);
    };
    LivingObjectChangeSkinRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LivingObjectChangeSkinRequestMessage(param1);
    };
    LivingObjectChangeSkinRequestMessage.prototype.deserializeAs_LivingObjectChangeSkinRequestMessage = function (param1) {
        this.livingUID = param1.readVarUhInt();
        if (this.livingUID < 0) {
            throw new Error('Forbidden value (' + this.livingUID + ') on element of LivingObjectChangeSkinRequestMessage.livingUID.');
        }
        this.livingPosition = param1.readUnsignedByte();
        if (this.livingPosition < 0 || this.livingPosition > 255) {
            throw new Error('Forbidden value (' + this.livingPosition + ') on element of LivingObjectChangeSkinRequestMessage.livingPosition.');
        }
        this.skinId = param1.readVarUhInt();
        if (this.skinId < 0) {
            throw new Error('Forbidden value (' + this.skinId + ') on element of LivingObjectChangeSkinRequestMessage.skinId.');
        }
    };
    LivingObjectChangeSkinRequestMessage.ID = 5725;
    return LivingObjectChangeSkinRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = LivingObjectChangeSkinRequestMessage;
