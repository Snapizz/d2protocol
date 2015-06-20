var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ExchangeRequestedMessage = function() {
  this.exchangeType = 0;
};

util.inherits(ExchangeRequestedMessage, BaseMessage);

ExchangeRequestedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeRequestedMessage(output);
};

ExchangeRequestedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeRequestedMessage(input);
};

ExchangeRequestedMessage.prototype.serializeAs_ExchangeRequestedMessage = function(param1) {
  param1.writeByte(this.exchangeType);
};

ExchangeRequestedMessage.prototype.deserializeAs_ExchangeRequestedMessage = function(param1) {
  this.exchangeType = param1.readByte();
};

ExchangeRequestedMessage.prototype.getMessageId = function() {
  return 5522;
};

ExchangeRequestedMessage.prototype.getClassName = function() {
  return 'ExchangeRequestedMessage';
};

module.exports.id = 5522;
module.exports.class = ExchangeRequestedMessage;
module.exports.getInstance = function() {
  return new ExchangeRequestedMessage();
};