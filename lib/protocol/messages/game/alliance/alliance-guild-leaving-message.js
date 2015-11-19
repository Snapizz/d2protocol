/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceGuildLeavingMessage = (function (_super) {
    __extends(AllianceGuildLeavingMessage, _super);
    function AllianceGuildLeavingMessage() {
        this.kicked = false;
        this.guildId = 0;
        _super.call(this);
    }
    AllianceGuildLeavingMessage.prototype.getMessageId = function () {
        return AllianceGuildLeavingMessage.ID;
    };
    AllianceGuildLeavingMessage.prototype.reset = function () {
        this.kicked = false;
        this.guildId = 0;
    };
    AllianceGuildLeavingMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceGuildLeavingMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceGuildLeavingMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceGuildLeavingMessage(param1);
    };
    AllianceGuildLeavingMessage.prototype.serializeAs_AllianceGuildLeavingMessage = function (param1) {
        param1.writeBoolean(this.kicked);
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
        }
        param1.writeVarInt(this.guildId);
    };
    AllianceGuildLeavingMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceGuildLeavingMessage(param1);
    };
    AllianceGuildLeavingMessage.prototype.deserializeAs_AllianceGuildLeavingMessage = function (param1) {
        this.kicked = param1.readBoolean();
        this.guildId = param1.readVarUhInt();
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element of AllianceGuildLeavingMessage.guildId.');
        }
    };
    AllianceGuildLeavingMessage.ID = 6399;
    return AllianceGuildLeavingMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceGuildLeavingMessage;
