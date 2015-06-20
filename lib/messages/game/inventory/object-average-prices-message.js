var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ObjectAveragePricesMessage = function() {
  this.ids = [];
  this.avgPrices = [];
};

util.inherits(ObjectAveragePricesMessage, BaseMessage);

ObjectAveragePricesMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectAveragePricesMessage(output);
};

ObjectAveragePricesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectAveragePricesMessage(input);
};

ObjectAveragePricesMessage.prototype.serializeAs_ObjectAveragePricesMessage = function(param1) {
  param1.writeShort(this.ids.length);
  var _loc2_ = 0;
  while (_loc2_ < this.ids.length) {
    if (this.ids[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.ids[_loc2_] + ") on element 1 (starting at 1) of ids.");
    } else {
      param1.writeVarShort(this.ids[_loc2_]);
      _loc2_++;
      continue;
    }
  }
  param1.writeShort(this.avgPrices.length);
  var _loc3_ = 0;
  while (_loc3_ < this.avgPrices.length) {
    if (this.avgPrices[_loc3_] < 0) {
      throw new Error("Forbidden value (" + this.avgPrices[_loc3_] + ") on element 2 (starting at 1) of avgPrices.");
    } else {
      param1.writeVarInt(this.avgPrices[_loc3_]);
      _loc3_++;
      continue;
    }
  }
};

ObjectAveragePricesMessage.prototype.deserializeAs_ObjectAveragePricesMessage = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc6_ = param1.readVarUhShort();
    if (_loc6_ < 0) {
      throw new Error("Forbidden value (" + _loc6_ + ") on elements of ids.");
    } else {
      this.ids.push(_loc6_);
      _loc3_++;
      continue;
    }
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc7_ = param1.readVarUhInt();
    if (_loc7_ < 0) {
      throw new Error("Forbidden value (" + _loc7_ + ") on elements of avgPrices.");
    } else {
      this.avgPrices.push(_loc7_);
      _loc5_++;
      continue;
    }
  }
};

ObjectAveragePricesMessage.prototype.getMessageId = function() {
  return 6335;
};

ObjectAveragePricesMessage.prototype.getClassName = function() {
  return 'ObjectAveragePricesMessage';
};

module.exports.id = 6335;
module.exports.class = ObjectAveragePricesMessage;
module.exports.getInstance = function() {
  return new ObjectAveragePricesMessage();
};