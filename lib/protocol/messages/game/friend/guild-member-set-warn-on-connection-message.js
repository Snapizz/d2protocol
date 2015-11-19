/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildMemberSetWarnOnConnectionMessage = (function (_super) {
    __extends(GuildMemberSetWarnOnConnectionMessage, _super);
    function GuildMemberSetWarnOnConnectionMessage() {
        this.enable = false;
        _super.call(this);
    }
    GuildMemberSetWarnOnConnectionMessage.prototype.getMessageId = function () {
        return GuildMemberSetWarnOnConnectionMessage.ID;
    };
    GuildMemberSetWarnOnConnectionMessage.prototype.reset = function () {
        this.enable = false;
    };
    GuildMemberSetWarnOnConnectionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildMemberSetWarnOnConnectionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildMemberSetWarnOnConnectionMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildMemberSetWarnOnConnectionMessage(param1);
    };
    GuildMemberSetWarnOnConnectionMessage.prototype.serializeAs_GuildMemberSetWarnOnConnectionMessage = function (param1) {
        param1.writeBoolean(this.enable);
    };
    GuildMemberSetWarnOnConnectionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildMemberSetWarnOnConnectionMessage(param1);
    };
    GuildMemberSetWarnOnConnectionMessage.prototype.deserializeAs_GuildMemberSetWarnOnConnectionMessage = function (param1) {
        this.enable = param1.readBoolean();
    };
    GuildMemberSetWarnOnConnectionMessage.ID = 6159;
    return GuildMemberSetWarnOnConnectionMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildMemberSetWarnOnConnectionMessage;
