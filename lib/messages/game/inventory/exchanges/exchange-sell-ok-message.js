var d2com = require('d2com'),
  BaseMessage = require('./exchange-sell-ok-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeSellOkMessage = function() {

};

util.inherits(ExchangeSellOkMessage, BaseMessage);

ExchangeSellOkMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeSellOkMessage(output);
};

ExchangeSellOkMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeSellOkMessage(input);
};

ExchangeSellOkMessage.prototype.serializeAs_ExchangeSellOkMessage = function(param1) {

};

ExchangeSellOkMessage.prototype.deserializeAs_ExchangeSellOkMessage = function(param1) {

};

ExchangeSellOkMessage.prototype.getMessageId = function() {
  return 5792;
};

ExchangeSellOkMessage.prototype.getClassName = function() {
  return 'ExchangeSellOkMessage';
};

module.exports.id = 5792;
module.exports.class = ExchangeSellOkMessage;
module.exports.getInstance = function() {
  return new ExchangeSellOkMessage();
};