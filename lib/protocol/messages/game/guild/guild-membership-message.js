/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildJoinedMessage = require('./guild-joined-message');
var GuildMembershipMessage = (function (_super) {
    __extends(GuildMembershipMessage, _super);
    function GuildMembershipMessage() {
        _super.call(this);
    }
    GuildMembershipMessage.prototype.getMessageId = function () {
        return GuildMembershipMessage.ID;
    };
    GuildMembershipMessage.prototype.reset = function () {
    };
    GuildMembershipMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildMembershipMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildMembershipMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildMembershipMessage(param1);
    };
    GuildMembershipMessage.prototype.serializeAs_GuildMembershipMessage = function (param1) {
        _super.prototype.serializeAs_GuildJoinedMessage.call(this, param1);
    };
    GuildMembershipMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildMembershipMessage(param1);
    };
    GuildMembershipMessage.prototype.deserializeAs_GuildMembershipMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    GuildMembershipMessage.ID = 5835;
    return GuildMembershipMessage;
})(GuildJoinedMessage);
module.exports = GuildMembershipMessage;
