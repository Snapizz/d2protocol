var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlayArenaFighterStatusMessage = function() {
  this.fightId = 0;
  this.playerId = 0;
  this.accepted = false;
};

util.inherits(GameRolePlayArenaFighterStatusMessage, BaseMessage);

GameRolePlayArenaFighterStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayArenaFighterStatusMessage(output);
};

GameRolePlayArenaFighterStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayArenaFighterStatusMessage(input);
};

GameRolePlayArenaFighterStatusMessage.prototype.serializeAs_GameRolePlayArenaFighterStatusMessage = function(output) {
  param1.writeInt(this.fightId);
  param1.writeInt(this.playerId);
  param1.writeBoolean(this.accepted);
};

GameRolePlayArenaFighterStatusMessage.prototype.deserializeAs_GameRolePlayArenaFighterStatusMessage = function(input) {
  this.fightId = param1.readInt();
  this.playerId = param1.readInt();
  this.accepted = param1.readBoolean();
};

GameRolePlayArenaFighterStatusMessage.prototype.getMessageId = function() {
  return 6281;
};

GameRolePlayArenaFighterStatusMessage.prototype.getClassName = function() {
  return 'GameRolePlayArenaFighterStatusMessage';
};

module.exports.id = 6281;
module.exports.class = GameRolePlayArenaFighterStatusMessage;