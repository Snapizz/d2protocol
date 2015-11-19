/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AchievementRewardErrorMessage = (function (_super) {
    __extends(AchievementRewardErrorMessage, _super);
    function AchievementRewardErrorMessage() {
        this.achievementId = 0;
        _super.call(this);
    }
    AchievementRewardErrorMessage.prototype.getMessageId = function () {
        return AchievementRewardErrorMessage.ID;
    };
    AchievementRewardErrorMessage.prototype.reset = function () {
        this.achievementId = 0;
    };
    AchievementRewardErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AchievementRewardErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AchievementRewardErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_AchievementRewardErrorMessage(param1);
    };
    AchievementRewardErrorMessage.prototype.serializeAs_AchievementRewardErrorMessage = function (param1) {
        param1.writeShort(this.achievementId);
    };
    AchievementRewardErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AchievementRewardErrorMessage(param1);
    };
    AchievementRewardErrorMessage.prototype.deserializeAs_AchievementRewardErrorMessage = function (param1) {
        this.achievementId = param1.readShort();
    };
    AchievementRewardErrorMessage.ID = 6375;
    return AchievementRewardErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = AchievementRewardErrorMessage;
