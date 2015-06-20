var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var FriendJoinRequestMessage = function() {
  this.name = "";
};

util.inherits(FriendJoinRequestMessage, BaseMessage);

FriendJoinRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendJoinRequestMessage(output);
};

FriendJoinRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendJoinRequestMessage(input);
};

FriendJoinRequestMessage.prototype.serializeAs_FriendJoinRequestMessage = function(param1) {
  param1.writeUTF(this.name);
};

FriendJoinRequestMessage.prototype.deserializeAs_FriendJoinRequestMessage = function(param1) {
  this.name = param1.readUTF();
};

FriendJoinRequestMessage.prototype.getMessageId = function() {
  return 5605;
};

FriendJoinRequestMessage.prototype.getClassName = function() {
  return 'FriendJoinRequestMessage';
};

module.exports.id = 5605;
module.exports.class = FriendJoinRequestMessage;