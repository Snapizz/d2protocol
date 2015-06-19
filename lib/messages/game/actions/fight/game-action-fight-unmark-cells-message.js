var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightUnmarkCellsMessage = function() {
  this.markId = 0;
};

util.inherits(GameActionFightUnmarkCellsMessage, BaseMessage);

GameActionFightUnmarkCellsMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightUnmarkCellsMessage(output);
};

GameActionFightUnmarkCellsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightUnmarkCellsMessage(input);
};

GameActionFightUnmarkCellsMessage.prototype.serializeAs_GameActionFightUnmarkCellsMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeShort(this.markId);
};

GameActionFightUnmarkCellsMessage.prototype.deserializeAs_GameActionFightUnmarkCellsMessage = function(input) {
  this.deserialize(input);
  this.markId = input.readShort();
};

GameActionFightUnmarkCellsMessage.prototype.getMessageId = function() {
  return 5570;
};

GameActionFightUnmarkCellsMessage.prototype.getClassName = function() {
  return 'GameActionFightUnmarkCellsMessage';
};

module.exports.id = 5570;
module.exports.class = GameActionFightUnmarkCellsMessage;