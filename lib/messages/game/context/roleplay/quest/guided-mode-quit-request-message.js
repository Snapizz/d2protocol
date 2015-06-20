var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GuidedModeQuitRequestMessage = function() {

};

util.inherits(GuidedModeQuitRequestMessage, BaseMessage);

GuidedModeQuitRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GuidedModeQuitRequestMessage(output);
};

GuidedModeQuitRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuidedModeQuitRequestMessage(input);
};

GuidedModeQuitRequestMessage.prototype.serializeAs_GuidedModeQuitRequestMessage = function(param1) {

};

GuidedModeQuitRequestMessage.prototype.deserializeAs_GuidedModeQuitRequestMessage = function(param1) {

};

GuidedModeQuitRequestMessage.prototype.getMessageId = function() {
  return 6092;
};

GuidedModeQuitRequestMessage.prototype.getClassName = function() {
  return 'GuidedModeQuitRequestMessage';
};

module.exports.id = 6092;
module.exports.class = GuidedModeQuitRequestMessage;
module.exports.getInstance = function() {
  return new GuidedModeQuitRequestMessage();
};