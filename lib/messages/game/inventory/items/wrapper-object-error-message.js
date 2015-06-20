var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

WrapperObjectErrorMessage.prototype.serializeAs_WrapperObjectErrorMessage = function(param1) {
  this.serializeAs_SymbioticObjectErrorMessage(param1);
};

WrapperObjectErrorMessage.prototype.deserializeAs_WrapperObjectErrorMessage = function(param1) {
  this.deserialize(param1);
};

WrapperObjectErrorMessage.prototype.getMessageId = function() {
  return 6529;
};

WrapperObjectErrorMessage.prototype.getClassName = function() {
  return 'WrapperObjectErrorMessage';
};

module.exports.id = 6529;
module.exports.class = WrapperObjectErrorMessage;