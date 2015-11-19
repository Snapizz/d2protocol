/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildMemberLeavingMessage = (function (_super) {
    __extends(GuildMemberLeavingMessage, _super);
    function GuildMemberLeavingMessage() {
        this.kicked = false;
        this.memberId = 0;
        _super.call(this);
    }
    GuildMemberLeavingMessage.prototype.getMessageId = function () {
        return GuildMemberLeavingMessage.ID;
    };
    GuildMemberLeavingMessage.prototype.reset = function () {
        this.kicked = false;
        this.memberId = 0;
    };
    GuildMemberLeavingMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildMemberLeavingMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildMemberLeavingMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildMemberLeavingMessage(param1);
    };
    GuildMemberLeavingMessage.prototype.serializeAs_GuildMemberLeavingMessage = function (param1) {
        param1.writeBoolean(this.kicked);
        param1.writeInt(this.memberId);
    };
    GuildMemberLeavingMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildMemberLeavingMessage(param1);
    };
    GuildMemberLeavingMessage.prototype.deserializeAs_GuildMemberLeavingMessage = function (param1) {
        this.kicked = param1.readBoolean();
        this.memberId = param1.readInt();
    };
    GuildMemberLeavingMessage.ID = 5923;
    return GuildMemberLeavingMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildMemberLeavingMessage;
