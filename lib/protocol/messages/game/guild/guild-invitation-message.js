/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildInvitationMessage = (function (_super) {
    __extends(GuildInvitationMessage, _super);
    function GuildInvitationMessage() {
        this.targetId = 0;
        _super.call(this);
    }
    GuildInvitationMessage.prototype.getMessageId = function () {
        return GuildInvitationMessage.ID;
    };
    GuildInvitationMessage.prototype.reset = function () {
        this.targetId = 0;
    };
    GuildInvitationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildInvitationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildInvitationMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildInvitationMessage(param1);
    };
    GuildInvitationMessage.prototype.serializeAs_GuildInvitationMessage = function (param1) {
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element targetId.');
        }
        param1.writeVarInt(this.targetId);
    };
    GuildInvitationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInvitationMessage(param1);
    };
    GuildInvitationMessage.prototype.deserializeAs_GuildInvitationMessage = function (param1) {
        this.targetId = param1.readVarUhInt();
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element of GuildInvitationMessage.targetId.');
        }
    };
    GuildInvitationMessage.ID = 5551;
    return GuildInvitationMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildInvitationMessage;
