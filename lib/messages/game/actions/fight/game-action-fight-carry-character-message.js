var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightCarryCharacterMessage = function() {
  this.targetId = 0;
  this.cellId = 0;
};

util.inherits(GameActionFightCarryCharacterMessage, BaseMessage);

GameActionFightCarryCharacterMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightCarryCharacterMessage(output);
};

GameActionFightCarryCharacterMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightCarryCharacterMessage(input);
};

GameActionFightCarryCharacterMessage.prototype.serializeAs_GameActionFightCarryCharacterMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
  if (this.cellId < -1 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
  } else {
    param1.writeShort(this.cellId);
    return;
  }
};

GameActionFightCarryCharacterMessage.prototype.deserializeAs_GameActionFightCarryCharacterMessage = function(input) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
  this.cellId = param1.readShort();
  if (this.cellId < -1 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element of GameActionFightCarryCharacterMessage.cellId.");
  } else {
    return;
  }
};

GameActionFightCarryCharacterMessage.prototype.getMessageId = function() {
  return 5830;
};

GameActionFightCarryCharacterMessage.prototype.getClassName = function() {
  return 'GameActionFightCarryCharacterMessage';
};

module.exports.id = 5830;
module.exports.class = GameActionFightCarryCharacterMessage;