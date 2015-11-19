/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FriendGuildSetWarnOnAchievementCompleteMessage = (function (_super) {
    __extends(FriendGuildSetWarnOnAchievementCompleteMessage, _super);
    function FriendGuildSetWarnOnAchievementCompleteMessage() {
        this.enable = false;
        _super.call(this);
    }
    FriendGuildSetWarnOnAchievementCompleteMessage.prototype.getMessageId = function () {
        return FriendGuildSetWarnOnAchievementCompleteMessage.ID;
    };
    FriendGuildSetWarnOnAchievementCompleteMessage.prototype.reset = function () {
        this.enable = false;
    };
    FriendGuildSetWarnOnAchievementCompleteMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    FriendGuildSetWarnOnAchievementCompleteMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    FriendGuildSetWarnOnAchievementCompleteMessage.prototype.serialize = function (param1) {
        this.serializeAs_FriendGuildSetWarnOnAchievementCompleteMessage(param1);
    };
    FriendGuildSetWarnOnAchievementCompleteMessage.prototype.serializeAs_FriendGuildSetWarnOnAchievementCompleteMessage = function (param1) {
        param1.writeBoolean(this.enable);
    };
    FriendGuildSetWarnOnAchievementCompleteMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendGuildSetWarnOnAchievementCompleteMessage(param1);
    };
    FriendGuildSetWarnOnAchievementCompleteMessage.prototype.deserializeAs_FriendGuildSetWarnOnAchievementCompleteMessage = function (param1) {
        this.enable = param1.readBoolean();
    };
    FriendGuildSetWarnOnAchievementCompleteMessage.ID = 6382;
    return FriendGuildSetWarnOnAchievementCompleteMessage;
})(network_message_1.NetworkMessage);
module.exports = FriendGuildSetWarnOnAchievementCompleteMessage;
