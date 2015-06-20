var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DungeonPartyFinderRoomContentUpdateMessage = function() {
  this.dungeonId = 0;
  this.addedPlayers = [];
  this.removedPlayersIds = [];
};

util.inherits(DungeonPartyFinderRoomContentUpdateMessage, BaseMessage);

DungeonPartyFinderRoomContentUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_DungeonPartyFinderRoomContentUpdateMessage(output);
};

DungeonPartyFinderRoomContentUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonPartyFinderRoomContentUpdateMessage(input);
};

DungeonPartyFinderRoomContentUpdateMessage.prototype.serializeAs_DungeonPartyFinderRoomContentUpdateMessage = function(output) {
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element dungeonId.")));
  };
  output.writeVarShort(this.dungeonId);
  output.writeShort(this.addedPlayers.length);
  var _i2 = 0;
  while (_i2 < this.addedPlayers.length) {
    (this.addedPlayers[_i2]).serializeAs_DungeonPartyFinderPlayer(output);
    _i2++;
  };
  output.writeShort(this.removedPlayersIds.length);
  var _i3 = 0;
  while (_i3 < this.removedPlayersIds.length) {
    if (this.removedPlayersIds[_i3] < 0) {
      throw (new Error((("Forbidden value (" + this.removedPlayersIds[_i3]) + ") on element 3 (starting at 1) of removedPlayersIds.")));
    };
    output.writeVarInt(this.removedPlayersIds[_i3]);
    _i3++;
  };
};

DungeonPartyFinderRoomContentUpdateMessage.prototype.deserializeAs_DungeonPartyFinderRoomContentUpdateMessage = function(input) {
  var _item2;
  var _val3 = 0;
  this.dungeonId = input.readVarUhShort();
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element of DungeonPartyFinderRoomContentUpdateMessage.dungeonId.")));
  };
  var _addedPlayersLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _addedPlayersLen) {
    _item2 = new DungeonPartyFinderPlayer();
    _item2.deserialize(input);
    this.addedPlayers.push(_item2);
    _i2++;
  };
  var _removedPlayersIdsLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _removedPlayersIdsLen) {
    _val3 = input.readVarUhInt();
    if (_val3 < 0) {
      throw (new Error((("Forbidden value (" + _val3) + ") on elements of removedPlayersIds.")));
    };
    this.removedPlayersIds.push(_val3);
    _i3++;
  };
};

DungeonPartyFinderRoomContentUpdateMessage.prototype.getMessageId = function() {
  return 6250;
};

DungeonPartyFinderRoomContentUpdateMessage.prototype.getClassName = function() {
  return 'DungeonPartyFinderRoomContentUpdateMessage';
};

module.exports.id = 6250;
module.exports.class = DungeonPartyFinderRoomContentUpdateMessage;