var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var FriendUpdateMessage = function() {
  this.friendUpdated;
};

util.inherits(FriendUpdateMessage, BaseMessage);

FriendUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendUpdateMessage(output);
};

FriendUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendUpdateMessage(input);
};

FriendUpdateMessage.prototype.serializeAs_FriendUpdateMessage = function(output) {
  output.writeShort(this.friendUpdated.getTypeId());
  this.friendUpdated.serialize(output);
};

FriendUpdateMessage.prototype.deserializeAs_FriendUpdateMessage = function(input) {
  var _id1 = input.readUnsignedShort();
  this.friendUpdated = ProtocolTypeManager.getInstance(FriendInformations, _id1);
  this.friendUpdated.deserialize(input);
};

FriendUpdateMessage.prototype.getMessageId = function() {
  return 5924;
};

FriendUpdateMessage.prototype.getClassName = function() {
  return 'FriendUpdateMessage';
};

module.exports.id = 5924;
module.exports.class = FriendUpdateMessage;