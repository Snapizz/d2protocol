var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var FriendSpouseJoinRequestMessage = function() {

};

util.inherits(FriendSpouseJoinRequestMessage, BaseMessage);

FriendSpouseJoinRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendSpouseJoinRequestMessage(output);
};

FriendSpouseJoinRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendSpouseJoinRequestMessage(input);
};

FriendSpouseJoinRequestMessage.prototype.serializeAs_FriendSpouseJoinRequestMessage = function(output) {

};

FriendSpouseJoinRequestMessage.prototype.deserializeAs_FriendSpouseJoinRequestMessage = function(input) {

};

FriendSpouseJoinRequestMessage.prototype.getMessageId = function() {
  return 5604;
};

FriendSpouseJoinRequestMessage.prototype.getClassName = function() {
  return 'FriendSpouseJoinRequestMessage';
};

module.exports.id = 5604;
module.exports.class = FriendSpouseJoinRequestMessage;