/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterNameSuggestionRequestMessage = (function (_super) {
    __extends(CharacterNameSuggestionRequestMessage, _super);
    function CharacterNameSuggestionRequestMessage() {
        _super.call(this);
    }
    CharacterNameSuggestionRequestMessage.prototype.getMessageId = function () {
        return CharacterNameSuggestionRequestMessage.ID;
    };
    CharacterNameSuggestionRequestMessage.prototype.reset = function () {
    };
    CharacterNameSuggestionRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterNameSuggestionRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterNameSuggestionRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterNameSuggestionRequestMessage(param1);
    };
    CharacterNameSuggestionRequestMessage.prototype.serializeAs_CharacterNameSuggestionRequestMessage = function (param1) {
    };
    CharacterNameSuggestionRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterNameSuggestionRequestMessage(param1);
    };
    CharacterNameSuggestionRequestMessage.prototype.deserializeAs_CharacterNameSuggestionRequestMessage = function (param1) {
    };
    CharacterNameSuggestionRequestMessage.ID = 162;
    return CharacterNameSuggestionRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterNameSuggestionRequestMessage;
