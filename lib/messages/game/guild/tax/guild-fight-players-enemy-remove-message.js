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

GuildFightPlayersEnemyRemoveMessage.prototype.serializeAs_GuildFightPlayersEnemyRemoveMessage = function(param1) {
  if (this.fightId < 0) {
    throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
  } else {
    param1.writeInt(this.fightId);
    if (this.playerId < 0) {
      throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
    } else {
      param1.writeVarInt(this.playerId);
      return;
    }
  }
};

GuildFightPlayersEnemyRemoveMessage.prototype.deserializeAs_GuildFightPlayersEnemyRemoveMessage = function(param1) {
  this.fightId = param1.readInt();
  if (this.fightId < 0) {
    throw new Error("Forbidden value (" + this.fightId + ") on element of GuildFightPlayersEnemyRemoveMessage.fightId.");
  } else {
    this.playerId = param1.readVarUhInt();
    if (this.playerId < 0) {
      throw new Error("Forbidden value (" + this.playerId + ") on element of GuildFightPlayersEnemyRemoveMessage.playerId.");
    } else {
      return;
    }
  }
};

GuildFightPlayersEnemyRemoveMessage.prototype.getMessageId = function() {
  return 5929;
};

GuildFightPlayersEnemyRemoveMessage.prototype.getClassName = function() {
  return 'GuildFightPlayersEnemyRemoveMessage';
};

module.exports.id = 5929;
module.exports.class = GuildFightPlayersEnemyRemoveMessage;