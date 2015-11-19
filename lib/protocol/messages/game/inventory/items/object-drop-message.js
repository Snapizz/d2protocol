/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectDropMessage = (function (_super) {
    __extends(ObjectDropMessage, _super);
    function ObjectDropMessage() {
        this.objectUID = 0;
        this.quantity = 0;
        _super.call(this);
    }
    ObjectDropMessage.prototype.getMessageId = function () {
        return ObjectDropMessage.ID;
    };
    ObjectDropMessage.prototype.reset = function () {
        this.objectUID = 0;
        this.quantity = 0;
    };
    ObjectDropMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectDropMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectDropMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectDropMessage(param1);
    };
    ObjectDropMessage.prototype.serializeAs_ObjectDropMessage = function (param1) {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
    };
    ObjectDropMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectDropMessage(param1);
    };
    ObjectDropMessage.prototype.deserializeAs_ObjectDropMessage = function (param1) {
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectDropMessage.objectUID.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectDropMessage.quantity.');
        }
    };
    ObjectDropMessage.ID = 3005;
    return ObjectDropMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectDropMessage;
