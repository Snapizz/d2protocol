var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  super.serializeAs_AbstractGameActionMessage(param1);
  param1.writeShort(this.waitAckId);
};

AbstractGameActionWithAckMessage.prototype.deserializeAs_AbstractGameActionWithAckMessage = function(input) {
  super.deserialize(param1);
  this.waitAckId = param1.readShort();
};

AbstractGameActionWithAckMessage.prototype.getMessageId = function() {
  return 1001;
};

AbstractGameActionWithAckMessage.prototype.getClassName = function() {
  return 'AbstractGameActionWithAckMessage';
};

module.exports.id = 1001;
module.exports.class = AbstractGameActionWithAckMessage;