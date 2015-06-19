var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeShopStockMultiMovementRemovedMessage = function() {
  this.objectIdList = [];
};

util.inherits(ExchangeShopStockMultiMovementRemovedMessage, BaseMessage);

ExchangeShopStockMultiMovementRemovedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeShopStockMultiMovementRemovedMessage(output);
};

ExchangeShopStockMultiMovementRemovedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeShopStockMultiMovementRemovedMessage(input);
};

ExchangeShopStockMultiMovementRemovedMessage.prototype.serializeAs_ExchangeShopStockMultiMovementRemovedMessage = function(output) {
  output.writeShort(this.objectIdList.length);
  var _i1;
  while (_i1 < this.objectIdList.length) {
    if (this.objectIdList[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.objectIdList[_i1]) + ") on element 1 (starting at 1) of objectIdList.")));
    };
    output.writeVarInt(this.objectIdList[_i1]);
    _i1++;
  };
};

ExchangeShopStockMultiMovementRemovedMessage.prototype.deserializeAs_ExchangeShopStockMultiMovementRemovedMessage = function(input) {
  var _val1;
  var _objectIdListLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _objectIdListLen) {
    _val1 = input.readVarUhInt();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of objectIdList.")));
    };
    this.objectIdList.push(_val1);
    _i1++;
  };
};

ExchangeShopStockMultiMovementRemovedMessage.prototype.getMessageId = function() {
  return 6037;
};

ExchangeShopStockMultiMovementRemovedMessage.prototype.getClassName = function() {
  return 'ExchangeShopStockMultiMovementRemovedMessage';
};

module.exports.id = 6037;
module.exports.class = ExchangeShopStockMultiMovementRemovedMessage;