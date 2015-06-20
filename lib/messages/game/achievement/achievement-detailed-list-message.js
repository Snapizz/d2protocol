var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var AchievementDetailedListMessage = function() {
  this.startedAchievements = [];
  this.finishedAchievements = [];
};

util.inherits(AchievementDetailedListMessage, BaseMessage);

AchievementDetailedListMessage.prototype.serialize = function(output) {
  this.serializeAs_AchievementDetailedListMessage(output);
};

AchievementDetailedListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementDetailedListMessage(input);
};

AchievementDetailedListMessage.prototype.serializeAs_AchievementDetailedListMessage = function(param1) {
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

AchievementDetailedListMessage.prototype.deserializeAs_AchievementDetailedListMessage = function(param1) {
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

AchievementDetailedListMessage.prototype.getMessageId = function() {
  return 6358;
};

AchievementDetailedListMessage.prototype.getClassName = function() {
  return 'AchievementDetailedListMessage';
};

module.exports.id = 6358;
module.exports.class = AchievementDetailedListMessage;
module.exports.getInstance = function() {
  return new AchievementDetailedListMessage();
};