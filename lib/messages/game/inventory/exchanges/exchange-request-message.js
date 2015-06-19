var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeRequestMessage = function() {
  this.exchangeType = 0;
};

util.inherits(ExchangeRequestMessage, BaseMessage);

ExchangeRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeRequestMessage(output);
};

ExchangeRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeRequestMessage(input);
};

ExchangeRequestMessage.prototype.serializeAs_ExchangeRequestMessage = function(output) {
  output.writeByte(this.exchangeType);
};

ExchangeRequestMessage.prototype.deserializeAs_ExchangeRequestMessage = function(input) {
  this.exchangeType = input.readByte();
};

ExchangeRequestMessage.prototype.getMessageId = function() {
  return 5505;
};

ExchangeRequestMessage.prototype.getClassName = function() {
  return 'ExchangeRequestMessage';
};

module.exports.id = 5505;
module.exports.class = ExchangeRequestMessage;