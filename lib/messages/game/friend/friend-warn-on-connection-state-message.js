var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var FriendWarnOnConnectionStateMessage = function() {
  this.enable = false;
};

util.inherits(FriendWarnOnConnectionStateMessage, BaseMessage);

FriendWarnOnConnectionStateMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendWarnOnConnectionStateMessage(output);
};

FriendWarnOnConnectionStateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendWarnOnConnectionStateMessage(input);
};

FriendWarnOnConnectionStateMessage.prototype.serializeAs_FriendWarnOnConnectionStateMessage = function(param1) {
  param1.writeBoolean(this.enable);
};

FriendWarnOnConnectionStateMessage.prototype.deserializeAs_FriendWarnOnConnectionStateMessage = function(param1) {
  this.enable = param1.readBoolean();
};

FriendWarnOnConnectionStateMessage.prototype.getMessageId = function() {
  return 5630;
};

FriendWarnOnConnectionStateMessage.prototype.getClassName = function() {
  return 'FriendWarnOnConnectionStateMessage';
};

module.exports.id = 5630;
module.exports.class = FriendWarnOnConnectionStateMessage;