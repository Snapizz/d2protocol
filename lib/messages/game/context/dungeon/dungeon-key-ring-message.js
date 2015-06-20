var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var DungeonKeyRingMessage = function() {
  this.availables = [];
  this.unavailables = [];
};

util.inherits(DungeonKeyRingMessage, BaseMessage);

DungeonKeyRingMessage.prototype.serialize = function(output) {
  this.serializeAs_DungeonKeyRingMessage(output);
};

DungeonKeyRingMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonKeyRingMessage(input);
};

DungeonKeyRingMessage.prototype.serializeAs_DungeonKeyRingMessage = function(param1) {
  param1.writeShort(this.availables.length);
  var _loc2_ = 0;
  while (_loc2_ < this.availables.length) {
    if (this.availables[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.availables[_loc2_] + ") on element 1 (starting at 1) of availables.");
    } else {
      param1.writeVarShort(this.availables[_loc2_]);
      _loc2_++;
      continue;
    }
  }
  param1.writeShort(this.unavailables.length);
  var _loc3_ = 0;
  while (_loc3_ < this.unavailables.length) {
    if (this.unavailables[_loc3_] < 0) {
      throw new Error("Forbidden value (" + this.unavailables[_loc3_] + ") on element 2 (starting at 1) of unavailables.");
    } else {
      param1.writeVarShort(this.unavailables[_loc3_]);
      _loc3_++;
      continue;
    }
  }
};

DungeonKeyRingMessage.prototype.deserializeAs_DungeonKeyRingMessage = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc6_ = param1.readVarUhShort();
    if (_loc6_ < 0) {
      throw new Error("Forbidden value (" + _loc6_ + ") on elements of availables.");
    } else {
      this.availables.push(_loc6_);
      _loc3_++;
      continue;
    }
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc7_ = param1.readVarUhShort();
    if (_loc7_ < 0) {
      throw new Error("Forbidden value (" + _loc7_ + ") on elements of unavailables.");
    } else {
      this.unavailables.push(_loc7_);
      _loc5_++;
      continue;
    }
  }
};

DungeonKeyRingMessage.prototype.getMessageId = function() {
  return 6299;
};

DungeonKeyRingMessage.prototype.getClassName = function() {
  return 'DungeonKeyRingMessage';
};

module.exports.id = 6299;
module.exports.class = DungeonKeyRingMessage;
module.exports.getInstance = function() {
  return new DungeonKeyRingMessage();
};