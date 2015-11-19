/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AchievementRewardable = require('../../../types/game/achievement/achievement-rewardable');
var AchievementListMessage = (function (_super) {
    __extends(AchievementListMessage, _super);
    function AchievementListMessage() {
        this.finishedAchievementsIds = [];
        this.rewardableAchievements = [];
        _super.call(this);
    }
    AchievementListMessage.prototype.getMessageId = function () {
        return AchievementListMessage.ID;
    };
    AchievementListMessage.prototype.reset = function () {
        this.finishedAchievementsIds = [];
        this.rewardableAchievements = [];
    };
    AchievementListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AchievementListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AchievementListMessage.prototype.serialize = function (param1) {
        this.serializeAs_AchievementListMessage(param1);
    };
    AchievementListMessage.prototype.serializeAs_AchievementListMessage = function (param1) {
        param1.writeShort(this.finishedAchievementsIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.finishedAchievementsIds.length) {
            if (this.finishedAchievementsIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.finishedAchievementsIds[_loc2_] + ') on element 1 (starting at 1) of finishedAchievementsIds.');
            }
            param1.writeVarShort(this.finishedAchievementsIds[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.rewardableAchievements.length);
        var _loc3_ = 0;
        while (_loc3_ < this.rewardableAchievements.length) {
            (this.rewardableAchievements[_loc3_]).serializeAs_AchievementRewardable(param1);
            _loc3_++;
        }
    };
    AchievementListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AchievementListMessage(param1);
    };
    AchievementListMessage.prototype.deserializeAs_AchievementListMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of finishedAchievementsIds.');
            }
            this.finishedAchievementsIds.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = new AchievementRewardable();
            _loc7_.deserialize(param1);
            this.rewardableAchievements.push(_loc7_);
            _loc5_++;
        }
    };
    AchievementListMessage.ID = 6205;
    return AchievementListMessage;
})(network_message_1.NetworkMessage);
module.exports = AchievementListMessage;
