var d2com = require('d2com'),
  BaseMessage = require('./symbiotic-object-error-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var WrapperObjectErrorMessage = function() {

};

util.inherits(WrapperObjectErrorMessage, BaseMessage);

WrapperObjectErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_WrapperObjectErrorMessage(output);
};

WrapperObjectErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_WrapperObjectErrorMessage(input);
};

WrapperObjectErrorMessage.prototype.serializeAs_WrapperObjectErrorMessage = function(output) {
  this.serializeAs_SymbioticObjectErrorMessage(output);
};

WrapperObjectErrorMessage.prototype.deserializeAs_WrapperObjectErrorMessage = function(input) {
  this.deserialize(input);
};

WrapperObjectErrorMessage.prototype.getMessageId = function() {
  return 6529;
};

WrapperObjectErrorMessage.prototype.getClassName = function() {
  return 'WrapperObjectErrorMessage';
};

module.exports.id = 6529;
module.exports.class = WrapperObjectErrorMessage;