var d2com = require('d2com'),
  BaseMessage = require('./object-error-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

ObjectErrorMessage.prototype.serializeAs_ObjectErrorMessage = function(param1) {
  param1.writeByte(this.reason);
};

ObjectErrorMessage.prototype.deserializeAs_ObjectErrorMessage = function(param1) {
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
module.exports.getInstance = function() {
  return new ObjectErrorMessage();
};