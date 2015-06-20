var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');

var Achievement = require('../../../types/game/achievement/achievement.js').class;

var AchievementDetailsMessage = function() {
  this.achievement = new Achievement();
};

util.inherits(AchievementDetailsMessage, BaseMessage);

AchievementDetailsMessage.prototype.serialize = function(output) {
  this.serializeAs_AchievementDetailsMessage(output);
};

AchievementDetailsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementDetailsMessage(input);
};

AchievementDetailsMessage.prototype.serializeAs_AchievementDetailsMessage = function(param1) {
  this.achievement.serializeAs_Achievement(param1);
};

AchievementDetailsMessage.prototype.deserializeAs_AchievementDetailsMessage = function(param1) {
  this.achievement = new Achievement();
  this.achievement.deserialize(param1);
};

AchievementDetailsMessage.prototype.getMessageId = function() {
  return 6378;
};

AchievementDetailsMessage.prototype.getClassName = function() {
  return 'AchievementDetailsMessage';
};

module.exports.id = 6378;
module.exports.class = AchievementDetailsMessage;
module.exports.getInstance = function() {
  return new AchievementDetailsMessage();
};