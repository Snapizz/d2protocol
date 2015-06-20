var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameActionAcknowledgementMessage = function() {
  this.valid = false;
  this.actionId = 0;
};

util.inherits(GameActionAcknowledgementMessage, BaseMessage);

GameActionAcknowledgementMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionAcknowledgementMessage(output);
};

GameActionAcknowledgementMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionAcknowledgementMessage(input);
};

GameActionAcknowledgementMessage.prototype.serializeAs_GameActionAcknowledgementMessage = function(param1) {
  param1.writeBoolean(this.valid);
  param1.writeByte(this.actionId);
};

GameActionAcknowledgementMessage.prototype.deserializeAs_GameActionAcknowledgementMessage = function(param1) {
  this.valid = param1.readBoolean();
  this.actionId = param1.readByte();
};

GameActionAcknowledgementMessage.prototype.getMessageId = function() {
  return 957;
};

GameActionAcknowledgementMessage.prototype.getClassName = function() {
  return 'GameActionAcknowledgementMessage';
};

module.exports.id = 957;
module.exports.class = GameActionAcknowledgementMessage;