/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectUseMessage = (function (_super) {
    __extends(ObjectUseMessage, _super);
    function ObjectUseMessage() {
        this.objectUID = 0;
        _super.call(this);
    }
    ObjectUseMessage.prototype.getMessageId = function () {
        return ObjectUseMessage.ID;
    };
    ObjectUseMessage.prototype.reset = function () {
        this.objectUID = 0;
    };
    ObjectUseMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectUseMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectUseMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectUseMessage(param1);
    };
    ObjectUseMessage.prototype.serializeAs_ObjectUseMessage = function (param1) {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
    };
    ObjectUseMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectUseMessage(param1);
    };
    ObjectUseMessage.prototype.deserializeAs_ObjectUseMessage = function (param1) {
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectUseMessage.objectUID.');
        }
    };
    ObjectUseMessage.ID = 3019;
    return ObjectUseMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectUseMessage;
