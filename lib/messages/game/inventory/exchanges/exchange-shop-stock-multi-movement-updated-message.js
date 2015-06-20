var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ExchangeShopStockMultiMovementUpdatedMessage.prototype.serializeAs_ExchangeShopStockMultiMovementUpdatedMessage = function(output) {
  output.writeShort(this.objectInfoList.length);
  var _i1 = 0;
  while (_i1 < this.objectInfoList.length) {
    (this.objectInfoList[_i1]).serializeAs_ObjectItemToSell(output);
    _i1++;
  };
};

ExchangeShopStockMultiMovementUpdatedMessage.prototype.deserializeAs_ExchangeShopStockMultiMovementUpdatedMessage = function(input) {
  var _item1;
  var _objectInfoListLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _objectInfoListLen) {
    _item1 = new ObjectItemToSell();
    _item1.deserialize(input);
    this.objectInfoList.push(_item1);
    _i1++;
  };
};

ExchangeShopStockMultiMovementUpdatedMessage.prototype.getMessageId = function() {
  return 6038;
};

ExchangeShopStockMultiMovementUpdatedMessage.prototype.getClassName = function() {
  return 'ExchangeShopStockMultiMovementUpdatedMessage';
};

module.exports.id = 6038;
module.exports.class = ExchangeShopStockMultiMovementUpdatedMessage;