/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildMemberOnlineStatusMessage = (function (_super) {
    __extends(GuildMemberOnlineStatusMessage, _super);
    function GuildMemberOnlineStatusMessage() {
        this.memberId = 0;
        this.online = false;
        _super.call(this);
    }
    GuildMemberOnlineStatusMessage.prototype.getMessageId = function () {
        return GuildMemberOnlineStatusMessage.ID;
    };
    GuildMemberOnlineStatusMessage.prototype.reset = function () {
        this.memberId = 0;
        this.online = false;
    };
    GuildMemberOnlineStatusMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildMemberOnlineStatusMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildMemberOnlineStatusMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildMemberOnlineStatusMessage(param1);
    };
    GuildMemberOnlineStatusMessage.prototype.serializeAs_GuildMemberOnlineStatusMessage = function (param1) {
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element memberId.');
        }
        param1.writeVarInt(this.memberId);
        param1.writeBoolean(this.online);
    };
    GuildMemberOnlineStatusMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildMemberOnlineStatusMessage(param1);
    };
    GuildMemberOnlineStatusMessage.prototype.deserializeAs_GuildMemberOnlineStatusMessage = function (param1) {
        this.memberId = param1.readVarUhInt();
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element of GuildMemberOnlineStatusMessage.memberId.');
        }
        this.online = param1.readBoolean();
    };
    GuildMemberOnlineStatusMessage.ID = 6061;
    return GuildMemberOnlineStatusMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildMemberOnlineStatusMessage;
