var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

AbstractGameActionWithAckMessage.prototype.serializeAs_AbstractGameActionWithAckMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeShort(this.waitAckId);
};

AbstractGameActionWithAckMessage.prototype.deserializeAs_AbstractGameActionWithAckMessage = function(param1) {
  this.deserialize(param1);
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
module.exports.getInstance = function() {
  return new AbstractGameActionWithAckMessage();
};