var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ExchangeBidHouseInListAddedMessage = function() {
  this.itemUID = 0;
  this.objGenericId = 0;
  this.effects = [];
  this.prices = [];
};

util.inherits(ExchangeBidHouseInListAddedMessage, BaseMessage);

ExchangeBidHouseInListAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBidHouseInListAddedMessage(output);
};

ExchangeBidHouseInListAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBidHouseInListAddedMessage(input);
};

ExchangeBidHouseInListAddedMessage.prototype.serializeAs_ExchangeBidHouseInListAddedMessage = function(param1) {
  param1.writeInt(this.itemUID);
  param1.writeInt(this.objGenericId);
  param1.writeShort(this.effects.length);
  var _loc2_ = 0;
  while (_loc2_ < this.effects.length) {
    param1.writeShort((this.effects[_loc2_]).getTypeId());
    (this.effects[_loc2_]).serialize(param1);
    _loc2_++;
  }
  param1.writeShort(this.prices.length);
  var _loc3_ = 0;
  while (_loc3_ < this.prices.length) {
    if (this.prices[_loc3_] < 0) {
      throw new Error("Forbidden value (" + this.prices[_loc3_] + ") on element 4 (starting at 1) of prices.");
    } else {
      param1.writeVarInt(this.prices[_loc3_]);
      _loc3_++;
      continue;
    }
  }
};

ExchangeBidHouseInListAddedMessage.prototype.deserializeAs_ExchangeBidHouseInListAddedMessage = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = null;
  var _loc8_ = 0;
  this.itemUID = param1.readInt();
  this.objGenericId = param1.readInt();
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc6_ = param1.readUnsignedShort();
    _loc7_ = ProtocolTypeManager.getInstance(ObjectEffect, _loc6_);
    _loc7_.deserialize(param1);
    this.effects.push(_loc7_);
    _loc3_++;
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc8_ = param1.readVarUhInt();
    if (_loc8_ < 0) {
      throw new Error("Forbidden value (" + _loc8_ + ") on elements of prices.");
    } else {
      this.prices.push(_loc8_);
      _loc5_++;
      continue;
    }
  }
};

ExchangeBidHouseInListAddedMessage.prototype.getMessageId = function() {
  return 5949;
};

ExchangeBidHouseInListAddedMessage.prototype.getClassName = function() {
  return 'ExchangeBidHouseInListAddedMessage';
};

module.exports.id = 5949;
module.exports.class = ExchangeBidHouseInListAddedMessage;
module.exports.getInstance = function() {
  return new ExchangeBidHouseInListAddedMessage();
};