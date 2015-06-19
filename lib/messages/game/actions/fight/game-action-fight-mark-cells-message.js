var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightMarkCellsMessage = function() {
  this.mark;
};

util.inherits(GameActionFightMarkCellsMessage, BaseMessage);

GameActionFightMarkCellsMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightMarkCellsMessage(output);
};

GameActionFightMarkCellsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightMarkCellsMessage(input);
};

GameActionFightMarkCellsMessage.prototype.serializeAs_GameActionFightMarkCellsMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  this.mark.serializeAs_GameActionMark(output);
};

GameActionFightMarkCellsMessage.prototype.deserializeAs_GameActionFightMarkCellsMessage = function(input) {
  this.deserialize(input);
  this.mark = new GameActionMark();
  this.mark.deserialize(input);
};

GameActionFightMarkCellsMessage.prototype.getMessageId = function() {
  return 5540;
};

GameActionFightMarkCellsMessage.prototype.getClassName = function() {
  return 'GameActionFightMarkCellsMessage';
};

module.exports.id = 5540;
module.exports.class = GameActionFightMarkCellsMessage;