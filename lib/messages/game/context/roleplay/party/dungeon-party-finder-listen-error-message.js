var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DungeonPartyFinderListenErrorMessage = function() {
  this.dungeonId = 0;
};

util.inherits(DungeonPartyFinderListenErrorMessage, BaseMessage);

DungeonPartyFinderListenErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_DungeonPartyFinderListenErrorMessage(output);
};

DungeonPartyFinderListenErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonPartyFinderListenErrorMessage(input);
};

DungeonPartyFinderListenErrorMessage.prototype.serializeAs_DungeonPartyFinderListenErrorMessage = function(output) {
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element dungeonId.")));
  };
  output.writeVarShort(this.dungeonId);
};

DungeonPartyFinderListenErrorMessage.prototype.deserializeAs_DungeonPartyFinderListenErrorMessage = function(input) {
  this.dungeonId = input.readVarUhShort();
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element of DungeonPartyFinderListenErrorMessage.dungeonId.")));
  };
};

DungeonPartyFinderListenErrorMessage.prototype.getMessageId = function() {
  return 6248;
};

DungeonPartyFinderListenErrorMessage.prototype.getClassName = function() {
  return 'DungeonPartyFinderListenErrorMessage';
};

module.exports.id = 6248;
module.exports.class = DungeonPartyFinderListenErrorMessage;