var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

ExchangeRequestMessage.prototype.serializeAs_ExchangeRequestMessage = function(param1) {
  param1.writeByte(this.exchangeType);
};

ExchangeRequestMessage.prototype.deserializeAs_ExchangeRequestMessage = function(param1) {
  this.exchangeType = param1.readByte();
};

ExchangeRequestMessage.prototype.getMessageId = function() {
  return 5505;
};

ExchangeRequestMessage.prototype.getClassName = function() {
  return 'ExchangeRequestMessage';
};

module.exports.id = 5505;
module.exports.class = ExchangeRequestMessage;
module.exports.getInstance = function() {
  return new ExchangeRequestMessage();
};