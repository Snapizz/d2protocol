var d2com = require('d2com'),
  BaseMessage = require('./symbiotic-object-associated-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var WrapperObjectAssociatedMessage = function() {

};

util.inherits(WrapperObjectAssociatedMessage, BaseMessage);

WrapperObjectAssociatedMessage.prototype.serialize = function(output) {
  this.serializeAs_WrapperObjectAssociatedMessage(output);
};

WrapperObjectAssociatedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_WrapperObjectAssociatedMessage(input);
};

WrapperObjectAssociatedMessage.prototype.serializeAs_WrapperObjectAssociatedMessage = function(output) {
  this.serializeAs_SymbioticObjectAssociatedMessage(output);
};

WrapperObjectAssociatedMessage.prototype.deserializeAs_WrapperObjectAssociatedMessage = function(input) {
  this.deserialize(input);
};

WrapperObjectAssociatedMessage.prototype.getMessageId = function() {
  return 6523;
};

WrapperObjectAssociatedMessage.prototype.getClassName = function() {
  return 'WrapperObjectAssociatedMessage';
};

module.exports.id = 6523;
module.exports.class = WrapperObjectAssociatedMessage;