var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameMapMovementRequestMessage = function() {
  this.keyMovements = [];
  this.mapId = 0;
};

util.inherits(GameMapMovementRequestMessage, BaseMessage);

GameMapMovementRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameMapMovementRequestMessage(output);
};

GameMapMovementRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameMapMovementRequestMessage(input);
};

GameMapMovementRequestMessage.prototype.serializeAs_GameMapMovementRequestMessage = function(param1) {
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
  if (this.mapId < 0) {
    throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
  } else {
    param1.writeInt(this.mapId);
    return;
  }
};

GameMapMovementRequestMessage.prototype.deserializeAs_GameMapMovementRequestMessage = function(param1) {
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
  this.mapId = param1.readInt();
  if (this.mapId < 0) {
    throw new Error("Forbidden value (" + this.mapId + ") on element of GameMapMovementRequestMessage.mapId.");
  } else {
    return;
  }
};

GameMapMovementRequestMessage.prototype.getMessageId = function() {
  return 950;
};

GameMapMovementRequestMessage.prototype.getClassName = function() {
  return 'GameMapMovementRequestMessage';
};

module.exports.id = 950;
module.exports.class = GameMapMovementRequestMessage;
module.exports.getInstance = function() {
  return new GameMapMovementRequestMessage();
};