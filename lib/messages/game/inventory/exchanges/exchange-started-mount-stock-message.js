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

ExchangeStartedMountStockMessage.prototype.serializeAs_ExchangeStartedMountStockMessage = function(output) {
  output.writeShort(this.objectsInfos.length);
  var _i1 = 0;
  while (_i1 < this.objectsInfos.length) {
    (this.objectsInfos[_i1]).serializeAs_ObjectItem(output);
    _i1++;
  };
};

ExchangeStartedMountStockMessage.prototype.deserializeAs_ExchangeStartedMountStockMessage = function(input) {
  var _item1;
  var _objectsInfosLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _objectsInfosLen) {
    _item1 = new ObjectItem();
    _item1.deserialize(input);
    this.objectsInfos.push(_item1);
    _i1++;
  };
};

ExchangeStartedMountStockMessage.prototype.getMessageId = function() {
  return 5984;
};

ExchangeStartedMountStockMessage.prototype.getClassName = function() {
  return 'ExchangeStartedMountStockMessage';
};

module.exports.id = 5984;
module.exports.class = ExchangeStartedMountStockMessage;