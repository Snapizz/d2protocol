var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameMapMovementMessage = function() {
  this.keyMovements = [];
  this.actorId = 0;
};

util.inherits(GameMapMovementMessage, BaseMessage);

GameMapMovementMessage.prototype.serialize = function(output) {
  this.serializeAs_GameMapMovementMessage(output);
};

GameMapMovementMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameMapMovementMessage(input);
};

GameMapMovementMessage.prototype.serializeAs_GameMapMovementMessage = function(param1) {
  param1.writeShort(this.keyMovements.length);
  var _loc2_ = 0;
  while (_loc2_ < this.keyMovements.length) {
    if (this.keyMovements[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.keyMovements[_loc2_] + ") on element 1 (starting at 1) of keyMovements.");
    } else {
      param1.writeShort(this.keyMovements[_loc2_]);
      _loc2_++;
      continue;
    }
  }
  param1.writeInt(this.actorId);
};

GameMapMovementMessage.prototype.deserializeAs_GameMapMovementMessage = function(param1) {
  var _loc4_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readShort();
    if (_loc4_ < 0) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of keyMovements.");
    } else {
      this.keyMovements.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
  this.actorId = param1.readInt();
};

GameMapMovementMessage.prototype.getMessageId = function() {
  return 951;
};

GameMapMovementMessage.prototype.getClassName = function() {
  return 'GameMapMovementMessage';
};

module.exports.id = 951;
module.exports.class = GameMapMovementMessage;