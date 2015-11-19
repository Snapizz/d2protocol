/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectQuantityMessage = (function (_super) {
    __extends(ObjectQuantityMessage, _super);
    function ObjectQuantityMessage() {
        this.objectUID = 0;
        this.quantity = 0;
        _super.call(this);
    }
    ObjectQuantityMessage.prototype.getMessageId = function () {
        return ObjectQuantityMessage.ID;
    };
    ObjectQuantityMessage.prototype.reset = function () {
        this.objectUID = 0;
        this.quantity = 0;
    };
    ObjectQuantityMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectQuantityMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectQuantityMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectQuantityMessage(param1);
    };
    ObjectQuantityMessage.prototype.serializeAs_ObjectQuantityMessage = function (param1) {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
    };
    ObjectQuantityMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectQuantityMessage(param1);
    };
    ObjectQuantityMessage.prototype.deserializeAs_ObjectQuantityMessage = function (param1) {
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectQuantityMessage.objectUID.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectQuantityMessage.quantity.');
        }
    };
    ObjectQuantityMessage.ID = 3023;
    return ObjectQuantityMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectQuantityMessage;
