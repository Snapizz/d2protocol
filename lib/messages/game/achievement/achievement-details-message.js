var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AchievementDetailsMessage = function() {
  this.achievement;
};

util.inherits(AchievementDetailsMessage, BaseMessage);

AchievementDetailsMessage.prototype.serialize = function(output) {
  this.serializeAs_AchievementDetailsMessage(output);
};

AchievementDetailsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementDetailsMessage(input);
};

AchievementDetailsMessage.prototype.serializeAs_AchievementDetailsMessage = function(output) {
  this.achievement.serializeAs_Achievement(output);
};

AchievementDetailsMessage.prototype.deserializeAs_AchievementDetailsMessage = function(input) {
  this.achievement = new Achievement();
  this.achievement.deserialize(input);
};

AchievementDetailsMessage.prototype.getMessageId = function() {
  return 6378;
};

AchievementDetailsMessage.prototype.getClassName = function() {
  return 'AchievementDetailsMessage';
};

module.exports.id = 6378;
module.exports.class = AchievementDetailsMessage;