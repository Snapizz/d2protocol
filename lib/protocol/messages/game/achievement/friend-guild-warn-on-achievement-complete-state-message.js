/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FriendGuildWarnOnAchievementCompleteStateMessage = (function (_super) {
    __extends(FriendGuildWarnOnAchievementCompleteStateMessage, _super);
    function FriendGuildWarnOnAchievementCompleteStateMessage() {
        this.enable = false;
        _super.call(this);
    }
    FriendGuildWarnOnAchievementCompleteStateMessage.prototype.getMessageId = function () {
        return FriendGuildWarnOnAchievementCompleteStateMessage.ID;
    };
    FriendGuildWarnOnAchievementCompleteStateMessage.prototype.reset = function () {
        this.enable = false;
    };
    FriendGuildWarnOnAchievementCompleteStateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    FriendGuildWarnOnAchievementCompleteStateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    FriendGuildWarnOnAchievementCompleteStateMessage.prototype.serialize = function (param1) {
        this.serializeAs_FriendGuildWarnOnAchievementCompleteStateMessage(param1);
    };
    FriendGuildWarnOnAchievementCompleteStateMessage.prototype.serializeAs_FriendGuildWarnOnAchievementCompleteStateMessage = function (param1) {
        param1.writeBoolean(this.enable);
    };
    FriendGuildWarnOnAchievementCompleteStateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendGuildWarnOnAchievementCompleteStateMessage(param1);
    };
    FriendGuildWarnOnAchievementCompleteStateMessage.prototype.deserializeAs_FriendGuildWarnOnAchievementCompleteStateMessage = function (param1) {
        this.enable = param1.readBoolean();
    };
    FriendGuildWarnOnAchievementCompleteStateMessage.ID = 6383;
    return FriendGuildWarnOnAchievementCompleteStateMessage;
})(network_message_1.NetworkMessage);
module.exports = FriendGuildWarnOnAchievementCompleteStateMessage;
