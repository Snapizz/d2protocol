var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var AchievementListMessage = function() {
  this.finishedAchievementsIds = [];
  this.rewardableAchievements = [];
};

util.inherits(AchievementListMessage, BaseMessage);

AchievementListMessage.prototype.serialize = function(output) {
  this.serializeAs_AchievementListMessage(output);
};

AchievementListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementListMessage(input);
};

AchievementListMessage.prototype.serializeAs_AchievementListMessage = function(param1) {
  param1.writeShort(this.finishedAchievementsIds.length);
  var _loc2_ = 0;
  while (_loc2_ < this.finishedAchievementsIds.length) {
    if (this.finishedAchievementsIds[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.finishedAchievementsIds[_loc2_] + ") on element 1 (starting at 1) of finishedAchievementsIds.");
    } else {
      param1.writeVarShort(this.finishedAchievementsIds[_loc2_]);
      _loc2_++;
      continue;
    }
  }
  param1.writeShort(this.rewardableAchievements.length);
  var _loc3_ = 0;
  while (_loc3_ < this.rewardableAchievements.length) {
    (this.rewardableAchievements[_loc3_]).serializeAs_AchievementRewardable(param1);
    _loc3_++;
  }
};

AchievementListMessage.prototype.deserializeAs_AchievementListMessage = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc6_ = param1.readVarUhShort();
    if (_loc6_ < 0) {
      throw new Error("Forbidden value (" + _loc6_ + ") on elements of finishedAchievementsIds.");
    } else {
      this.finishedAchievementsIds.push(_loc6_);
      _loc3_++;
      continue;
    }
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

AchievementListMessage.prototype.getMessageId = function() {
  return 6205;
};

AchievementListMessage.prototype.getClassName = function() {
  return 'AchievementListMessage';
};

module.exports.id = 6205;
module.exports.class = AchievementListMessage;