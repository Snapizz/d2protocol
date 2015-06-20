var d2com = require('d2com'),
  BaseMessage = require('./dungeon-party-finder-listen-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var DungeonPartyFinderListenRequestMessage = function() {
  this.dungeonId = 0;
};

util.inherits(DungeonPartyFinderListenRequestMessage, BaseMessage);

DungeonPartyFinderListenRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_DungeonPartyFinderListenRequestMessage(output);
};

DungeonPartyFinderListenRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonPartyFinderListenRequestMessage(input);
};

DungeonPartyFinderListenRequestMessage.prototype.serializeAs_DungeonPartyFinderListenRequestMessage = function(param1) {
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
  } else {
    param1.writeVarShort(this.dungeonId);
    return;
  }
};

DungeonPartyFinderListenRequestMessage.prototype.deserializeAs_DungeonPartyFinderListenRequestMessage = function(param1) {
  this.dungeonId = param1.readVarUhShort();
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element of DungeonPartyFinderListenRequestMessage.dungeonId.");
  } else {
    return;
  }
};

DungeonPartyFinderListenRequestMessage.prototype.getMessageId = function() {
  return 6246;
};

DungeonPartyFinderListenRequestMessage.prototype.getClassName = function() {
  return 'DungeonPartyFinderListenRequestMessage';
};

module.exports.id = 6246;
module.exports.class = DungeonPartyFinderListenRequestMessage;
module.exports.getInstance = function() {
  return new DungeonPartyFinderListenRequestMessage();
};