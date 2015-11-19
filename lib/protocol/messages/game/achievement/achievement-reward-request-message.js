/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AchievementRewardRequestMessage = (function (_super) {
    __extends(AchievementRewardRequestMessage, _super);
    function AchievementRewardRequestMessage() {
        this.achievementId = 0;
        _super.call(this);
    }
    AchievementRewardRequestMessage.prototype.getMessageId = function () {
        return AchievementRewardRequestMessage.ID;
    };
    AchievementRewardRequestMessage.prototype.reset = function () {
        this.achievementId = 0;
    };
    AchievementRewardRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AchievementRewardRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AchievementRewardRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_AchievementRewardRequestMessage(param1);
    };
    AchievementRewardRequestMessage.prototype.serializeAs_AchievementRewardRequestMessage = function (param1) {
        param1.writeShort(this.achievementId);
    };
    AchievementRewardRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AchievementRewardRequestMessage(param1);
    };
    AchievementRewardRequestMessage.prototype.deserializeAs_AchievementRewardRequestMessage = function (param1) {
        this.achievementId = param1.readShort();
    };
    AchievementRewardRequestMessage.ID = 6377;
    return AchievementRewardRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = AchievementRewardRequestMessage;
