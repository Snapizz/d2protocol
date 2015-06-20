var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var LockableCodeResultMessage = function() {
  this.result = 0;
};

util.inherits(LockableCodeResultMessage, BaseMessage);

LockableCodeResultMessage.prototype.serialize = function(output) {
  this.serializeAs_LockableCodeResultMessage(output);
};

LockableCodeResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LockableCodeResultMessage(input);
};

LockableCodeResultMessage.prototype.serializeAs_LockableCodeResultMessage = function(output) {
  param1.writeByte(this.result);
};

LockableCodeResultMessage.prototype.deserializeAs_LockableCodeResultMessage = function(input) {
  this.result = param1.readByte();
  if (this.result < 0) {
    throw new Error("Forbidden value (" + this.result + ") on element of LockableCodeResultMessage.result.");
  } else {
    return;
  }
};

LockableCodeResultMessage.prototype.getMessageId = function() {
  return 5672;
};

LockableCodeResultMessage.prototype.getClassName = function() {
  return 'LockableCodeResultMessage';
};

module.exports.id = 5672;
module.exports.class = LockableCodeResultMessage;