var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeRequestOnShopStockMessage = function() {

};

util.inherits(ExchangeRequestOnShopStockMessage, BaseMessage);

ExchangeRequestOnShopStockMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeRequestOnShopStockMessage(output);
};

ExchangeRequestOnShopStockMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeRequestOnShopStockMessage(input);
};

ExchangeRequestOnShopStockMessage.prototype.serializeAs_ExchangeRequestOnShopStockMessage = function(param1) {

};

ExchangeRequestOnShopStockMessage.prototype.deserializeAs_ExchangeRequestOnShopStockMessage = function(param1) {

};

ExchangeRequestOnShopStockMessage.prototype.getMessageId = function() {
  return 5753;
};

ExchangeRequestOnShopStockMessage.prototype.getClassName = function() {
  return 'ExchangeRequestOnShopStockMessage';
};

module.exports.id = 5753;
module.exports.class = ExchangeRequestOnShopStockMessage;
module.exports.getInstance = function() {
  return new ExchangeRequestOnShopStockMessage();
};