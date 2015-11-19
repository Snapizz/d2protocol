/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectMovementMessage = (function (_super) {
    __extends(ObjectMovementMessage, _super);
    function ObjectMovementMessage() {
        this.objectUID = 0;
        this.position = 63;
        _super.call(this);
    }
    ObjectMovementMessage.prototype.getMessageId = function () {
        return ObjectMovementMessage.ID;
    };
    ObjectMovementMessage.prototype.reset = function () {
        this.objectUID = 0;
        this.position = 63;
    };
    ObjectMovementMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectMovementMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectMovementMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectMovementMessage(param1);
    };
    ObjectMovementMessage.prototype.serializeAs_ObjectMovementMessage = function (param1) {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        param1.writeByte(this.position);
    };
    ObjectMovementMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectMovementMessage(param1);
    };
    ObjectMovementMessage.prototype.deserializeAs_ObjectMovementMessage = function (param1) {
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectMovementMessage.objectUID.');
        }
        this.position = param1.readUnsignedByte();
        if (this.position < 0 || this.position > 255) {
            throw new Error('Forbidden value (' + this.position + ') on element of ObjectMovementMessage.position.');
        }
    };
    ObjectMovementMessage.ID = 3010;
    return ObjectMovementMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectMovementMessage;
