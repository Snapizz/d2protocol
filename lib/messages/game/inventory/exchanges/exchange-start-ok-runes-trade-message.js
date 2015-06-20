var d2com = require('d2com'),
  BaseMessage = require('./exchange-start-ok-runes-trade-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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
module.exports.getInstance = function() {
  return new ExchangeStartOkRunesTradeMessage();
};