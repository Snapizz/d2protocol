var d2com = require('d2com'),
  BaseMessage = require('./exchange-objects-removed-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeObjectsRemovedMessage = function() {
  this.objectUID = [];
};

util.inherits(ExchangeObjectsRemovedMessage, BaseMessage);

ExchangeObjectsRemovedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectsRemovedMessage(output);
};

ExchangeObjectsRemovedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectsRemovedMessage(input);
};

ExchangeObjectsRemovedMessage.prototype.serializeAs_ExchangeObjectsRemovedMessage = function(param1) {
  this.serializeAs_ExchangeObjectMessage(param1);
  param1.writeShort(this.objectUID.length);
  var _loc2_ = 0;
  while (_loc2_ < this.objectUID.length) {
    if (this.objectUID[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.objectUID[_loc2_] + ") on element 1 (starting at 1) of objectUID.");
    } else {
      param1.writeVarInt(this.objectUID[_loc2_]);
      _loc2_++;
      continue;
    }
  }
};

ExchangeObjectsRemovedMessage.prototype.deserializeAs_ExchangeObjectsRemovedMessage = function(param1) {
  var _loc4_ = 0;
  this.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readVarUhInt();
    if (_loc4_ < 0) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of objectUID.");
    } else {
      this.objectUID.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
};

ExchangeObjectsRemovedMessage.prototype.getMessageId = function() {
  return 6532;
};

ExchangeObjectsRemovedMessage.prototype.getClassName = function() {
  return 'ExchangeObjectsRemovedMessage';
};

module.exports.id = 6532;
module.exports.class = ExchangeObjectsRemovedMessage;
module.exports.getInstance = function() {
  return new ExchangeObjectsRemovedMessage();
};