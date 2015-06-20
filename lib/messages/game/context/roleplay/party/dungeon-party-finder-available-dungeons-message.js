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
  output.writeShort(this.dungeonIds.length);
  var _i1 = 0;
  while (_i1 < this.dungeonIds.length) {
    if (this.dungeonIds[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.dungeonIds[_i1]) + ") on element 1 (starting at 1) of dungeonIds.")));
    };
    output.writeVarShort(this.dungeonIds[_i1]);
    _i1++;
  };
};

DungeonPartyFinderAvailableDungeonsMessage.prototype.deserializeAs_DungeonPartyFinderAvailableDungeonsMessage = function(input) {
  var _val1 = 0;
  var _dungeonIdsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _dungeonIdsLen) {
    _val1 = input.readVarUhShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of dungeonIds.")));
    };
    this.dungeonIds.push(_val1);
    _i1++;
  };
};

DungeonPartyFinderAvailableDungeonsMessage.prototype.getMessageId = function() {
  return 6242;
};

DungeonPartyFinderAvailableDungeonsMessage.prototype.getClassName = function() {
  return 'DungeonPartyFinderAvailableDungeonsMessage';
};

module.exports.id = 6242;
module.exports.class = DungeonPartyFinderAvailableDungeonsMessage;