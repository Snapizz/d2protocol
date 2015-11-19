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
var ObjectUseOnCharacterMessage = (function (_super) {
    __extends(ObjectUseOnCharacterMessage, _super);
    function ObjectUseOnCharacterMessage() {
        this.characterId = 0;
        _super.call(this);
    }
    ObjectUseOnCharacterMessage.prototype.getMessageId = function () {
        return ObjectUseOnCharacterMessage.ID;
    };
    ObjectUseOnCharacterMessage.prototype.reset = function () {
        this.characterId = 0;
    };
    ObjectUseOnCharacterMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectUseOnCharacterMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectUseOnCharacterMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectUseOnCharacterMessage(param1);
    };
    ObjectUseOnCharacterMessage.prototype.serializeAs_ObjectUseOnCharacterMessage = function (param1) {
        _super.prototype.serializeAs_ObjectUseMessage.call(this, param1);
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element characterId.');
        }
        param1.writeVarInt(this.characterId);
    };
    ObjectUseOnCharacterMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectUseOnCharacterMessage(param1);
    };
    ObjectUseOnCharacterMessage.prototype.deserializeAs_ObjectUseOnCharacterMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.characterId = param1.readVarUhInt();
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element of ObjectUseOnCharacterMessage.characterId.');
        }
    };
    ObjectUseOnCharacterMessage.ID = 3003;
    return ObjectUseOnCharacterMessage;
})(ObjectUseMessage);
module.exports = ObjectUseOnCharacterMessage;
