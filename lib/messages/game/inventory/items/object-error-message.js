var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectErrorMessage = function() {
  this.reason = 0;
};

util.inherits(ObjectErrorMessage, BaseMessage);

ObjectErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectErrorMessage(output);
};

ObjectErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectErrorMessage(input);
};

ObjectErrorMessage.prototype.serializeAs_ObjectErrorMessage = function(output) {
  param1.writeByte(this.reason);
};

ObjectErrorMessage.prototype.deserializeAs_ObjectErrorMessage = function(input) {
  this.reason = param1.readByte();
};

ObjectErrorMessage.prototype.getMessageId = function() {
  return 3004;
};

ObjectErrorMessage.prototype.getClassName = function() {
  return 'ObjectErrorMessage';
};

module.exports.id = 3004;
module.exports.class = ObjectErrorMessage;