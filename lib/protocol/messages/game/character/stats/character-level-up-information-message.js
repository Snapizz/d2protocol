/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterLevelUpMessage = require('./character-level-up-message');
var CharacterLevelUpInformationMessage = (function (_super) {
    __extends(CharacterLevelUpInformationMessage, _super);
    function CharacterLevelUpInformationMessage() {
        this.name = '';
        this.id = 0;
        _super.call(this);
    }
    CharacterLevelUpInformationMessage.prototype.getMessageId = function () {
        return CharacterLevelUpInformationMessage.ID;
    };
    CharacterLevelUpInformationMessage.prototype.reset = function () {
        this.name = '';
        this.id = 0;
    };
    CharacterLevelUpInformationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterLevelUpInformationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterLevelUpInformationMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterLevelUpInformationMessage(param1);
    };
    CharacterLevelUpInformationMessage.prototype.serializeAs_CharacterLevelUpInformationMessage = function (param1) {
        _super.prototype.serializeAs_CharacterLevelUpMessage.call(this, param1);
        param1.writeUTF(this.name);
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarInt(this.id);
    };
    CharacterLevelUpInformationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterLevelUpInformationMessage(param1);
    };
    CharacterLevelUpInformationMessage.prototype.deserializeAs_CharacterLevelUpInformationMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.name = param1.readUTF();
        this.id = param1.readVarUhInt();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of CharacterLevelUpInformationMessage.id.');
        }
    };
    CharacterLevelUpInformationMessage.ID = 6076;
    return CharacterLevelUpInformationMessage;
})(CharacterLevelUpMessage);
module.exports = CharacterLevelUpInformationMessage;
