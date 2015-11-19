/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AchievementDetailsRequestMessage = (function (_super) {
    __extends(AchievementDetailsRequestMessage, _super);
    function AchievementDetailsRequestMessage() {
        this.achievementId = 0;
        _super.call(this);
    }
    AchievementDetailsRequestMessage.prototype.getMessageId = function () {
        return AchievementDetailsRequestMessage.ID;
    };
    AchievementDetailsRequestMessage.prototype.reset = function () {
        this.achievementId = 0;
    };
    AchievementDetailsRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AchievementDetailsRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AchievementDetailsRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_AchievementDetailsRequestMessage(param1);
    };
    AchievementDetailsRequestMessage.prototype.serializeAs_AchievementDetailsRequestMessage = function (param1) {
        if (this.achievementId < 0) {
            throw new Error('Forbidden value (' + this.achievementId + ') on element achievementId.');
        }
        param1.writeVarShort(this.achievementId);
    };
    AchievementDetailsRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AchievementDetailsRequestMessage(param1);
    };
    AchievementDetailsRequestMessage.prototype.deserializeAs_AchievementDetailsRequestMessage = function (param1) {
        this.achievementId = param1.readVarUhShort();
        if (this.achievementId < 0) {
            throw new Error('Forbidden value (' + this.achievementId + ') on element of AchievementDetailsRequestMessage.achievementId.');
        }
    };
    AchievementDetailsRequestMessage.ID = 6380;
    return AchievementDetailsRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = AchievementDetailsRequestMessage;
