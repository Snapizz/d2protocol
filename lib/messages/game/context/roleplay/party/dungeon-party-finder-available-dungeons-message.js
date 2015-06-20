var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DungeonPartyFinderAvailableDungeonsMessage = function() {
  this.dungeonIds = [];
};

util.inherits(DungeonPartyFinderAvailableDungeonsMessage, BaseMessage);

DungeonPartyFinderAvailableDungeonsMessage.prototype.serialize = function(output) {
  this.serializeAs_DungeonPartyFinderAvailableDungeonsMessage(output);
};

DungeonPartyFinderAvailableDungeonsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonPartyFinderAvailableDungeonsMessage(input);
};

DungeonPartyFinderAvailableDungeonsMessage.prototype.serializeAs_DungeonPartyFinderAvailableDungeonsMessage = function(output) {
  param1.writeShort(this.dungeonIds.length);
  var _loc2_ = 0;
  while (_loc2_ < this.dungeonIds.length) {
    if (this.dungeonIds[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.dungeonIds[_loc2_] + ") on element 1 (starting at 1) of dungeonIds.");
    } else {
      param1.writeVarShort(this.dungeonIds[_loc2_]);
      _loc2_++;
      continue;
    }
  }
};

DungeonPartyFinderAvailableDungeonsMessage.prototype.deserializeAs_DungeonPartyFinderAvailableDungeonsMessage = function(input) {
  var _loc4_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readVarUhShort();
    if (_loc4_ < 0) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of dungeonIds.");
    } else {
      this.dungeonIds.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
};

DungeonPartyFinderAvailableDungeonsMessage.prototype.getMessageId = function() {
  return 6242;
};

DungeonPartyFinderAvailableDungeonsMessage.prototype.getClassName = function() {
  return 'DungeonPartyFinderAvailableDungeonsMessage';
};

module.exports.id = 6242;
module.exports.class = DungeonPartyFinderAvailableDungeonsMessage;