var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var FriendAddedMessage = function() {
  this.friendAdded;
};

util.inherits(FriendAddedMessage, BaseMessage);

FriendAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendAddedMessage(output);
};

FriendAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendAddedMessage(input);
};

FriendAddedMessage.prototype.serializeAs_FriendAddedMessage = function(output) {
  param1.writeShort(this.friendAdded.getTypeId());
  this.friendAdded.serialize(param1);
};

FriendAddedMessage.prototype.deserializeAs_FriendAddedMessage = function(input) {
  var _loc2_ = param1.readUnsignedShort();
  this.friendAdded = ProtocolTypeManager.getInstance(FriendInformations, _loc2_);
  this.friendAdded.deserialize(param1);
};

FriendAddedMessage.prototype.getMessageId = function() {
  return 5599;
};

FriendAddedMessage.prototype.getClassName = function() {
  return 'FriendAddedMessage';
};

module.exports.id = 5599;
module.exports.class = FriendAddedMessage;