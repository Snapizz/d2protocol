var d2com = require('d2com'),
  BaseMessage = require('./exchange-shop-stock-multi-movement-updated-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeShopStockMultiMovementUpdatedMessage = function() {
  this.objectInfoList = [];
};

util.inherits(ExchangeShopStockMultiMovementUpdatedMessage, BaseMessage);

ExchangeShopStockMultiMovementUpdatedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeShopStockMultiMovementUpdatedMessage(output);
};

ExchangeShopStockMultiMovementUpdatedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeShopStockMultiMovementUpdatedMessage(input);
};

ExchangeShopStockMultiMovementUpdatedMessage.prototype.serializeAs_ExchangeShopStockMultiMovementUpdatedMessage = function(param1) {
  param1.writeShort(this.objectInfoList.length);
  var _loc2_ = 0;
  while (_loc2_ < this.objectInfoList.length) {
    (this.objectInfoList[_loc2_]).serializeAs_ObjectItemToSell(param1);
    _loc2_++;
  }
};

ExchangeShopStockMultiMovementUpdatedMessage.prototype.deserializeAs_ExchangeShopStockMultiMovementUpdatedMessage = function(param1) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new ObjectItemToSell();
    _loc4_.deserialize(param1);
    this.objectInfoList.push(_loc4_);
    _loc3_++;
  }
};

ExchangeShopStockMultiMovementUpdatedMessage.prototype.getMessageId = function() {
  return 6038;
};

ExchangeShopStockMultiMovementUpdatedMessage.prototype.getClassName = function() {
  return 'ExchangeShopStockMultiMovementUpdatedMessage';
};

module.exports.id = 6038;
module.exports.class = ExchangeShopStockMultiMovementUpdatedMessage;
module.exports.getInstance = function() {
  return new ExchangeShopStockMultiMovementUpdatedMessage();
};