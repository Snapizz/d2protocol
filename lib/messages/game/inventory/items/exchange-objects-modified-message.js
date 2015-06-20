var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectsModifiedMessage = function() {
  this.object = [];
};

util.inherits(ExchangeObjectsModifiedMessage, BaseMessage);

ExchangeObjectsModifiedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectsModifiedMessage(output);
};

ExchangeObjectsModifiedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectsModifiedMessage(input);
};

ExchangeObjectsModifiedMessage.prototype.serializeAs_ExchangeObjectsModifiedMessage = function(output) {
  this.serializeAs_ExchangeObjectMessage(param1);
  param1.writeShort(this.object.length);
  var _loc2_ = 0;
  while (_loc2_ < this.object.length) {
    (this.object[_loc2_]).serializeAs_ObjectItem(param1);
    _loc2_++;
  }
};

ExchangeObjectsModifiedMessage.prototype.deserializeAs_ExchangeObjectsModifiedMessage = function(input) {
  var _loc4_ = null;
  this.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new ObjectItem();
    _loc4_.deserialize(param1);
    this.object.push(_loc4_);
    _loc3_++;
  }
};

ExchangeObjectsModifiedMessage.prototype.getMessageId = function() {
  return 6533;
};

ExchangeObjectsModifiedMessage.prototype.getClassName = function() {
  return 'ExchangeObjectsModifiedMessage';
};

module.exports.id = 6533;
module.exports.class = ExchangeObjectsModifiedMessage;