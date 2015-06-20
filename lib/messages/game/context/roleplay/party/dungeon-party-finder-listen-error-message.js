var d2com = require('d2com'),
  BaseMessage = require('./dungeon-party-finder-listen-error-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

DungeonPartyFinderListenErrorMessage.prototype.serializeAs_DungeonPartyFinderListenErrorMessage = function(param1) {
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
  } else {
    param1.writeVarShort(this.dungeonId);
    return;
  }
};

DungeonPartyFinderListenErrorMessage.prototype.deserializeAs_DungeonPartyFinderListenErrorMessage = function(param1) {
  this.dungeonId = param1.readVarUhShort();
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element of DungeonPartyFinderListenErrorMessage.dungeonId.");
  } else {
    return;
  }
};

DungeonPartyFinderListenErrorMessage.prototype.getMessageId = function() {
  return 6248;
};

DungeonPartyFinderListenErrorMessage.prototype.getClassName = function() {
  return 'DungeonPartyFinderListenErrorMessage';
};

module.exports.id = 6248;
module.exports.class = DungeonPartyFinderListenErrorMessage;
module.exports.getInstance = function() {
  return new DungeonPartyFinderListenErrorMessage();
};