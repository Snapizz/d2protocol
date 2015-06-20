var d2com = require('d2com'),
  BaseMessage = require('./lockable-state-update-abstract-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var LockableStateUpdateAbstractMessage = function() {
  this.locked = false;
};

util.inherits(LockableStateUpdateAbstractMessage, BaseMessage);

LockableStateUpdateAbstractMessage.prototype.serialize = function(output) {
  this.serializeAs_LockableStateUpdateAbstractMessage(output);
};

LockableStateUpdateAbstractMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LockableStateUpdateAbstractMessage(input);
};

LockableStateUpdateAbstractMessage.prototype.serializeAs_LockableStateUpdateAbstractMessage = function(param1) {
  param1.writeBoolean(this.locked);
};

LockableStateUpdateAbstractMessage.prototype.deserializeAs_LockableStateUpdateAbstractMessage = function(param1) {
  this.locked = param1.readBoolean();
};

LockableStateUpdateAbstractMessage.prototype.getMessageId = function() {
  return 5671;
};

LockableStateUpdateAbstractMessage.prototype.getClassName = function() {
  return 'LockableStateUpdateAbstractMessage';
};

module.exports.id = 5671;
module.exports.class = LockableStateUpdateAbstractMessage;
module.exports.getInstance = function() {
  return new LockableStateUpdateAbstractMessage();
};