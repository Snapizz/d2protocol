var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

GameActionFightUnmarkCellsMessage.prototype.serializeAs_GameActionFightUnmarkCellsMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeShort(this.markId);
};

GameActionFightUnmarkCellsMessage.prototype.deserializeAs_GameActionFightUnmarkCellsMessage = function(param1) {
  this.deserialize(param1);
  this.markId = param1.readShort();
};

GameActionFightUnmarkCellsMessage.prototype.getMessageId = function() {
  return 5570;
};

GameActionFightUnmarkCellsMessage.prototype.getClassName = function() {
  return 'GameActionFightUnmarkCellsMessage';
};

module.exports.id = 5570;
module.exports.class = GameActionFightUnmarkCellsMessage;
module.exports.getInstance = function() {
  return new GameActionFightUnmarkCellsMessage();
};