/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicGuildInformations = require('../../../types/game/context/roleplay/basic-guild-informations');
var GuildInvitedMessage = (function (_super) {
    __extends(GuildInvitedMessage, _super);
    function GuildInvitedMessage() {
        this.recruterId = 0;
        this.recruterName = '';
        this.guildInfo = new BasicGuildInformations();
        _super.call(this);
    }
    GuildInvitedMessage.prototype.getMessageId = function () {
        return GuildInvitedMessage.ID;
    };
    GuildInvitedMessage.prototype.reset = function () {
        this.recruterId = 0;
        this.recruterName = '';
        this.guildInfo = new BasicGuildInformations();
    };
    GuildInvitedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildInvitedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildInvitedMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildInvitedMessage(param1);
    };
    GuildInvitedMessage.prototype.serializeAs_GuildInvitedMessage = function (param1) {
        if (this.recruterId < 0) {
            throw new Error('Forbidden value (' + this.recruterId + ') on element recruterId.');
        }
        param1.writeVarInt(this.recruterId);
        param1.writeUTF(this.recruterName);
        this.guildInfo.serializeAs_BasicGuildInformations(param1);
    };
    GuildInvitedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInvitedMessage(param1);
    };
    GuildInvitedMessage.prototype.deserializeAs_GuildInvitedMessage = function (param1) {
        this.recruterId = param1.readVarUhInt();
        if (this.recruterId < 0) {
            throw new Error('Forbidden value (' + this.recruterId + ') on element of GuildInvitedMessage.recruterId.');
        }
        this.recruterName = param1.readUTF();
        this.guildInfo = new BasicGuildInformations();
        this.guildInfo.deserialize(param1);
    };
    GuildInvitedMessage.ID = 5552;
    return GuildInvitedMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildInvitedMessage;
