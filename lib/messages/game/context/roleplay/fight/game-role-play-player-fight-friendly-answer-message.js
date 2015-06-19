var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlayPlayerFightFriendlyAnswerMessage = function() {
  this.fightId = 0;
  this.accept = false;
};

util.inherits(GameRolePlayPlayerFightFriendlyAnswerMessage, BaseMessage);

GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage(output);
};

GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage(input);
};

GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.serializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage = function(output) {
  output.writeInt(this.fightId);
  output.writeBoolean(this.accept);
};

GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.deserializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage = function(input) {
  this.fightId = input.readInt();
  this.accept = input.readBoolean();
};

GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.getMessageId = function() {
  return 5732;
};

GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.getClassName = function() {
  return 'GameRolePlayPlayerFightFriendlyAnswerMessage';
};

module.exports.id = 5732;
module.exports.class = GameRolePlayPlayerFightFriendlyAnswerMessage;