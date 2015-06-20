var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var SymbioticObjectErrorMessage = function() {
  this.errorCode = 0;
};

util.inherits(SymbioticObjectErrorMessage, BaseMessage);

SymbioticObjectErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_SymbioticObjectErrorMessage(output);
};

SymbioticObjectErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SymbioticObjectErrorMessage(input);
};

SymbioticObjectErrorMessage.prototype.serializeAs_SymbioticObjectErrorMessage = function(param1) {
  this.serializeAs_ObjectErrorMessage(param1);
  param1.writeByte(this.errorCode);
};

SymbioticObjectErrorMessage.prototype.deserializeAs_SymbioticObjectErrorMessage = function(param1) {
  this.deserialize(param1);
  this.errorCode = param1.readByte();
};

SymbioticObjectErrorMessage.prototype.getMessageId = function() {
  return 6526;
};

SymbioticObjectErrorMessage.prototype.getClassName = function() {
  return 'SymbioticObjectErrorMessage';
};

module.exports.id = 6526;
module.exports.class = SymbioticObjectErrorMessage;
module.exports.getInstance = function() {
  return new SymbioticObjectErrorMessage();
};