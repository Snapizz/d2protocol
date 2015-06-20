var d2com = require('d2com'),
  BaseMessage = require('./friend-spouse-follow-with-compass-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var FriendSpouseFollowWithCompassRequestMessage = function() {
  this.enable = false;
};

util.inherits(FriendSpouseFollowWithCompassRequestMessage, BaseMessage);

FriendSpouseFollowWithCompassRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendSpouseFollowWithCompassRequestMessage(output);
};

FriendSpouseFollowWithCompassRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendSpouseFollowWithCompassRequestMessage(input);
};

FriendSpouseFollowWithCompassRequestMessage.prototype.serializeAs_FriendSpouseFollowWithCompassRequestMessage = function(param1) {
  param1.writeBoolean(this.enable);
};

FriendSpouseFollowWithCompassRequestMessage.prototype.deserializeAs_FriendSpouseFollowWithCompassRequestMessage = function(param1) {
  this.enable = param1.readBoolean();
};

FriendSpouseFollowWithCompassRequestMessage.prototype.getMessageId = function() {
  return 5606;
};

FriendSpouseFollowWithCompassRequestMessage.prototype.getClassName = function() {
  return 'FriendSpouseFollowWithCompassRequestMessage';
};

module.exports.id = 5606;
module.exports.class = FriendSpouseFollowWithCompassRequestMessage;
module.exports.getInstance = function() {
  return new FriendSpouseFollowWithCompassRequestMessage();
};