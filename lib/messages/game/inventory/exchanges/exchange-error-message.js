var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeErrorMessage = function() {
  this.errorType = 0;
};

util.inherits(ExchangeErrorMessage, BaseMessage);

ExchangeErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeErrorMessage(output);
};

ExchangeErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeErrorMessage(input);
};

ExchangeErrorMessage.prototype.serializeAs_ExchangeErrorMessage = function(output) {
  param1.writeByte(this.errorType);
};

ExchangeErrorMessage.prototype.deserializeAs_ExchangeErrorMessage = function(input) {
  this.errorType = param1.readByte();
};

ExchangeErrorMessage.prototype.getMessageId = function() {
  return 5513;
};

ExchangeErrorMessage.prototype.getClassName = function() {
  return 'ExchangeErrorMessage';
};

module.exports.id = 5513;
module.exports.class = ExchangeErrorMessage;