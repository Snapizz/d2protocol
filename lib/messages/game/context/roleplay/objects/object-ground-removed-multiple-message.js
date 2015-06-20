var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ObjectGroundRemovedMultipleMessage = function() {
  this.cells = [];
};

util.inherits(ObjectGroundRemovedMultipleMessage, BaseMessage);

ObjectGroundRemovedMultipleMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectGroundRemovedMultipleMessage(output);
};

ObjectGroundRemovedMultipleMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectGroundRemovedMultipleMessage(input);
};

ObjectGroundRemovedMultipleMessage.prototype.serializeAs_ObjectGroundRemovedMultipleMessage = function(param1) {
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
};

ObjectGroundRemovedMultipleMessage.prototype.deserializeAs_ObjectGroundRemovedMultipleMessage = function(param1) {
  var _loc4_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readVarUhShort();
    if (_loc4_ < 0 || _loc4_ > 559) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of cells.");
    } else {
      this.cells.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
};

ObjectGroundRemovedMultipleMessage.prototype.getMessageId = function() {
  return 5944;
};

ObjectGroundRemovedMultipleMessage.prototype.getClassName = function() {
  return 'ObjectGroundRemovedMultipleMessage';
};

module.exports.id = 5944;
module.exports.class = ObjectGroundRemovedMultipleMessage;
module.exports.getInstance = function() {
  return new ObjectGroundRemovedMultipleMessage();
};