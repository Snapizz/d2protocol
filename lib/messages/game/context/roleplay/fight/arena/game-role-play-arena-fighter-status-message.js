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
  output.writeInt(this.fightId);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
  output.writeBoolean(this.accepted);
};

GameRolePlayArenaFighterStatusMessage.prototype.deserializeAs_GameRolePlayArenaFighterStatusMessage = function(input) {
  this.fightId = input.readInt();
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of GameRolePlayArenaFighterStatusMessage.playerId.")));
  };
  this.accepted = input.readBoolean();
};

GameRolePlayArenaFighterStatusMessage.prototype.getMessageId = function() {
  return 6281;
};

GameRolePlayArenaFighterStatusMessage.prototype.getClassName = function() {
  return 'GameRolePlayArenaFighterStatusMessage';
};

module.exports.id = 6281;
module.exports.class = GameRolePlayArenaFighterStatusMessage;