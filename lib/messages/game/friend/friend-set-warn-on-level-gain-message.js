var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var FriendSetWarnOnLevelGainMessage = function() {
  this.enable = false;
};

util.inherits(FriendSetWarnOnLevelGainMessage, BaseMessage);

FriendSetWarnOnLevelGainMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendSetWarnOnLevelGainMessage(output);
};

FriendSetWarnOnLevelGainMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendSetWarnOnLevelGainMessage(input);
};

FriendSetWarnOnLevelGainMessage.prototype.serializeAs_FriendSetWarnOnLevelGainMessage = function(output) {
  param1.writeBoolean(this.enable);
};

FriendSetWarnOnLevelGainMessage.prototype.deserializeAs_FriendSetWarnOnLevelGainMessage = function(input) {
  this.enable = param1.readBoolean();
};

FriendSetWarnOnLevelGainMessage.prototype.getMessageId = function() {
  return 6077;
};

FriendSetWarnOnLevelGainMessage.prototype.getClassName = function() {
  return 'FriendSetWarnOnLevelGainMessage';
};

module.exports.id = 6077;
module.exports.class = FriendSetWarnOnLevelGainMessage;