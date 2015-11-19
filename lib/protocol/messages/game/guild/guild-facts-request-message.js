/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildFactsRequestMessage = (function (_super) {
    __extends(GuildFactsRequestMessage, _super);
    function GuildFactsRequestMessage() {
        this.guildId = 0;
        _super.call(this);
    }
    GuildFactsRequestMessage.prototype.getMessageId = function () {
        return GuildFactsRequestMessage.ID;
    };
    GuildFactsRequestMessage.prototype.reset = function () {
        this.guildId = 0;
    };
    GuildFactsRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildFactsRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildFactsRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildFactsRequestMessage(param1);
    };
    GuildFactsRequestMessage.prototype.serializeAs_GuildFactsRequestMessage = function (param1) {
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
        }
        param1.writeVarInt(this.guildId);
    };
    GuildFactsRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildFactsRequestMessage(param1);
    };
    GuildFactsRequestMessage.prototype.deserializeAs_GuildFactsRequestMessage = function (param1) {
        this.guildId = param1.readVarUhInt();
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element of GuildFactsRequestMessage.guildId.');
        }
    };
    GuildFactsRequestMessage.ID = 6404;
    return GuildFactsRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildFactsRequestMessage;
