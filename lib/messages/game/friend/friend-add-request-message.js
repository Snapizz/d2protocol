var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

FriendAddRequestMessage.prototype.serializeAs_FriendAddRequestMessage = function(output) {
  output.writeUTF(this.name);
};

FriendAddRequestMessage.prototype.deserializeAs_FriendAddRequestMessage = function(input) {
  this.name = input.readUTF();
};

FriendAddRequestMessage.prototype.getMessageId = function() {
  return 4004;
};

FriendAddRequestMessage.prototype.getClassName = function() {
  return 'FriendAddRequestMessage';
};

module.exports.id = 4004;
module.exports.class = FriendAddRequestMessage;