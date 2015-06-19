var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
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
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if ((((this.cellId < -1)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element cellId.")));
  };
  output.writeShort(this.cellId);
};

GameActionFightCarryCharacterMessage.prototype.deserializeAs_GameActionFightCarryCharacterMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.cellId = input.readShort();
  if ((((this.cellId < -1)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element of GameActionFightCarryCharacterMessage.cellId.")));
  };
};

GameActionFightCarryCharacterMessage.prototype.getMessageId = function() {
  return 5830;
};

GameActionFightCarryCharacterMessage.prototype.getClassName = function() {
  return 'GameActionFightCarryCharacterMessage';
};

module.exports.id = 5830;
module.exports.class = GameActionFightCarryCharacterMessage;