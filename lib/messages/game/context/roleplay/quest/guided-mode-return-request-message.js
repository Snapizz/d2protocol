var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuidedModeReturnRequestMessage = function() {

};

util.inherits(GuidedModeReturnRequestMessage, BaseMessage);

GuidedModeReturnRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GuidedModeReturnRequestMessage(output);
};

GuidedModeReturnRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuidedModeReturnRequestMessage(input);
};

GuidedModeReturnRequestMessage.prototype.serializeAs_GuidedModeReturnRequestMessage = function(param1) {

};

GuidedModeReturnRequestMessage.prototype.deserializeAs_GuidedModeReturnRequestMessage = function(param1) {

};

GuidedModeReturnRequestMessage.prototype.getMessageId = function() {
  return 6088;
};

GuidedModeReturnRequestMessage.prototype.getClassName = function() {
  return 'GuidedModeReturnRequestMessage';
};

module.exports.id = 6088;
module.exports.class = GuidedModeReturnRequestMessage;