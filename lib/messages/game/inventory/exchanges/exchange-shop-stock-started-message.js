var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeShopStockStartedMessage = function() {
  this.objectsInfos = [];
};

util.inherits(ExchangeShopStockStartedMessage, BaseMessage);

ExchangeShopStockStartedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeShopStockStartedMessage(output);
};

ExchangeShopStockStartedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeShopStockStartedMessage(input);
};

ExchangeShopStockStartedMessage.prototype.serializeAs_ExchangeShopStockStartedMessage = function(output) {
  param1.writeShort(this.objectsInfos.length);
  var _loc2_ = 0;
  while (_loc2_ < this.objectsInfos.length) {
    (this.objectsInfos[_loc2_]).serializeAs_ObjectItemToSell(param1);
    _loc2_++;
  }
};

ExchangeShopStockStartedMessage.prototype.deserializeAs_ExchangeShopStockStartedMessage = function(input) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new ObjectItemToSell();
    _loc4_.deserialize(param1);
    this.objectsInfos.push(_loc4_);
    _loc3_++;
  }
};

ExchangeShopStockStartedMessage.prototype.getMessageId = function() {
  return 5910;
};

ExchangeShopStockStartedMessage.prototype.getClassName = function() {
  return 'ExchangeShopStockStartedMessage';
};

module.exports.id = 5910;
module.exports.class = ExchangeShopStockStartedMessage;