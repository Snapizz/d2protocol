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

DungeonPartyFinderRoomContentMessage.prototype.serializeAs_DungeonPartyFinderRoomContentMessage = function(output) {
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element dungeonId.")));
  };
  output.writeVarShort(this.dungeonId);
  output.writeShort(this.players.length);
  var _i2 = 0;
  while (_i2 < this.players.length) {
    (this.players[_i2]).serializeAs_DungeonPartyFinderPlayer(output);
    _i2++;
  };
};

DungeonPartyFinderRoomContentMessage.prototype.deserializeAs_DungeonPartyFinderRoomContentMessage = function(input) {
  var _item2;
  this.dungeonId = input.readVarUhShort();
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element of DungeonPartyFinderRoomContentMessage.dungeonId.")));
  };
  var _playersLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _playersLen) {
    _item2 = new DungeonPartyFinderPlayer();
    _item2.deserialize(input);
    this.players.push(_item2);
    _i2++;
  };
};

DungeonPartyFinderRoomContentMessage.prototype.getMessageId = function() {
  return 6247;
};

DungeonPartyFinderRoomContentMessage.prototype.getClassName = function() {
  return 'DungeonPartyFinderRoomContentMessage';
};

module.exports.id = 6247;
module.exports.class = DungeonPartyFinderRoomContentMessage;