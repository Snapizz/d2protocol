var d2com = require('d2com'),
  BaseMessage = require('./exchange-started-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

ExchangeStartedMessage.prototype.serializeAs_ExchangeStartedMessage = function(param1) {
  param1.writeByte(this.exchangeType);
};

ExchangeStartedMessage.prototype.deserializeAs_ExchangeStartedMessage = function(param1) {
  this.exchangeType = param1.readByte();
};

ExchangeStartedMessage.prototype.getMessageId = function() {
  return 5512;
};

ExchangeStartedMessage.prototype.getClassName = function() {
  return 'ExchangeStartedMessage';
};

module.exports.id = 5512;
module.exports.class = ExchangeStartedMessage;
module.exports.getInstance = function() {
  return new ExchangeStartedMessage();
};