var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeShopStockMovementUpdatedMessage = function() {
  this.objectInfo;
};

util.inherits(ExchangeShopStockMovementUpdatedMessage, BaseMessage);

ExchangeShopStockMovementUpdatedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeShopStockMovementUpdatedMessage(output);
};

ExchangeShopStockMovementUpdatedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeShopStockMovementUpdatedMessage(input);
};

ExchangeShopStockMovementUpdatedMessage.prototype.serializeAs_ExchangeShopStockMovementUpdatedMessage = function(param1) {
  this.objectInfo.serializeAs_ObjectItemToSell(param1);
};

ExchangeShopStockMovementUpdatedMessage.prototype.deserializeAs_ExchangeShopStockMovementUpdatedMessage = function(param1) {
  this.objectInfo = new ObjectItemToSell();
  this.objectInfo.deserialize(param1);
};

ExchangeShopStockMovementUpdatedMessage.prototype.getMessageId = function() {
  return 5909;
};

ExchangeShopStockMovementUpdatedMessage.prototype.getClassName = function() {
  return 'ExchangeShopStockMovementUpdatedMessage';
};

module.exports.id = 5909;
module.exports.class = ExchangeShopStockMovementUpdatedMessage;