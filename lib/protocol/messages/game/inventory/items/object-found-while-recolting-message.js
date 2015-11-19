/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectFoundWhileRecoltingMessage = (function (_super) {
    __extends(ObjectFoundWhileRecoltingMessage, _super);
    function ObjectFoundWhileRecoltingMessage() {
        this.genericId = 0;
        this.quantity = 0;
        this.resourceGenericId = 0;
        _super.call(this);
    }
    ObjectFoundWhileRecoltingMessage.prototype.getMessageId = function () {
        return ObjectFoundWhileRecoltingMessage.ID;
    };
    ObjectFoundWhileRecoltingMessage.prototype.reset = function () {
        this.genericId = 0;
        this.quantity = 0;
        this.resourceGenericId = 0;
    };
    ObjectFoundWhileRecoltingMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectFoundWhileRecoltingMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectFoundWhileRecoltingMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectFoundWhileRecoltingMessage(param1);
    };
    ObjectFoundWhileRecoltingMessage.prototype.serializeAs_ObjectFoundWhileRecoltingMessage = function (param1) {
        if (this.genericId < 0) {
            throw new Error('Forbidden value (' + this.genericId + ') on element genericId.');
        }
        param1.writeVarShort(this.genericId);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
        if (this.resourceGenericId < 0) {
            throw new Error('Forbidden value (' + this.resourceGenericId + ') on element resourceGenericId.');
        }
        param1.writeVarInt(this.resourceGenericId);
    };
    ObjectFoundWhileRecoltingMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectFoundWhileRecoltingMessage(param1);
    };
    ObjectFoundWhileRecoltingMessage.prototype.deserializeAs_ObjectFoundWhileRecoltingMessage = function (param1) {
        this.genericId = param1.readVarUhShort();
        if (this.genericId < 0) {
            throw new Error('Forbidden value (' + this.genericId + ') on element of ObjectFoundWhileRecoltingMessage.genericId.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectFoundWhileRecoltingMessage.quantity.');
        }
        this.resourceGenericId = param1.readVarUhInt();
        if (this.resourceGenericId < 0) {
            throw new Error('Forbidden value (' + this.resourceGenericId + ') on element of ObjectFoundWhileRecoltingMessage.resourceGenericId.');
        }
    };
    ObjectFoundWhileRecoltingMessage.ID = 6017;
    return ObjectFoundWhileRecoltingMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectFoundWhileRecoltingMessage;
