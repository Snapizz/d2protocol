var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DungeonPartyFinderRegisterRequestMessage = function() {
  this.dungeonIds = [];
};

util.inherits(DungeonPartyFinderRegisterRequestMessage, BaseMessage);

DungeonPartyFinderRegisterRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_DungeonPartyFinderRegisterRequestMessage(output);
};

DungeonPartyFinderRegisterRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonPartyFinderRegisterRequestMessage(input);
};

DungeonPartyFinderRegisterRequestMessage.prototype.serializeAs_DungeonPartyFinderRegisterRequestMessage = function(output) {
  output.writeShort(this.dungeonIds.length);
  var _i1;
  while (_i1 < this.dungeonIds.length) {
    if (this.dungeonIds[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.dungeonIds[_i1]) + ") on element 1 (starting at 1) of dungeonIds.")));
    };
    output.writeVarShort(this.dungeonIds[_i1]);
    _i1++;
  };
};

DungeonPartyFinderRegisterRequestMessage.prototype.deserializeAs_DungeonPartyFinderRegisterRequestMessage = function(input) {
  var _val1;
  var _dungeonIdsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _dungeonIdsLen) {
    _val1 = input.readVarUhShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of dungeonIds.")));
    };
    this.dungeonIds.push(_val1);
    _i1++;
  };
};

DungeonPartyFinderRegisterRequestMessage.prototype.getMessageId = function() {
  return 6249;
};

DungeonPartyFinderRegisterRequestMessage.prototype.getClassName = function() {
  return 'DungeonPartyFinderRegisterRequestMessage';
};

module.exports.id = 6249;
module.exports.class = DungeonPartyFinderRegisterRequestMessage;