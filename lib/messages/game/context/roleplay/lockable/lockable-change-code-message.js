var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var LockableChangeCodeMessage = function() {
  this.code = "";
};

util.inherits(LockableChangeCodeMessage, BaseMessage);

LockableChangeCodeMessage.prototype.serialize = function(output) {
  this.serializeAs_LockableChangeCodeMessage(output);
};

LockableChangeCodeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LockableChangeCodeMessage(input);
};

LockableChangeCodeMessage.prototype.serializeAs_LockableChangeCodeMessage = function(param1) {
  param1.writeUTF(this.code);
};

LockableChangeCodeMessage.prototype.deserializeAs_LockableChangeCodeMessage = function(param1) {
  this.code = param1.readUTF();
};

LockableChangeCodeMessage.prototype.getMessageId = function() {
  return 5666;
};

LockableChangeCodeMessage.prototype.getClassName = function() {
  return 'LockableChangeCodeMessage';
};

module.exports.id = 5666;
module.exports.class = LockableChangeCodeMessage;
module.exports.getInstance = function() {
  return new LockableChangeCodeMessage();
};