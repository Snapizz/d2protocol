var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var FriendWarnOnLevelGainStateMessage = function() {
  this.enable = false;
};

util.inherits(FriendWarnOnLevelGainStateMessage, BaseMessage);

FriendWarnOnLevelGainStateMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendWarnOnLevelGainStateMessage(output);
};

FriendWarnOnLevelGainStateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendWarnOnLevelGainStateMessage(input);
};

FriendWarnOnLevelGainStateMessage.prototype.serializeAs_FriendWarnOnLevelGainStateMessage = function(param1) {
  param1.writeBoolean(this.enable);
};

FriendWarnOnLevelGainStateMessage.prototype.deserializeAs_FriendWarnOnLevelGainStateMessage = function(param1) {
  this.enable = param1.readBoolean();
};

FriendWarnOnLevelGainStateMessage.prototype.getMessageId = function() {
  return 6078;
};

FriendWarnOnLevelGainStateMessage.prototype.getClassName = function() {
  return 'FriendWarnOnLevelGainStateMessage';
};

module.exports.id = 6078;
module.exports.class = FriendWarnOnLevelGainStateMessage;