var d2com = require('d2com'),
  BaseMessage = require('./object-error-message.js').class,
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

SymbioticObjectErrorMessage.prototype.serializeAs_SymbioticObjectErrorMessage = function(output) {
  this.serializeAs_ObjectErrorMessage(output);
  output.writeByte(this.errorCode);
};

SymbioticObjectErrorMessage.prototype.deserializeAs_SymbioticObjectErrorMessage = function(input) {
  this.deserialize(input);
  this.errorCode = input.readByte();
};

SymbioticObjectErrorMessage.prototype.getMessageId = function() {
  return 6526;
};

SymbioticObjectErrorMessage.prototype.getClassName = function() {
  return 'SymbioticObjectErrorMessage';
};

module.exports.id = 6526;
module.exports.class = SymbioticObjectErrorMessage;