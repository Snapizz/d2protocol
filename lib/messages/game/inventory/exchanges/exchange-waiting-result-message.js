var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ExchangeWaitingResultMessage = function() {
  this.bwait = false;
};

util.inherits(ExchangeWaitingResultMessage, BaseMessage);

ExchangeWaitingResultMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeWaitingResultMessage(output);
};

ExchangeWaitingResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeWaitingResultMessage(input);
};

ExchangeWaitingResultMessage.prototype.serializeAs_ExchangeWaitingResultMessage = function(param1) {
  param1.writeBoolean(this.bwait);
};

ExchangeWaitingResultMessage.prototype.deserializeAs_ExchangeWaitingResultMessage = function(param1) {
  this.bwait = param1.readBoolean();
};

ExchangeWaitingResultMessage.prototype.getMessageId = function() {
  return 5786;
};

ExchangeWaitingResultMessage.prototype.getClassName = function() {
  return 'ExchangeWaitingResultMessage';
};

module.exports.id = 5786;
module.exports.class = ExchangeWaitingResultMessage;
module.exports.getInstance = function() {
  return new ExchangeWaitingResultMessage();
};