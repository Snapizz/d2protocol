var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DungeonLeftMessage = function() {
  this.dungeonId = 0;
};

util.inherits(DungeonLeftMessage, BaseMessage);

DungeonLeftMessage.prototype.serialize = function(output) {
  this.serializeAs_DungeonLeftMessage(output);
};

DungeonLeftMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonLeftMessage(input);
};

DungeonLeftMessage.prototype.serializeAs_DungeonLeftMessage = function(output) {
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element dungeonId.")));
  };
  output.writeInt(this.dungeonId);
};

DungeonLeftMessage.prototype.deserializeAs_DungeonLeftMessage = function(input) {
  this.dungeonId = input.readInt();
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element of DungeonLeftMessage.dungeonId.")));
  };
};

DungeonLeftMessage.prototype.getMessageId = function() {
  return 6149;
};

DungeonLeftMessage.prototype.getClassName = function() {
  return 'DungeonLeftMessage';
};

module.exports.id = 6149;
module.exports.class = DungeonLeftMessage;