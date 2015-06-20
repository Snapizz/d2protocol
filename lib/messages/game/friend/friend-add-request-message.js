var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var FriendAddRequestMessage = function() {
  this.name = "";
};

util.inherits(FriendAddRequestMessage, BaseMessage);

FriendAddRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendAddRequestMessage(output);
};

FriendAddRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendAddRequestMessage(input);
};

FriendAddRequestMessage.prototype.serializeAs_FriendAddRequestMessage = function(param1) {
  param1.writeUTF(this.name);
};

FriendAddRequestMessage.prototype.deserializeAs_FriendAddRequestMessage = function(param1) {
  this.name = param1.readUTF();
};

FriendAddRequestMessage.prototype.getMessageId = function() {
  return 4004;
};

FriendAddRequestMessage.prototype.getClassName = function() {
  return 'FriendAddRequestMessage';
};

module.exports.id = 4004;
module.exports.class = FriendAddRequestMessage;
module.exports.getInstance = function() {
  return new FriendAddRequestMessage();
};