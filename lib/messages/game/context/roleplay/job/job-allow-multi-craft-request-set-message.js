var d2com = require('d2com'),
  BaseMessage = require('./job-allow-multi-craft-request-set-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var JobAllowMultiCraftRequestSetMessage = function() {
  this.enabled = false;
};

util.inherits(JobAllowMultiCraftRequestSetMessage, BaseMessage);

JobAllowMultiCraftRequestSetMessage.prototype.serialize = function(output) {
  this.serializeAs_JobAllowMultiCraftRequestSetMessage(output);
};

JobAllowMultiCraftRequestSetMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobAllowMultiCraftRequestSetMessage(input);
};

JobAllowMultiCraftRequestSetMessage.prototype.serializeAs_JobAllowMultiCraftRequestSetMessage = function(param1) {
  param1.writeBoolean(this.enabled);
};

JobAllowMultiCraftRequestSetMessage.prototype.deserializeAs_JobAllowMultiCraftRequestSetMessage = function(param1) {
  this.enabled = param1.readBoolean();
};

JobAllowMultiCraftRequestSetMessage.prototype.getMessageId = function() {
  return 5749;
};

JobAllowMultiCraftRequestSetMessage.prototype.getClassName = function() {
  return 'JobAllowMultiCraftRequestSetMessage';
};

module.exports.id = 5749;
module.exports.class = JobAllowMultiCraftRequestSetMessage;
module.exports.getInstance = function() {
  return new JobAllowMultiCraftRequestSetMessage();
};