var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameActionFightThrowCharacterMessage.prototype.serializeAs_GameActionFightThrowCharacterMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if ((((this.cellId < -1)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element cellId.")));
  };
  output.writeShort(this.cellId);
};

GameActionFightThrowCharacterMessage.prototype.deserializeAs_GameActionFightThrowCharacterMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.cellId = input.readShort();
  if ((((this.cellId < -1)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element of GameActionFightThrowCharacterMessage.cellId.")));
  };
};

GameActionFightThrowCharacterMessage.prototype.getMessageId = function() {
  return 5829;
};

GameActionFightThrowCharacterMessage.prototype.getClassName = function() {
  return 'GameActionFightThrowCharacterMessage';
};

module.exports.id = 5829;
module.exports.class = GameActionFightThrowCharacterMessage;