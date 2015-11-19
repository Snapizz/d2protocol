/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterNameSuggestionSuccessMessage = (function (_super) {
    __extends(CharacterNameSuggestionSuccessMessage, _super);
    function CharacterNameSuggestionSuccessMessage() {
        this.suggestion = '';
        _super.call(this);
    }
    CharacterNameSuggestionSuccessMessage.prototype.getMessageId = function () {
        return CharacterNameSuggestionSuccessMessage.ID;
    };
    CharacterNameSuggestionSuccessMessage.prototype.reset = function () {
        this.suggestion = '';
    };
    CharacterNameSuggestionSuccessMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterNameSuggestionSuccessMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterNameSuggestionSuccessMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterNameSuggestionSuccessMessage(param1);
    };
    CharacterNameSuggestionSuccessMessage.prototype.serializeAs_CharacterNameSuggestionSuccessMessage = function (param1) {
        param1.writeUTF(this.suggestion);
    };
    CharacterNameSuggestionSuccessMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterNameSuggestionSuccessMessage(param1);
    };
    CharacterNameSuggestionSuccessMessage.prototype.deserializeAs_CharacterNameSuggestionSuccessMessage = function (param1) {
        this.suggestion = param1.readUTF();
    };
    CharacterNameSuggestionSuccessMessage.ID = 5544;
    return CharacterNameSuggestionSuccessMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterNameSuggestionSuccessMessage;
