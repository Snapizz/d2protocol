var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AchievementRewardSuccessMessage = function() {
  this.achievementId = 0;
};

util.inherits(AchievementRewardSuccessMessage, BaseMessage);

AchievementRewardSuccessMessage.prototype.serialize = function(output) {
  this.serializeAs_AchievementRewardSuccessMessage(output);
};

AchievementRewardSuccessMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementRewardSuccessMessage(input);
};

AchievementRewardSuccessMessage.prototype.serializeAs_AchievementRewardSuccessMessage = function(param1) {
  param1.writeShort(this.achievementId);
};

AchievementRewardSuccessMessage.prototype.deserializeAs_AchievementRewardSuccessMessage = function(param1) {
  this.achievementId = param1.readShort();
};

AchievementRewardSuccessMessage.prototype.getMessageId = function() {
  return 6376;
};

AchievementRewardSuccessMessage.prototype.getClassName = function() {
  return 'AchievementRewardSuccessMessage';
};

module.exports.id = 6376;
module.exports.class = AchievementRewardSuccessMessage;