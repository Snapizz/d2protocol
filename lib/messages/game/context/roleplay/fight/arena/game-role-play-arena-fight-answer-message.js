var d2com = require('d2com'),
  BaseMessage = require('./game-role-play-arena-fight-answer-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameRolePlayArenaFightAnswerMessage = function() {
  this.fightId = 0;
  this.accept = false;
};

util.inherits(GameRolePlayArenaFightAnswerMessage, BaseMessage);

GameRolePlayArenaFightAnswerMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayArenaFightAnswerMessage(output);
};

GameRolePlayArenaFightAnswerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayArenaFightAnswerMessage(input);
};

GameRolePlayArenaFightAnswerMessage.prototype.serializeAs_GameRolePlayArenaFightAnswerMessage = function(param1) {
  param1.writeInt(this.fightId);
  param1.writeBoolean(this.accept);
};

GameRolePlayArenaFightAnswerMessage.prototype.deserializeAs_GameRolePlayArenaFightAnswerMessage = function(param1) {
  this.fightId = param1.readInt();
  this.accept = param1.readBoolean();
};

GameRolePlayArenaFightAnswerMessage.prototype.getMessageId = function() {
  return 6279;
};

GameRolePlayArenaFightAnswerMessage.prototype.getClassName = function() {
  return 'GameRolePlayArenaFightAnswerMessage';
};

module.exports.id = 6279;
module.exports.class = GameRolePlayArenaFightAnswerMessage;
module.exports.getInstance = function() {
  return new GameRolePlayArenaFightAnswerMessage();
};