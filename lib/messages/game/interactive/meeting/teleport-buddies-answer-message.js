var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var TeleportBuddiesAnswerMessage = function() {
  this.accept = false;
};

util.inherits(TeleportBuddiesAnswerMessage, BaseMessage);

TeleportBuddiesAnswerMessage.prototype.serialize = function(output) {
  this.serializeAs_TeleportBuddiesAnswerMessage(output);
};

TeleportBuddiesAnswerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TeleportBuddiesAnswerMessage(input);
};

TeleportBuddiesAnswerMessage.prototype.serializeAs_TeleportBuddiesAnswerMessage = function(param1) {
  param1.writeBoolean(this.accept);
};

TeleportBuddiesAnswerMessage.prototype.deserializeAs_TeleportBuddiesAnswerMessage = function(param1) {
  this.accept = param1.readBoolean();
};

TeleportBuddiesAnswerMessage.prototype.getMessageId = function() {
  return 6294;
};

TeleportBuddiesAnswerMessage.prototype.getClassName = function() {
  return 'TeleportBuddiesAnswerMessage';
};

module.exports.id = 6294;
module.exports.class = TeleportBuddiesAnswerMessage;
module.exports.getInstance = function() {
  return new TeleportBuddiesAnswerMessage();
};