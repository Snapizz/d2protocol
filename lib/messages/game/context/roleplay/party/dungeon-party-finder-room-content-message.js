var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var DungeonPartyFinderRoomContentMessage = function() {
  this.dungeonId = 0;
  this.players = [];
};

util.inherits(DungeonPartyFinderRoomContentMessage, BaseMessage);

DungeonPartyFinderRoomContentMessage.prototype.serialize = function(output) {
  this.serializeAs_DungeonPartyFinderRoomContentMessage(output);
};

DungeonPartyFinderRoomContentMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonPartyFinderRoomContentMessage(input);
};

DungeonPartyFinderRoomContentMessage.prototype.serializeAs_DungeonPartyFinderRoomContentMessage = function(param1) {
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
  } else {
    param1.writeVarShort(this.dungeonId);
    param1.writeShort(this.players.length);
    var _loc2_ = 0;
    while (_loc2_ < this.players.length) {
      (this.players[_loc2_]).serializeAs_DungeonPartyFinderPlayer(param1);
      _loc2_++;
    }
    return;
  }
};

DungeonPartyFinderRoomContentMessage.prototype.deserializeAs_DungeonPartyFinderRoomContentMessage = function(param1) {
  var _loc4_ = null;
  this.dungeonId = param1.readVarUhShort();
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element of DungeonPartyFinderRoomContentMessage.dungeonId.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = new DungeonPartyFinderPlayer();
      _loc4_.deserialize(param1);
      this.players.push(_loc4_);
      _loc3_++;
    }
    return;
  }
};

DungeonPartyFinderRoomContentMessage.prototype.getMessageId = function() {
  return 6247;
};

DungeonPartyFinderRoomContentMessage.prototype.getClassName = function() {
  return 'DungeonPartyFinderRoomContentMessage';
};

module.exports.id = 6247;
module.exports.class = DungeonPartyFinderRoomContentMessage;
module.exports.getInstance = function() {
  return new DungeonPartyFinderRoomContentMessage();
};