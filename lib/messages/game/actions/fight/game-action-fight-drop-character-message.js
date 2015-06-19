var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightDropCharacterMessage = function() {
  this.targetId = 0;
  this.cellId = 0;
};

util.inherits(GameActionFightDropCharacterMessage, BaseMessage);

GameActionFightDropCharacterMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightDropCharacterMessage(output);
};

GameActionFightDropCharacterMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightDropCharacterMessage(input);
};

GameActionFightDropCharacterMessage.prototype.serializeAs_GameActionFightDropCharacterMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if ((((this.cellId < -1)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element cellId.")));
  };
  output.writeShort(this.cellId);
};

GameActionFightDropCharacterMessage.prototype.deserializeAs_GameActionFightDropCharacterMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.cellId = input.readShort();
  if ((((this.cellId < -1)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element of GameActionFightDropCharacterMessage.cellId.")));
  };
};

GameActionFightDropCharacterMessage.prototype.getMessageId = function() {
  return 5826;
};

GameActionFightDropCharacterMessage.prototype.getClassName = function() {
  return 'GameActionFightDropCharacterMessage';
};

module.exports.id = 5826;
module.exports.class = GameActionFightDropCharacterMessage;