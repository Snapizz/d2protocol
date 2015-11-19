/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterReplayRequestMessage = (function (_super) {
    __extends(CharacterReplayRequestMessage, _super);
    function CharacterReplayRequestMessage() {
        this.characterId = 0;
        _super.call(this);
    }
    CharacterReplayRequestMessage.prototype.getMessageId = function () {
        return CharacterReplayRequestMessage.ID;
    };
    CharacterReplayRequestMessage.prototype.reset = function () {
        this.characterId = 0;
    };
    CharacterReplayRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterReplayRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterReplayRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterReplayRequestMessage(param1);
    };
    CharacterReplayRequestMessage.prototype.serializeAs_CharacterReplayRequestMessage = function (param1) {
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element characterId.');
        }
        param1.writeInt(this.characterId);
    };
    CharacterReplayRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterReplayRequestMessage(param1);
    };
    CharacterReplayRequestMessage.prototype.deserializeAs_CharacterReplayRequestMessage = function (param1) {
        this.characterId = param1.readInt();
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element of CharacterReplayRequestMessage.characterId.');
        }
    };
    CharacterReplayRequestMessage.ID = 167;
    return CharacterReplayRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterReplayRequestMessage;
