var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeAcceptMessage = function() {

};

util.inherits(ExchangeAcceptMessage, BaseMessage);

ExchangeAcceptMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeAcceptMessage(output);
};

ExchangeAcceptMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeAcceptMessage(input);
};

ExchangeAcceptMessage.prototype.serializeAs_ExchangeAcceptMessage = function(output) {

};

ExchangeAcceptMessage.prototype.deserializeAs_ExchangeAcceptMessage = function(input) {

};

ExchangeAcceptMessage.prototype.getMessageId = function() {
  return 5508;
};

ExchangeAcceptMessage.prototype.getClassName = function() {
  return 'ExchangeAcceptMessage';
};

module.exports.id = 5508;
module.exports.class = ExchangeAcceptMessage;