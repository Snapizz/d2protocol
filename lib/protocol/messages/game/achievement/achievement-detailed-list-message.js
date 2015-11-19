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
var AchievementDetailedListMessage = (function (_super) {
    __extends(AchievementDetailedListMessage, _super);
    function AchievementDetailedListMessage() {
        this.startedAchievements = [];
        this.finishedAchievements = [];
        _super.call(this);
    }
    AchievementDetailedListMessage.prototype.getMessageId = function () {
        return AchievementDetailedListMessage.ID;
    };
    AchievementDetailedListMessage.prototype.reset = function () {
        this.startedAchievements = [];
        this.finishedAchievements = [];
    };
    AchievementDetailedListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AchievementDetailedListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AchievementDetailedListMessage.prototype.serialize = function (param1) {
        this.serializeAs_AchievementDetailedListMessage(param1);
    };
    AchievementDetailedListMessage.prototype.serializeAs_AchievementDetailedListMessage = function (param1) {
        param1.writeShort(this.startedAchievements.length);
        var _loc2_ = 0;
        while (_loc2_ < this.startedAchievements.length) {
            (this.startedAchievements[_loc2_]).serializeAs_Achievement(param1);
            _loc2_++;
        }
        param1.writeShort(this.finishedAchievements.length);
        var _loc3_ = 0;
        while (_loc3_ < this.finishedAchievements.length) {
            (this.finishedAchievements[_loc3_]).serializeAs_Achievement(param1);
            _loc3_++;
        }
    };
    AchievementDetailedListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AchievementDetailedListMessage(param1);
    };
    AchievementDetailedListMessage.prototype.deserializeAs_AchievementDetailedListMessage = function (param1) {
        var _loc6_ = null;
        var _loc7_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = new Achievement();
            _loc6_.deserialize(param1);
            this.startedAchievements.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = new Achievement();
            _loc7_.deserialize(param1);
            this.finishedAchievements.push(_loc7_);
            _loc5_++;
        }
    };
    AchievementDetailedListMessage.ID = 6358;
    return AchievementDetailedListMessage;
})(network_message_1.NetworkMessage);
module.exports = AchievementDetailedListMessage;
