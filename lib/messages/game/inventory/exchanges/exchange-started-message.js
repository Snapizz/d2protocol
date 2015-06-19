var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartedMessage = function() {
  this.exchangeType = 0;
};

util.inherits(ExchangeStartedMessage, BaseMessage);

ExchangeStartedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartedMessage(output);
};

ExchangeStartedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartedMessage(input);
};

ExchangeStartedMessage.prototype.serializeAs_ExchangeStartedMessage = function(output) {
  output.writeByte(this.exchangeType);
};

ExchangeStartedMessage.prototype.deserializeAs_ExchangeStartedMessage = function(input) {
  this.exchangeType = input.readByte();
};

ExchangeStartedMessage.prototype.getMessageId = function() {
  return 5512;
};

ExchangeStartedMessage.prototype.getClassName = function() {
  return 'ExchangeStartedMessage';
};

module.exports.id = 5512;
module.exports.class = ExchangeStartedMessage;