var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ObjectsDeletedMessage = function() {
  this.objectUID = [];
};

util.inherits(ObjectsDeletedMessage, BaseMessage);

ObjectsDeletedMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectsDeletedMessage(output);
};

ObjectsDeletedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectsDeletedMessage(input);
};

ObjectsDeletedMessage.prototype.serializeAs_ObjectsDeletedMessage = function(param1) {
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

ObjectsDeletedMessage.prototype.deserializeAs_ObjectsDeletedMessage = function(param1) {
  var _loc4_ = 0;
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

ObjectsDeletedMessage.prototype.getMessageId = function() {
  return 6034;
};

ObjectsDeletedMessage.prototype.getClassName = function() {
  return 'ObjectsDeletedMessage';
};

module.exports.id = 6034;
module.exports.class = ObjectsDeletedMessage;
module.exports.getInstance = function() {
  return new ObjectsDeletedMessage();
};