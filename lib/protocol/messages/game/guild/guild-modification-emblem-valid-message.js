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
var GuildModificationEmblemValidMessage = (function (_super) {
    __extends(GuildModificationEmblemValidMessage, _super);
    function GuildModificationEmblemValidMessage() {
        this.guildEmblem = new GuildEmblem();
        _super.call(this);
    }
    GuildModificationEmblemValidMessage.prototype.getMessageId = function () {
        return GuildModificationEmblemValidMessage.ID;
    };
    GuildModificationEmblemValidMessage.prototype.reset = function () {
        this.guildEmblem = new GuildEmblem();
    };
    GuildModificationEmblemValidMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildModificationEmblemValidMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildModificationEmblemValidMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildModificationEmblemValidMessage(param1);
    };
    GuildModificationEmblemValidMessage.prototype.serializeAs_GuildModificationEmblemValidMessage = function (param1) {
        this.guildEmblem.serializeAs_GuildEmblem(param1);
    };
    GuildModificationEmblemValidMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildModificationEmblemValidMessage(param1);
    };
    GuildModificationEmblemValidMessage.prototype.deserializeAs_GuildModificationEmblemValidMessage = function (param1) {
        this.guildEmblem = new GuildEmblem();
        this.guildEmblem.deserialize(param1);
    };
    GuildModificationEmblemValidMessage.ID = 6328;
    return GuildModificationEmblemValidMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildModificationEmblemValidMessage;
