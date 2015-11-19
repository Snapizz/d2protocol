/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildInvitationAnswerMessage = (function (_super) {
    __extends(GuildInvitationAnswerMessage, _super);
    function GuildInvitationAnswerMessage() {
        this.accept = false;
        _super.call(this);
    }
    GuildInvitationAnswerMessage.prototype.getMessageId = function () {
        return GuildInvitationAnswerMessage.ID;
    };
    GuildInvitationAnswerMessage.prototype.reset = function () {
        this.accept = false;
    };
    GuildInvitationAnswerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildInvitationAnswerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildInvitationAnswerMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildInvitationAnswerMessage(param1);
    };
    GuildInvitationAnswerMessage.prototype.serializeAs_GuildInvitationAnswerMessage = function (param1) {
        param1.writeBoolean(this.accept);
    };
    GuildInvitationAnswerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInvitationAnswerMessage(param1);
    };
    GuildInvitationAnswerMessage.prototype.deserializeAs_GuildInvitationAnswerMessage = function (param1) {
        this.accept = param1.readBoolean();
    };
    GuildInvitationAnswerMessage.ID = 5556;
    return GuildInvitationAnswerMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildInvitationAnswerMessage;
