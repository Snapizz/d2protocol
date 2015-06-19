var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DungeonPartyFinderRegisterSuccessMessage = function() {
  this.dungeonIds = [];
};

util.inherits(DungeonPartyFinderRegisterSuccessMessage, BaseMessage);

DungeonPartyFinderRegisterSuccessMessage.prototype.serialize = function(output) {
  this.serializeAs_DungeonPartyFinderRegisterSuccessMessage(output);
};

DungeonPartyFinderRegisterSuccessMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonPartyFinderRegisterSuccessMessage(input);
};

DungeonPartyFinderRegisterSuccessMessage.prototype.serializeAs_DungeonPartyFinderRegisterSuccessMessage = function(output) {
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

DungeonPartyFinderRegisterSuccessMessage.prototype.deserializeAs_DungeonPartyFinderRegisterSuccessMessage = function(input) {
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

DungeonPartyFinderRegisterSuccessMessage.prototype.getMessageId = function() {
  return 6241;
};

DungeonPartyFinderRegisterSuccessMessage.prototype.getClassName = function() {
  return 'DungeonPartyFinderRegisterSuccessMessage';
};

module.exports.id = 6241;
module.exports.class = DungeonPartyFinderRegisterSuccessMessage;