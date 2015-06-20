var BaseMessage = require('./decrafted-item-stack-info.js').class,
  util = require('util');

var DecraftedItemStackInfo = function() {
  this.objectUID = 0;
  this.bonusMin = 0;
  this.bonusMax = 0;
  this.runesId = [];
  this.runesQty = [];
};

util.inherits(DecraftedItemStackInfo, BaseMessage);

DecraftedItemStackInfo.prototype.serialize = function(output) {
  this.serializeAs_DecraftedItemStackInfo(output);
};

DecraftedItemStackInfo.prototype.deserialize = function(input) {
  this.deserializeAs_DecraftedItemStackInfo(input);
};

DecraftedItemStackInfo.prototype.serializeAs_DecraftedItemStackInfo = function(param1) {
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
  } else {
    param1.writeVarInt(this.objectUID);
    param1.writeFloat(this.bonusMin);
    param1.writeFloat(this.bonusMax);
    param1.writeShort(this.runesId.length);
    var _loc2_ = 0;
    while (_loc2_ < this.runesId.length) {
      if (this.runesId[_loc2_] < 0) {
        throw new Error("Forbidden value (" + this.runesId[_loc2_] + ") on element 4 (starting at 1) of runesId.");
      } else {
        param1.writeVarShort(this.runesId[_loc2_]);
        _loc2_++;
        continue;
      }
    }
    param1.writeShort(this.runesQty.length);
    var _loc3_ = 0;
    while (_loc3_ < this.runesQty.length) {
      if (this.runesQty[_loc3_] < 0) {
        throw new Error("Forbidden value (" + this.runesQty[_loc3_] + ") on element 5 (starting at 1) of runesQty.");
      } else {
        param1.writeVarInt(this.runesQty[_loc3_]);
        _loc3_++;
        continue;
      }
    }
    return;
  }
};

DecraftedItemStackInfo.prototype.deserializeAs_DecraftedItemStackInfo = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = 0;
  this.objectUID = param1.readVarUhInt();
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element of DecraftedItemStackInfo.objectUID.");
  } else {
    this.bonusMin = param1.readFloat();
    this.bonusMax = param1.readFloat();
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc6_ = param1.readVarUhShort();
      if (_loc6_ < 0) {
        throw new Error("Forbidden value (" + _loc6_ + ") on elements of runesId.");
      } else {
        this.runesId.push(_loc6_);
        _loc3_++;
        continue;
      }
    }
    var _loc4_ = param1.readUnsignedShort();
    var _loc5_ = 0;
    while (_loc5_ < _loc4_) {
      _loc7_ = param1.readVarUhInt();
      if (_loc7_ < 0) {
        throw new Error("Forbidden value (" + _loc7_ + ") on elements of runesQty.");
      } else {
        this.runesQty.push(_loc7_);
        _loc5_++;
        continue;
      }
    }
    return;
  }
};

DecraftedItemStackInfo.prototype.getTypeId = function() {
  return 481;
};

DecraftedItemStackInfo.prototype.getClassName = function() {
  return 'DecraftedItemStackInfo';
};

module.exports.id = 481;
module.exports.class = DecraftedItemStackInfo;
module.exports.getInstance = function() {
  return new DecraftedItemStackInfo();
};