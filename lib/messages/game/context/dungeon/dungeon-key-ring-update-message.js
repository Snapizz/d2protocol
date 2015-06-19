var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DungeonKeyRingUpdateMessage = function() {
  this.dungeonId = 0;
  this.available = false;
};

util.inherits(DungeonKeyRingUpdateMessage, BaseMessage);

DungeonKeyRingUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_DungeonKeyRingUpdateMessage(output);
};

DungeonKeyRingUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonKeyRingUpdateMessage(input);
};

DungeonKeyRingUpdateMessage.prototype.serializeAs_DungeonKeyRingUpdateMessage = function(output) {
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element dungeonId.")));
  };
  output.writeVarShort(this.dungeonId);
  output.writeBoolean(this.available);
};

DungeonKeyRingUpdateMessage.prototype.deserializeAs_DungeonKeyRingUpdateMessage = function(input) {
  this.dungeonId = input.readVarUhShort();
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element of DungeonKeyRingUpdateMessage.dungeonId.")));
  };
  this.available = input.readBoolean();
};

DungeonKeyRingUpdateMessage.prototype.getMessageId = function() {
  return 6296;
};

DungeonKeyRingUpdateMessage.prototype.getClassName = function() {
  return 'DungeonKeyRingUpdateMessage';
};

module.exports.id = 6296;
module.exports.class = DungeonKeyRingUpdateMessage;