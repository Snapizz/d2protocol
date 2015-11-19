/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildLevelUpMessage = (function (_super) {
    __extends(GuildLevelUpMessage, _super);
    function GuildLevelUpMessage() {
        this.newLevel = 0;
        _super.call(this);
    }
    GuildLevelUpMessage.prototype.getMessageId = function () {
        return GuildLevelUpMessage.ID;
    };
    GuildLevelUpMessage.prototype.reset = function () {
        this.newLevel = 0;
    };
    GuildLevelUpMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildLevelUpMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildLevelUpMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildLevelUpMessage(param1);
    };
    GuildLevelUpMessage.prototype.serializeAs_GuildLevelUpMessage = function (param1) {
        if (this.newLevel < 2 || this.newLevel > 200) {
            throw new Error('Forbidden value (' + this.newLevel + ') on element newLevel.');
        }
        param1.writeByte(this.newLevel);
    };
    GuildLevelUpMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildLevelUpMessage(param1);
    };
    GuildLevelUpMessage.prototype.deserializeAs_GuildLevelUpMessage = function (param1) {
        this.newLevel = param1.readUnsignedByte();
        if (this.newLevel < 2 || this.newLevel > 200) {
            throw new Error('Forbidden value (' + this.newLevel + ') on element of GuildLevelUpMessage.newLevel.');
        }
    };
    GuildLevelUpMessage.ID = 6062;
    return GuildLevelUpMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildLevelUpMessage;
