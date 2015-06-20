var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var FriendDeleteResultMessage = function() {
  this.success = false;
  this.name = "";
};

util.inherits(FriendDeleteResultMessage, BaseMessage);

FriendDeleteResultMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendDeleteResultMessage(output);
};

FriendDeleteResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendDeleteResultMessage(input);
};

FriendDeleteResultMessage.prototype.serializeAs_FriendDeleteResultMessage = function(output) {
  param1.writeBoolean(this.success);
  param1.writeUTF(this.name);
};

FriendDeleteResultMessage.prototype.deserializeAs_FriendDeleteResultMessage = function(input) {
  this.success = param1.readBoolean();
  this.name = param1.readUTF();
};

FriendDeleteResultMessage.prototype.getMessageId = function() {
  return 5601;
};

FriendDeleteResultMessage.prototype.getClassName = function() {
  return 'FriendDeleteResultMessage';
};

module.exports.id = 5601;
module.exports.class = FriendDeleteResultMessage;