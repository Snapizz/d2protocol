var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeItemAutoCraftStopedMessage = function() {
  this.reason = 0;
};

util.inherits(ExchangeItemAutoCraftStopedMessage, BaseMessage);

ExchangeItemAutoCraftStopedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeItemAutoCraftStopedMessage(output);
};

ExchangeItemAutoCraftStopedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeItemAutoCraftStopedMessage(input);
};

ExchangeItemAutoCraftStopedMessage.prototype.serializeAs_ExchangeItemAutoCraftStopedMessage = function(output) {
  param1.writeByte(this.reason);
};

ExchangeItemAutoCraftStopedMessage.prototype.deserializeAs_ExchangeItemAutoCraftStopedMessage = function(input) {
  this.reason = param1.readByte();
};

ExchangeItemAutoCraftStopedMessage.prototype.getMessageId = function() {
  return 5810;
};

ExchangeItemAutoCraftStopedMessage.prototype.getClassName = function() {
  return 'ExchangeItemAutoCraftStopedMessage';
};

module.exports.id = 5810;
module.exports.class = ExchangeItemAutoCraftStopedMessage;