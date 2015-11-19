/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectDeleteMessage = (function (_super) {
    __extends(ObjectDeleteMessage, _super);
    function ObjectDeleteMessage() {
        this.objectUID = 0;
        this.quantity = 0;
        _super.call(this);
    }
    ObjectDeleteMessage.prototype.getMessageId = function () {
        return ObjectDeleteMessage.ID;
    };
    ObjectDeleteMessage.prototype.reset = function () {
        this.objectUID = 0;
        this.quantity = 0;
    };
    ObjectDeleteMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectDeleteMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectDeleteMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectDeleteMessage(param1);
    };
    ObjectDeleteMessage.prototype.serializeAs_ObjectDeleteMessage = function (param1) {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
    };
    ObjectDeleteMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectDeleteMessage(param1);
    };
    ObjectDeleteMessage.prototype.deserializeAs_ObjectDeleteMessage = function (param1) {
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectDeleteMessage.objectUID.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectDeleteMessage.quantity.');
        }
    };
    ObjectDeleteMessage.ID = 3022;
    return ObjectDeleteMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectDeleteMessage;
