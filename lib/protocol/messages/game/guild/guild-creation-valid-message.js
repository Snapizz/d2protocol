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
var GuildCreationValidMessage = (function (_super) {
    __extends(GuildCreationValidMessage, _super);
    function GuildCreationValidMessage() {
        this.guildName = '';
        this.guildEmblem = new GuildEmblem();
        _super.call(this);
    }
    GuildCreationValidMessage.prototype.getMessageId = function () {
        return GuildCreationValidMessage.ID;
    };
    GuildCreationValidMessage.prototype.reset = function () {
        this.guildName = '';
        this.guildEmblem = new GuildEmblem();
    };
    GuildCreationValidMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildCreationValidMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildCreationValidMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildCreationValidMessage(param1);
    };
    GuildCreationValidMessage.prototype.serializeAs_GuildCreationValidMessage = function (param1) {
        param1.writeUTF(this.guildName);
        this.guildEmblem.serializeAs_GuildEmblem(param1);
    };
    GuildCreationValidMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildCreationValidMessage(param1);
    };
    GuildCreationValidMessage.prototype.deserializeAs_GuildCreationValidMessage = function (param1) {
        this.guildName = param1.readUTF();
        this.guildEmblem = new GuildEmblem();
        this.guildEmblem.deserialize(param1);
    };
    GuildCreationValidMessage.ID = 5546;
    return GuildCreationValidMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildCreationValidMessage;
