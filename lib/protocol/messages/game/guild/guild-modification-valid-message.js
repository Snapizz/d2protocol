/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildEmblem = require('../../../types/game/guild/guild-emblem');
var GuildModificationValidMessage = (function (_super) {
    __extends(GuildModificationValidMessage, _super);
    function GuildModificationValidMessage() {
        this.guildName = '';
        this.guildEmblem = new GuildEmblem();
        _super.call(this);
    }
    GuildModificationValidMessage.prototype.getMessageId = function () {
        return GuildModificationValidMessage.ID;
    };
    GuildModificationValidMessage.prototype.reset = function () {
        this.guildName = '';
        this.guildEmblem = new GuildEmblem();
    };
    GuildModificationValidMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildModificationValidMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildModificationValidMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildModificationValidMessage(param1);
    };
    GuildModificationValidMessage.prototype.serializeAs_GuildModificationValidMessage = function (param1) {
        param1.writeUTF(this.guildName);
        this.guildEmblem.serializeAs_GuildEmblem(param1);
    };
    GuildModificationValidMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildModificationValidMessage(param1);
    };
    GuildModificationValidMessage.prototype.deserializeAs_GuildModificationValidMessage = function (param1) {
        this.guildName = param1.readUTF();
        this.guildEmblem = new GuildEmblem();
        this.guildEmblem.deserialize(param1);
    };
    GuildModificationValidMessage.ID = 6323;
    return GuildModificationValidMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildModificationValidMessage;
