/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildMemberWarnOnConnectionStateMessage = (function (_super) {
    __extends(GuildMemberWarnOnConnectionStateMessage, _super);
    function GuildMemberWarnOnConnectionStateMessage() {
        this.enable = false;
        _super.call(this);
    }
    GuildMemberWarnOnConnectionStateMessage.prototype.getMessageId = function () {
        return GuildMemberWarnOnConnectionStateMessage.ID;
    };
    GuildMemberWarnOnConnectionStateMessage.prototype.reset = function () {
        this.enable = false;
    };
    GuildMemberWarnOnConnectionStateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildMemberWarnOnConnectionStateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildMemberWarnOnConnectionStateMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildMemberWarnOnConnectionStateMessage(param1);
    };
    GuildMemberWarnOnConnectionStateMessage.prototype.serializeAs_GuildMemberWarnOnConnectionStateMessage = function (param1) {
        param1.writeBoolean(this.enable);
    };
    GuildMemberWarnOnConnectionStateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildMemberWarnOnConnectionStateMessage(param1);
    };
    GuildMemberWarnOnConnectionStateMessage.prototype.deserializeAs_GuildMemberWarnOnConnectionStateMessage = function (param1) {
        this.enable = param1.readBoolean();
    };
    GuildMemberWarnOnConnectionStateMessage.ID = 6160;
    return GuildMemberWarnOnConnectionStateMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildMemberWarnOnConnectionStateMessage;
