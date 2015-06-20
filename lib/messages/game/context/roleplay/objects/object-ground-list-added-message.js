var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ObjectGroundListAddedMessage = function() {
  this.cells = [];
  this.referenceIds = [];
};

util.inherits(ObjectGroundListAddedMessage, BaseMessage);

ObjectGroundListAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectGroundListAddedMessage(output);
};

ObjectGroundListAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectGroundListAddedMessage(input);
};

ObjectGroundListAddedMessage.prototype.serializeAs_ObjectGroundListAddedMessage = function(param1) {
  param1.writeShort(this.cells.length);
  var _loc2_ = 0;
  while (_loc2_ < this.cells.length) {
    if (this.cells[_loc2_] < 0 || this.cells[_loc2_] > 559) {
      throw new Error("Forbidden value (" + this.cells[_loc2_] + ") on element 1 (starting at 1) of cells.");
    } else {
      param1.writeVarShort(this.cells[_loc2_]);
      _loc2_++;
      continue;
    }
  }
  param1.writeShort(this.referenceIds.length);
  var _loc3_ = 0;
  while (_loc3_ < this.referenceIds.length) {
    if (this.referenceIds[_loc3_] < 0) {
      throw new Error("Forbidden value (" + this.referenceIds[_loc3_] + ") on element 2 (starting at 1) of referenceIds.");
    } else {
      param1.writeVarShort(this.referenceIds[_loc3_]);
      _loc3_++;
      continue;
    }
  }
};

ObjectGroundListAddedMessage.prototype.deserializeAs_ObjectGroundListAddedMessage = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc6_ = param1.readVarUhShort();
    if (_loc6_ < 0 || _loc6_ > 559) {
      throw new Error("Forbidden value (" + _loc6_ + ") on elements of cells.");
    } else {
      this.cells.push(_loc6_);
      _loc3_++;
      continue;
    }
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc7_ = param1.readVarUhShort();
    if (_loc7_ < 0) {
      throw new Error("Forbidden value (" + _loc7_ + ") on elements of referenceIds.");
    } else {
      this.referenceIds.push(_loc7_);
      _loc5_++;
      continue;
    }
  }
};

ObjectGroundListAddedMessage.prototype.getMessageId = function() {
  return 5925;
};

ObjectGroundListAddedMessage.prototype.getClassName = function() {
  return 'ObjectGroundListAddedMessage';
};

module.exports.id = 5925;
module.exports.class = ObjectGroundListAddedMessage;
module.exports.getInstance = function() {
  return new ObjectGroundListAddedMessage();
};