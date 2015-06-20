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
  output.writeShort(this.objectsInfos.length);
  var _i1 = 0;
  while (_i1 < this.objectsInfos.length) {
    (this.objectsInfos[_i1]).serializeAs_ObjectItemToSell(output);
    _i1++;
  };
};

ExchangeShopStockStartedMessage.prototype.deserializeAs_ExchangeShopStockStartedMessage = function(input) {
  var _item1;
  var _objectsInfosLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _objectsInfosLen) {
    _item1 = new ObjectItemToSell();
    _item1.deserialize(input);
    this.objectsInfos.push(_item1);
    _i1++;
  };
};

ExchangeShopStockStartedMessage.prototype.getMessageId = function() {
  return 5910;
};

ExchangeShopStockStartedMessage.prototype.getClassName = function() {
  return 'ExchangeShopStockStartedMessage';
};

module.exports.id = 5910;
module.exports.class = ExchangeShopStockStartedMessage;