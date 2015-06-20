var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ExchangeRequestOnMountStockMessage = function() {

};

util.inherits(ExchangeRequestOnMountStockMessage, BaseMessage);

ExchangeRequestOnMountStockMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeRequestOnMountStockMessage(output);
};

ExchangeRequestOnMountStockMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeRequestOnMountStockMessage(input);
};

ExchangeRequestOnMountStockMessage.prototype.serializeAs_ExchangeRequestOnMountStockMessage = function(param1) {

};

ExchangeRequestOnMountStockMessage.prototype.deserializeAs_ExchangeRequestOnMountStockMessage = function(param1) {

};

ExchangeRequestOnMountStockMessage.prototype.getMessageId = function() {
  return 5986;
};

ExchangeRequestOnMountStockMessage.prototype.getClassName = function() {
  return 'ExchangeRequestOnMountStockMessage';
};

module.exports.id = 5986;
module.exports.class = ExchangeRequestOnMountStockMessage;
module.exports.getInstance = function() {
  return new ExchangeRequestOnMountStockMessage();
};