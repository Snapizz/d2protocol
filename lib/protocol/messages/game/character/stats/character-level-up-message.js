/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterLevelUpMessage = (function (_super) {
    __extends(CharacterLevelUpMessage, _super);
    function CharacterLevelUpMessage() {
        this.newLevel = 0;
        _super.call(this);
    }
    CharacterLevelUpMessage.prototype.getMessageId = function () {
        return CharacterLevelUpMessage.ID;
    };
    CharacterLevelUpMessage.prototype.reset = function () {
        this.newLevel = 0;
    };
    CharacterLevelUpMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterLevelUpMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterLevelUpMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterLevelUpMessage(param1);
    };
    CharacterLevelUpMessage.prototype.serializeAs_CharacterLevelUpMessage = function (param1) {
        if (this.newLevel < 2 || this.newLevel > 200) {
            throw new Error('Forbidden value (' + this.newLevel + ') on element newLevel.');
        }
        param1.writeByte(this.newLevel);
    };
    CharacterLevelUpMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterLevelUpMessage(param1);
    };
    CharacterLevelUpMessage.prototype.deserializeAs_CharacterLevelUpMessage = function (param1) {
        this.newLevel = param1.readUnsignedByte();
        if (this.newLevel < 2 || this.newLevel > 200) {
            throw new Error('Forbidden value (' + this.newLevel + ') on element of CharacterLevelUpMessage.newLevel.');
        }
    };
    CharacterLevelUpMessage.ID = 5670;
    return CharacterLevelUpMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterLevelUpMessage;
