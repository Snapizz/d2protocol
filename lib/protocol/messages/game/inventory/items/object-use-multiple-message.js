/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectUseMessage = require('./object-use-message');
var ObjectUseMultipleMessage = (function (_super) {
    __extends(ObjectUseMultipleMessage, _super);
    function ObjectUseMultipleMessage() {
        this.quantity = 0;
        _super.call(this);
    }
    ObjectUseMultipleMessage.prototype.getMessageId = function () {
        return ObjectUseMultipleMessage.ID;
    };
    ObjectUseMultipleMessage.prototype.reset = function () {
        this.quantity = 0;
    };
    ObjectUseMultipleMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectUseMultipleMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectUseMultipleMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectUseMultipleMessage(param1);
    };
    ObjectUseMultipleMessage.prototype.serializeAs_ObjectUseMultipleMessage = function (param1) {
        _super.prototype.serializeAs_ObjectUseMessage.call(this, param1);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
    };
    ObjectUseMultipleMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectUseMultipleMessage(param1);
    };
    ObjectUseMultipleMessage.prototype.deserializeAs_ObjectUseMultipleMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectUseMultipleMessage.quantity.');
        }
    };
    ObjectUseMultipleMessage.ID = 6234;
    return ObjectUseMultipleMessage;
})(ObjectUseMessage);
module.exports = ObjectUseMultipleMessage;
