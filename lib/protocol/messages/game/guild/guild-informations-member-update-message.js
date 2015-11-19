/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildMember = require('../../../types/game/guild/guild-member');
var GuildInformationsMemberUpdateMessage = (function (_super) {
    __extends(GuildInformationsMemberUpdateMessage, _super);
    function GuildInformationsMemberUpdateMessage() {
        this.member = new GuildMember();
        _super.call(this);
    }
    GuildInformationsMemberUpdateMessage.prototype.getMessageId = function () {
        return GuildInformationsMemberUpdateMessage.ID;
    };
    GuildInformationsMemberUpdateMessage.prototype.reset = function () {
        this.member = new GuildMember();
    };
    GuildInformationsMemberUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildInformationsMemberUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildInformationsMemberUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildInformationsMemberUpdateMessage(param1);
    };
    GuildInformationsMemberUpdateMessage.prototype.serializeAs_GuildInformationsMemberUpdateMessage = function (param1) {
        this.member.serializeAs_GuildMember(param1);
    };
    GuildInformationsMemberUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInformationsMemberUpdateMessage(param1);
    };
    GuildInformationsMemberUpdateMessage.prototype.deserializeAs_GuildInformationsMemberUpdateMessage = function (param1) {
        this.member = new GuildMember();
        this.member.deserialize(param1);
    };
    GuildInformationsMemberUpdateMessage.ID = 5597;
    return GuildInformationsMemberUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildInformationsMemberUpdateMessage;
