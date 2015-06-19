var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AchievementRewardRequestMessage = function() {
  this.achievementId = 0;
};

util.inherits(AchievementRewardRequestMessage, BaseMessage);

AchievementRewardRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_AchievementRewardRequestMessage(output);
};

AchievementRewardRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementRewardRequestMessage(input);
};

AchievementRewardRequestMessage.prototype.serializeAs_AchievementRewardRequestMessage = function(output) {
  output.writeShort(this.achievementId);
};

AchievementRewardRequestMessage.prototype.deserializeAs_AchievementRewardRequestMessage = function(input) {
  this.achievementId = input.readShort();
};

AchievementRewardRequestMessage.prototype.getMessageId = function() {
  return 6377;
};

AchievementRewardRequestMessage.prototype.getClassName = function() {
  return 'AchievementRewardRequestMessage';
};

module.exports.id = 6377;
module.exports.class = AchievementRewardRequestMessage;