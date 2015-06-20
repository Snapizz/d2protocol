var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartOkRunesTradeMessage = function() {

};

util.inherits(ExchangeStartOkRunesTradeMessage, BaseMessage);

ExchangeStartOkRunesTradeMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartOkRunesTradeMessage(output);
};

ExchangeStartOkRunesTradeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartOkRunesTradeMessage(input);
};

ExchangeStartOkRunesTradeMessage.prototype.serializeAs_ExchangeStartOkRunesTradeMessage = function(param1) {

};

ExchangeStartOkRunesTradeMessage.prototype.deserializeAs_ExchangeStartOkRunesTradeMessage = function(param1) {

};

ExchangeStartOkRunesTradeMessage.prototype.getMessageId = function() {
  return 6567;
};

ExchangeStartOkRunesTradeMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkRunesTradeMessage';
};

module.exports.id = 6567;
module.exports.class = ExchangeStartOkRunesTradeMessage;