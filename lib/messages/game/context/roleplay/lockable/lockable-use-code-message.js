var d2com = require('d2com'),
  BaseMessage = require('./lockable-use-code-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var LockableUseCodeMessage = function() {
  this.code = "";
};

util.inherits(LockableUseCodeMessage, BaseMessage);

LockableUseCodeMessage.prototype.serialize = function(output) {
  this.serializeAs_LockableUseCodeMessage(output);
};

LockableUseCodeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LockableUseCodeMessage(input);
};

LockableUseCodeMessage.prototype.serializeAs_LockableUseCodeMessage = function(param1) {
  param1.writeUTF(this.code);
};

LockableUseCodeMessage.prototype.deserializeAs_LockableUseCodeMessage = function(param1) {
  this.code = param1.readUTF();
};

LockableUseCodeMessage.prototype.getMessageId = function() {
  return 5667;
};

LockableUseCodeMessage.prototype.getClassName = function() {
  return 'LockableUseCodeMessage';
};

module.exports.id = 5667;
module.exports.class = LockableUseCodeMessage;
module.exports.getInstance = function() {
  return new LockableUseCodeMessage();
};