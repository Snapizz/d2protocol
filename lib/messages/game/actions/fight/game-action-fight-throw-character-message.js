var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GameActionFightThrowCharacterMessage = function() {
  this.targetId = 0;
  this.cellId = 0;
};

util.inherits(GameActionFightThrowCharacterMessage, BaseMessage);

GameActionFightThrowCharacterMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightThrowCharacterMessage(output);
};

GameActionFightThrowCharacterMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightThrowCharacterMessage(input);
};

GameActionFightThrowCharacterMessage.prototype.serializeAs_GameActionFightThrowCharacterMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
  if (this.cellId < -1 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
  } else {
    param1.writeShort(this.cellId);
    return;
  }
};

GameActionFightThrowCharacterMessage.prototype.deserializeAs_GameActionFightThrowCharacterMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
  this.cellId = param1.readShort();
  if (this.cellId < -1 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element of GameActionFightThrowCharacterMessage.cellId.");
  } else {
    return;
  }
};

GameActionFightThrowCharacterMessage.prototype.getMessageId = function() {
  return 5829;
};

GameActionFightThrowCharacterMessage.prototype.getClassName = function() {
  return 'GameActionFightThrowCharacterMessage';
};

module.exports.id = 5829;
module.exports.class = GameActionFightThrowCharacterMessage;
module.exports.getInstance = function() {
  return new GameActionFightThrowCharacterMessage();
};