var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlayArenaUpdatePlayerInfosMessage = function() {
  this.rank = 0;
  this.bestDailyRank = 0;
  this.bestRank = 0;
  this.victoryCount = 0;
  this.arenaFightcount = 0;
};

util.inherits(GameRolePlayArenaUpdatePlayerInfosMessage, BaseMessage);

GameRolePlayArenaUpdatePlayerInfosMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayArenaUpdatePlayerInfosMessage(output);
};

GameRolePlayArenaUpdatePlayerInfosMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayArenaUpdatePlayerInfosMessage(input);
};

GameRolePlayArenaUpdatePlayerInfosMessage.prototype.serializeAs_GameRolePlayArenaUpdatePlayerInfosMessage = function(output) {
  if ((((this.rank < 0)) || ((this.rank > 2300)))) {
    throw (new Error((("Forbidden value (" + this.rank) + ") on element rank.")));
  };
  output.writeVarShort(this.rank);
  if ((((this.bestDailyRank < 0)) || ((this.bestDailyRank > 2300)))) {
    throw (new Error((("Forbidden value (" + this.bestDailyRank) + ") on element bestDailyRank.")));
  };
  output.writeVarShort(this.bestDailyRank);
  if ((((this.bestRank < 0)) || ((this.bestRank > 2300)))) {
    throw (new Error((("Forbidden value (" + this.bestRank) + ") on element bestRank.")));
  };
  output.writeVarShort(this.bestRank);
  if (this.victoryCount < 0) {
    throw (new Error((("Forbidden value (" + this.victoryCount) + ") on element victoryCount.")));
  };
  output.writeVarShort(this.victoryCount);
  if (this.arenaFightcount < 0) {
    throw (new Error((("Forbidden value (" + this.arenaFightcount) + ") on element arenaFightcount.")));
  };
  output.writeVarShort(this.arenaFightcount);
};

GameRolePlayArenaUpdatePlayerInfosMessage.prototype.deserializeAs_GameRolePlayArenaUpdatePlayerInfosMessage = function(input) {
  this.rank = input.readVarUhShort();
  if ((((this.rank < 0)) || ((this.rank > 2300)))) {
    throw (new Error((("Forbidden value (" + this.rank) + ") on element of GameRolePlayArenaUpdatePlayerInfosMessage.rank.")));
  };
  this.bestDailyRank = input.readVarUhShort();
  if ((((this.bestDailyRank < 0)) || ((this.bestDailyRank > 2300)))) {
    throw (new Error((("Forbidden value (" + this.bestDailyRank) + ") on element of GameRolePlayArenaUpdatePlayerInfosMessage.bestDailyRank.")));
  };
  this.bestRank = input.readVarUhShort();
  if ((((this.bestRank < 0)) || ((this.bestRank > 2300)))) {
    throw (new Error((("Forbidden value (" + this.bestRank) + ") on element of GameRolePlayArenaUpdatePlayerInfosMessage.bestRank.")));
  };
  this.victoryCount = input.readVarUhShort();
  if (this.victoryCount < 0) {
    throw (new Error((("Forbidden value (" + this.victoryCount) + ") on element of GameRolePlayArenaUpdatePlayerInfosMessage.victoryCount.")));
  };
  this.arenaFightcount = input.readVarUhShort();
  if (this.arenaFightcount < 0) {
    throw (new Error((("Forbidden value (" + this.arenaFightcount) + ") on element of GameRolePlayArenaUpdatePlayerInfosMessage.arenaFightcount.")));
  };
};

GameRolePlayArenaUpdatePlayerInfosMessage.prototype.getMessageId = function() {
  return 6301;
};

GameRolePlayArenaUpdatePlayerInfosMessage.prototype.getClassName = function() {
  return 'GameRolePlayArenaUpdatePlayerInfosMessage';
};

module.exports.id = 6301;
module.exports.class = GameRolePlayArenaUpdatePlayerInfosMessage;