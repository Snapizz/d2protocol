/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectSetPositionMessage = (function (_super) {
    __extends(ObjectSetPositionMessage, _super);
    function ObjectSetPositionMessage() {
        this.objectUID = 0;
        this.position = 63;
        this.quantity = 0;
        _super.call(this);
    }
    ObjectSetPositionMessage.prototype.getMessageId = function () {
        return ObjectSetPositionMessage.ID;
    };
    ObjectSetPositionMessage.prototype.reset = function () {
        this.objectUID = 0;
        this.position = 63;
        this.quantity = 0;
    };
    ObjectSetPositionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectSetPositionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectSetPositionMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectSetPositionMessage(param1);
    };
    ObjectSetPositionMessage.prototype.serializeAs_ObjectSetPositionMessage = function (param1) {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        param1.writeByte(this.position);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
    };
    ObjectSetPositionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectSetPositionMessage(param1);
    };
    ObjectSetPositionMessage.prototype.deserializeAs_ObjectSetPositionMessage = function (param1) {
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectSetPositionMessage.objectUID.');
        }
        this.position = param1.readUnsignedByte();
        if (this.position < 0 || this.position > 255) {
            throw new Error('Forbidden value (' + this.position + ') on element of ObjectSetPositionMessage.position.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectSetPositionMessage.quantity.');
        }
    };
    ObjectSetPositionMessage.ID = 3021;
    return ObjectSetPositionMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectSetPositionMessage;
