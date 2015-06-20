var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var FriendGuildSetWarnOnAchievementCompleteMessage = function() {
  this.enable = false;
};

util.inherits(FriendGuildSetWarnOnAchievementCompleteMessage, BaseMessage);

FriendGuildSetWarnOnAchievementCompleteMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendGuildSetWarnOnAchievementCompleteMessage(output);
};

FriendGuildSetWarnOnAchievementCompleteMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendGuildSetWarnOnAchievementCompleteMessage(input);
};

FriendGuildSetWarnOnAchievementCompleteMessage.prototype.serializeAs_FriendGuildSetWarnOnAchievementCompleteMessage = function(param1) {
  param1.writeBoolean(this.enable);
};

FriendGuildSetWarnOnAchievementCompleteMessage.prototype.deserializeAs_FriendGuildSetWarnOnAchievementCompleteMessage = function(param1) {
  this.enable = param1.readBoolean();
};

FriendGuildSetWarnOnAchievementCompleteMessage.prototype.getMessageId = function() {
  return 6382;
};

FriendGuildSetWarnOnAchievementCompleteMessage.prototype.getClassName = function() {
  return 'FriendGuildSetWarnOnAchievementCompleteMessage';
};

module.exports.id = 6382;
module.exports.class = FriendGuildSetWarnOnAchievementCompleteMessage;
module.exports.getInstance = function() {
  return new FriendGuildSetWarnOnAchievementCompleteMessage();
};