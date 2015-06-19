var d2com = require('d2com'),
  BaseMessage = require('./abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AbstractGameActionWithAckMessage = function() {
  this.waitAckId = 0;
};

util.inherits(AbstractGameActionWithAckMessage, BaseMessage);

AbstractGameActionWithAckMessage.prototype.serialize = function(output) {
  this.serializeAs_AbstractGameActionWithAckMessage(output);
};

AbstractGameActionWithAckMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AbstractGameActionWithAckMessage(input);
};

AbstractGameActionWithAckMessage.prototype.serializeAs_AbstractGameActionWithAckMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeShort(this.waitAckId);
};

AbstractGameActionWithAckMessage.prototype.deserializeAs_AbstractGameActionWithAckMessage = function(input) {
  this.deserialize(input);
  this.waitAckId = input.readShort();
};

AbstractGameActionWithAckMessage.prototype.getMessageId = function() {
  return 1001;
};

AbstractGameActionWithAckMessage.prototype.getClassName = function() {
  return 'AbstractGameActionWithAckMessage';
};

module.exports.id = 1001;
module.exports.class = AbstractGameActionWithAckMessage;