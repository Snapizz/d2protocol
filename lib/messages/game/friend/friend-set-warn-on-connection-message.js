var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var FriendSetWarnOnConnectionMessage = function() {
  this.enable = false;
};

util.inherits(FriendSetWarnOnConnectionMessage, BaseMessage);

FriendSetWarnOnConnectionMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendSetWarnOnConnectionMessage(output);
};

FriendSetWarnOnConnectionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendSetWarnOnConnectionMessage(input);
};

FriendSetWarnOnConnectionMessage.prototype.serializeAs_FriendSetWarnOnConnectionMessage = function(param1) {
  param1.writeBoolean(this.enable);
};

FriendSetWarnOnConnectionMessage.prototype.deserializeAs_FriendSetWarnOnConnectionMessage = function(param1) {
  this.enable = param1.readBoolean();
};

FriendSetWarnOnConnectionMessage.prototype.getMessageId = function() {
  return 5602;
};

FriendSetWarnOnConnectionMessage.prototype.getClassName = function() {
  return 'FriendSetWarnOnConnectionMessage';
};

module.exports.id = 5602;
module.exports.class = FriendSetWarnOnConnectionMessage;
module.exports.getInstance = function() {
  return new FriendSetWarnOnConnectionMessage();
};