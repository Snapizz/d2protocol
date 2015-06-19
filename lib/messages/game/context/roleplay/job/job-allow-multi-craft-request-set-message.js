var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

JobAllowMultiCraftRequestSetMessage.prototype.serializeAs_JobAllowMultiCraftRequestSetMessage = function(output) {
  output.writeBoolean(this.enabled);
};

JobAllowMultiCraftRequestSetMessage.prototype.deserializeAs_JobAllowMultiCraftRequestSetMessage = function(input) {
  this.enabled = input.readBoolean();
};

JobAllowMultiCraftRequestSetMessage.prototype.getMessageId = function() {
  return 5749;
};

JobAllowMultiCraftRequestSetMessage.prototype.getClassName = function() {
  return 'JobAllowMultiCraftRequestSetMessage';
};

module.exports.id = 5749;
module.exports.class = JobAllowMultiCraftRequestSetMessage;