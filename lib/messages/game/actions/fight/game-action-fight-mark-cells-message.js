var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

GameActionFightMarkCellsMessage.prototype.serializeAs_GameActionFightMarkCellsMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  this.mark.serializeAs_GameActionMark(param1);
};

GameActionFightMarkCellsMessage.prototype.deserializeAs_GameActionFightMarkCellsMessage = function(param1) {
  this.deserialize(param1);
  this.mark = new GameActionMark();
  this.mark.deserialize(param1);
};

GameActionFightMarkCellsMessage.prototype.getMessageId = function() {
  return 5540;
};

GameActionFightMarkCellsMessage.prototype.getClassName = function() {
  return 'GameActionFightMarkCellsMessage';
};

module.exports.id = 5540;
module.exports.class = GameActionFightMarkCellsMessage;