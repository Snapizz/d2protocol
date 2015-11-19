/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LivingObjectDissociateMessage = (function (_super) {
    __extends(LivingObjectDissociateMessage, _super);
    function LivingObjectDissociateMessage() {
        this.livingUID = 0;
        this.livingPosition = 0;
        _super.call(this);
    }
    LivingObjectDissociateMessage.prototype.getMessageId = function () {
        return LivingObjectDissociateMessage.ID;
    };
    LivingObjectDissociateMessage.prototype.reset = function () {
        this.livingUID = 0;
        this.livingPosition = 0;
    };
    LivingObjectDissociateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LivingObjectDissociateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LivingObjectDissociateMessage.prototype.serialize = function (param1) {
        this.serializeAs_LivingObjectDissociateMessage(param1);
    };
    LivingObjectDissociateMessage.prototype.serializeAs_LivingObjectDissociateMessage = function (param1) {
        if (this.livingUID < 0) {
            throw new Error('Forbidden value (' + this.livingUID + ') on element livingUID.');
        }
        param1.writeVarInt(this.livingUID);
        if (this.livingPosition < 0 || this.livingPosition > 255) {
            throw new Error('Forbidden value (' + this.livingPosition + ') on element livingPosition.');
        }
        param1.writeByte(this.livingPosition);
    };
    LivingObjectDissociateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LivingObjectDissociateMessage(param1);
    };
    LivingObjectDissociateMessage.prototype.deserializeAs_LivingObjectDissociateMessage = function (param1) {
        this.livingUID = param1.readVarUhInt();
        if (this.livingUID < 0) {
            throw new Error('Forbidden value (' + this.livingUID + ') on element of LivingObjectDissociateMessage.livingUID.');
        }
        this.livingPosition = param1.readUnsignedByte();
        if (this.livingPosition < 0 || this.livingPosition > 255) {
            throw new Error('Forbidden value (' + this.livingPosition + ') on element of LivingObjectDissociateMessage.livingPosition.');
        }
    };
    LivingObjectDissociateMessage.ID = 5723;
    return LivingObjectDissociateMessage;
})(network_message_1.NetworkMessage);
module.exports = LivingObjectDissociateMessage;
