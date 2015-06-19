var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DungeonEnteredMessage = function() {
  this.dungeonId = 0;
};

util.inherits(DungeonEnteredMessage, BaseMessage);

DungeonEnteredMessage.prototype.serialize = function(output) {
  this.serializeAs_DungeonEnteredMessage(output);
};

DungeonEnteredMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonEnteredMessage(input);
};

DungeonEnteredMessage.prototype.serializeAs_DungeonEnteredMessage = function(output) {
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element dungeonId.")));
  };
  output.writeInt(this.dungeonId);
};

DungeonEnteredMessage.prototype.deserializeAs_DungeonEnteredMessage = function(input) {
  this.dungeonId = input.readInt();
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element of DungeonEnteredMessage.dungeonId.")));
  };
};

DungeonEnteredMessage.prototype.getMessageId = function() {
  return 6152;
};

DungeonEnteredMessage.prototype.getClassName = function() {
  return 'DungeonEnteredMessage';
};

module.exports.id = 6152;
module.exports.class = DungeonEnteredMessage;