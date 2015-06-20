var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectsAddedMessage = function() {
  this.object = [];
};

util.inherits(ExchangeObjectsAddedMessage, BaseMessage);

ExchangeObjectsAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectsAddedMessage(output);
};

ExchangeObjectsAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectsAddedMessage(input);
};

ExchangeObjectsAddedMessage.prototype.serializeAs_ExchangeObjectsAddedMessage = function(output) {
  this.serializeAs_ExchangeObjectMessage(param1);
  param1.writeShort(this.object.length);
  var _loc2_ = 0;
  while (_loc2_ < this.object.length) {
    (this.object[_loc2_]).serializeAs_ObjectItem(param1);
    _loc2_++;
  }
};

ExchangeObjectsAddedMessage.prototype.deserializeAs_ExchangeObjectsAddedMessage = function(input) {
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

ExchangeObjectsAddedMessage.prototype.getMessageId = function() {
  return 6535;
};

ExchangeObjectsAddedMessage.prototype.getClassName = function() {
  return 'ExchangeObjectsAddedMessage';
};

module.exports.id = 6535;
module.exports.class = ExchangeObjectsAddedMessage;