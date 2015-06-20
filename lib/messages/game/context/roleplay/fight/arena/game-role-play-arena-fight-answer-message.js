var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameRolePlayArenaFightAnswerMessage.prototype.serializeAs_GameRolePlayArenaFightAnswerMessage = function(output) {
  param1.writeInt(this.fightId);
  param1.writeBoolean(this.accept);
};

GameRolePlayArenaFightAnswerMessage.prototype.deserializeAs_GameRolePlayArenaFightAnswerMessage = function(input) {
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