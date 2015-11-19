/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildInformations = require('../../../types/game/context/roleplay/guild-informations');
var GuildJoinedMessage = (function (_super) {
    __extends(GuildJoinedMessage, _super);
    function GuildJoinedMessage() {
        this.guildInfo = new GuildInformations();
        this.memberRights = 0;
        this.enabled = false;
        _super.call(this);
    }
    GuildJoinedMessage.prototype.getMessageId = function () {
        return GuildJoinedMessage.ID;
    };
    GuildJoinedMessage.prototype.reset = function () {
        this.guildInfo = new GuildInformations();
        this.memberRights = 0;
        this.enabled = false;
    };
    GuildJoinedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildJoinedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildJoinedMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildJoinedMessage(param1);
    };
    GuildJoinedMessage.prototype.serializeAs_GuildJoinedMessage = function (param1) {
        this.guildInfo.serializeAs_GuildInformations(param1);
        if (this.memberRights < 0) {
            throw new Error('Forbidden value (' + this.memberRights + ') on element memberRights.');
        }
        param1.writeVarInt(this.memberRights);
        param1.writeBoolean(this.enabled);
    };
    GuildJoinedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildJoinedMessage(param1);
    };
    GuildJoinedMessage.prototype.deserializeAs_GuildJoinedMessage = function (param1) {
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(param1);
        this.memberRights = param1.readVarUhInt();
        if (this.memberRights < 0) {
            throw new Error('Forbidden value (' + this.memberRights + ') on element of GuildJoinedMessage.memberRights.');
        }
        this.enabled = param1.readBoolean();
    };
    GuildJoinedMessage.ID = 5564;
    return GuildJoinedMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildJoinedMessage;
