/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildKickRequestMessage = (function (_super) {
    __extends(GuildKickRequestMessage, _super);
    function GuildKickRequestMessage() {
        this.kickedId = 0;
        _super.call(this);
    }
    GuildKickRequestMessage.prototype.getMessageId = function () {
        return GuildKickRequestMessage.ID;
    };
    GuildKickRequestMessage.prototype.reset = function () {
        this.kickedId = 0;
    };
    GuildKickRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildKickRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildKickRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildKickRequestMessage(param1);
    };
    GuildKickRequestMessage.prototype.serializeAs_GuildKickRequestMessage = function (param1) {
        if (this.kickedId < 0) {
            throw new Error('Forbidden value (' + this.kickedId + ') on element kickedId.');
        }
        param1.writeVarInt(this.kickedId);
    };
    GuildKickRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildKickRequestMessage(param1);
    };
    GuildKickRequestMessage.prototype.deserializeAs_GuildKickRequestMessage = function (param1) {
        this.kickedId = param1.readVarUhInt();
        if (this.kickedId < 0) {
            throw new Error('Forbidden value (' + this.kickedId + ') on element of GuildKickRequestMessage.kickedId.');
        }
    };
    GuildKickRequestMessage.ID = 5887;
    return GuildKickRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildKickRequestMessage;
