var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var JobAllowMultiCraftRequestMessage = function() {
  this.enabled = false;
};

util.inherits(JobAllowMultiCraftRequestMessage, BaseMessage);

JobAllowMultiCraftRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_JobAllowMultiCraftRequestMessage(output);
};

JobAllowMultiCraftRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobAllowMultiCraftRequestMessage(input);
};

JobAllowMultiCraftRequestMessage.prototype.serializeAs_JobAllowMultiCraftRequestMessage = function(output) {
  param1.writeBoolean(this.enabled);
};

JobAllowMultiCraftRequestMessage.prototype.deserializeAs_JobAllowMultiCraftRequestMessage = function(input) {
  this.enabled = param1.readBoolean();
};

JobAllowMultiCraftRequestMessage.prototype.getMessageId = function() {
  return 5748;
};

JobAllowMultiCraftRequestMessage.prototype.getClassName = function() {
  return 'JobAllowMultiCraftRequestMessage';
};

module.exports.id = 5748;
module.exports.class = JobAllowMultiCraftRequestMessage;