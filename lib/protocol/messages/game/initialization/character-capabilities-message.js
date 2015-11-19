/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterCapabilitiesMessage = (function (_super) {
    __extends(CharacterCapabilitiesMessage, _super);
    function CharacterCapabilitiesMessage() {
        this.guildEmblemSymbolCategories = 0;
        _super.call(this);
    }
    CharacterCapabilitiesMessage.prototype.getMessageId = function () {
        return CharacterCapabilitiesMessage.ID;
    };
    CharacterCapabilitiesMessage.prototype.reset = function () {
        this.guildEmblemSymbolCategories = 0;
    };
    CharacterCapabilitiesMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterCapabilitiesMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterCapabilitiesMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterCapabilitiesMessage(param1);
    };
    CharacterCapabilitiesMessage.prototype.serializeAs_CharacterCapabilitiesMessage = function (param1) {
        if (this.guildEmblemSymbolCategories < 0) {
            throw new Error('Forbidden value (' + this.guildEmblemSymbolCategories + ') on element guildEmblemSymbolCategories.');
        }
        param1.writeVarInt(this.guildEmblemSymbolCategories);
    };
    CharacterCapabilitiesMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterCapabilitiesMessage(param1);
    };
    CharacterCapabilitiesMessage.prototype.deserializeAs_CharacterCapabilitiesMessage = function (param1) {
        this.guildEmblemSymbolCategories = param1.readVarUhInt();
        if (this.guildEmblemSymbolCategories < 0) {
            throw new Error('Forbidden value (' + this.guildEmblemSymbolCategories + ') on element of CharacterCapabilitiesMessage.guildEmblemSymbolCategories.');
        }
    };
    CharacterCapabilitiesMessage.ID = 6339;
    return CharacterCapabilitiesMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterCapabilitiesMessage;
