/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var Achievement = require('../../../types/game/achievement/achievement');
var AchievementDetailsMessage = (function (_super) {
    __extends(AchievementDetailsMessage, _super);
    function AchievementDetailsMessage() {
        this.achievement = new Achievement();
        _super.call(this);
    }
    AchievementDetailsMessage.prototype.getMessageId = function () {
        return AchievementDetailsMessage.ID;
    };
    AchievementDetailsMessage.prototype.reset = function () {
        this.achievement = new Achievement();
    };
    AchievementDetailsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AchievementDetailsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AchievementDetailsMessage.prototype.serialize = function (param1) {
        this.serializeAs_AchievementDetailsMessage(param1);
    };
    AchievementDetailsMessage.prototype.serializeAs_AchievementDetailsMessage = function (param1) {
        this.achievement.serializeAs_Achievement(param1);
    };
    AchievementDetailsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AchievementDetailsMessage(param1);
    };
    AchievementDetailsMessage.prototype.deserializeAs_AchievementDetailsMessage = function (param1) {
        this.achievement = new Achievement();
        this.achievement.deserialize(param1);
    };
    AchievementDetailsMessage.ID = 6378;
    return AchievementDetailsMessage;
})(network_message_1.NetworkMessage);
module.exports = AchievementDetailsMessage;
