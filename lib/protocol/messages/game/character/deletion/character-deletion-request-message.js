/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterDeletionRequestMessage = (function (_super) {
    __extends(CharacterDeletionRequestMessage, _super);
    function CharacterDeletionRequestMessage() {
        this.characterId = 0;
        this.secretAnswerHash = '';
        _super.call(this);
    }
    CharacterDeletionRequestMessage.prototype.getMessageId = function () {
        return CharacterDeletionRequestMessage.ID;
    };
    CharacterDeletionRequestMessage.prototype.reset = function () {
        this.characterId = 0;
        this.secretAnswerHash = '';
    };
    CharacterDeletionRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterDeletionRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterDeletionRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterDeletionRequestMessage(param1);
    };
    CharacterDeletionRequestMessage.prototype.serializeAs_CharacterDeletionRequestMessage = function (param1) {
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element characterId.');
        }
        param1.writeInt(this.characterId);
        param1.writeUTF(this.secretAnswerHash);
    };
    CharacterDeletionRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterDeletionRequestMessage(param1);
    };
    CharacterDeletionRequestMessage.prototype.deserializeAs_CharacterDeletionRequestMessage = function (param1) {
        this.characterId = param1.readInt();
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element of CharacterDeletionRequestMessage.characterId.');
        }
        this.secretAnswerHash = param1.readUTF();
    };
    CharacterDeletionRequestMessage.ID = 165;
    return CharacterDeletionRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterDeletionRequestMessage;
