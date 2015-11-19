/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildFactsErrorMessage = (function (_super) {
    __extends(GuildFactsErrorMessage, _super);
    function GuildFactsErrorMessage() {
        this.guildId = 0;
        _super.call(this);
    }
    GuildFactsErrorMessage.prototype.getMessageId = function () {
        return GuildFactsErrorMessage.ID;
    };
    GuildFactsErrorMessage.prototype.reset = function () {
        this.guildId = 0;
    };
    GuildFactsErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildFactsErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildFactsErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildFactsErrorMessage(param1);
    };
    GuildFactsErrorMessage.prototype.serializeAs_GuildFactsErrorMessage = function (param1) {
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
        }
        param1.writeVarInt(this.guildId);
    };
    GuildFactsErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildFactsErrorMessage(param1);
    };
    GuildFactsErrorMessage.prototype.deserializeAs_GuildFactsErrorMessage = function (param1) {
        this.guildId = param1.readVarUhInt();
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element of GuildFactsErrorMessage.guildId.');
        }
    };
    GuildFactsErrorMessage.ID = 6424;
    return GuildFactsErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildFactsErrorMessage;
