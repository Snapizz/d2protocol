var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartedMountStockMessage = function() {
  this.objectsInfos = [];
};

util.inherits(ExchangeStartedMountStockMessage, BaseMessage);

ExchangeStartedMountStockMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartedMountStockMessage(output);
};

ExchangeStartedMountStockMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartedMountStockMessage(input);
};

ExchangeStartedMountStockMessage.prototype.serializeAs_ExchangeStartedMountStockMessage = function(param1) {
  param1.writeShort(this.objectsInfos.length);
  var _loc2_ = 0;
  while (_loc2_ < this.objectsInfos.length) {
    (this.objectsInfos[_loc2_]).serializeAs_ObjectItem(param1);
    _loc2_++;
  }
};

ExchangeStartedMountStockMessage.prototype.deserializeAs_ExchangeStartedMountStockMessage = function(param1) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new ObjectItem();
    _loc4_.deserialize(param1);
    this.objectsInfos.push(_loc4_);
    _loc3_++;
  }
};

ExchangeStartedMountStockMessage.prototype.getMessageId = function() {
  return 5984;
};

ExchangeStartedMountStockMessage.prototype.getClassName = function() {
  return 'ExchangeStartedMountStockMessage';
};

module.exports.id = 5984;
module.exports.class = ExchangeStartedMountStockMessage;