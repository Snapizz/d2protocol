var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var FriendGuildWarnOnAchievementCompleteStateMessage = function() {
  this.enable = false;
};

util.inherits(FriendGuildWarnOnAchievementCompleteStateMessage, BaseMessage);

FriendGuildWarnOnAchievementCompleteStateMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendGuildWarnOnAchievementCompleteStateMessage(output);
};

FriendGuildWarnOnAchievementCompleteStateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendGuildWarnOnAchievementCompleteStateMessage(input);
};

FriendGuildWarnOnAchievementCompleteStateMessage.prototype.serializeAs_FriendGuildWarnOnAchievementCompleteStateMessage = function(output) {
  param1.writeBoolean(this.enable);
};

FriendGuildWarnOnAchievementCompleteStateMessage.prototype.deserializeAs_FriendGuildWarnOnAchievementCompleteStateMessage = function(input) {
  this.enable = param1.readBoolean();
};

FriendGuildWarnOnAchievementCompleteStateMessage.prototype.getMessageId = function() {
  return 6383;
};

FriendGuildWarnOnAchievementCompleteStateMessage.prototype.getClassName = function() {
  return 'FriendGuildWarnOnAchievementCompleteStateMessage';
};

module.exports.id = 6383;
module.exports.class = FriendGuildWarnOnAchievementCompleteStateMessage;