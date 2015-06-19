var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildFightPlayersEnemyRemoveMessage = function() {
  this.fightId = 0;
  this.playerId = 0;
};

util.inherits(GuildFightPlayersEnemyRemoveMessage, BaseMessage);

GuildFightPlayersEnemyRemoveMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildFightPlayersEnemyRemoveMessage(output);
};

GuildFightPlayersEnemyRemoveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildFightPlayersEnemyRemoveMessage(input);
};

GuildFightPlayersEnemyRemoveMessage.prototype.serializeAs_GuildFightPlayersEnemyRemoveMessage = function(output) {
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element fightId.")));
  };
  output.writeInt(this.fightId);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
};

GuildFightPlayersEnemyRemoveMessage.prototype.deserializeAs_GuildFightPlayersEnemyRemoveMessage = function(input) {
  this.fightId = input.readInt();
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element of GuildFightPlayersEnemyRemoveMessage.fightId.")));
  };
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of GuildFightPlayersEnemyRemoveMessage.playerId.")));
  };
};

GuildFightPlayersEnemyRemoveMessage.prototype.getMessageId = function() {
  return 5929;
};

GuildFightPlayersEnemyRemoveMessage.prototype.getClassName = function() {
  return 'GuildFightPlayersEnemyRemoveMessage';
};

module.exports.id = 5929;
module.exports.class = GuildFightPlayersEnemyRemoveMessage;