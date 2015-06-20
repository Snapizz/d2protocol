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

GameRolePlayArenaUpdatePlayerInfosMessage.prototype.serializeAs_GameRolePlayArenaUpdatePlayerInfosMessage = function(param1) {
  if (this.rank < 0 || this.rank > 2300) {
    throw new Error("Forbidden value (" + this.rank + ") on element rank.");
  } else {
    param1.writeVarShort(this.rank);
    if (this.bestDailyRank < 0 || this.bestDailyRank > 2300) {
      throw new Error("Forbidden value (" + this.bestDailyRank + ") on element bestDailyRank.");
    } else {
      param1.writeVarShort(this.bestDailyRank);
      if (this.bestRank < 0 || this.bestRank > 2300) {
        throw new Error("Forbidden value (" + this.bestRank + ") on element bestRank.");
      } else {
        param1.writeVarShort(this.bestRank);
        if (this.victoryCount < 0) {
          throw new Error("Forbidden value (" + this.victoryCount + ") on element victoryCount.");
        } else {
          param1.writeVarShort(this.victoryCount);
          if (this.arenaFightcount < 0) {
            throw new Error("Forbidden value (" + this.arenaFightcount + ") on element arenaFightcount.");
          } else {
            param1.writeVarShort(this.arenaFightcount);
            return;
          }
        }
      }
    }
  }
};

GameRolePlayArenaUpdatePlayerInfosMessage.prototype.deserializeAs_GameRolePlayArenaUpdatePlayerInfosMessage = function(param1) {
  this.rank = param1.readVarUhShort();
  if (this.rank < 0 || this.rank > 2300) {
    throw new Error("Forbidden value (" + this.rank + ") on element of GameRolePlayArenaUpdatePlayerInfosMessage.rank.");
  } else {
    this.bestDailyRank = param1.readVarUhShort();
    if (this.bestDailyRank < 0 || this.bestDailyRank > 2300) {
      throw new Error("Forbidden value (" + this.bestDailyRank + ") on element of GameRolePlayArenaUpdatePlayerInfosMessage.bestDailyRank.");
    } else {
      this.bestRank = param1.readVarUhShort();
      if (this.bestRank < 0 || this.bestRank > 2300) {
        throw new Error("Forbidden value (" + this.bestRank + ") on element of GameRolePlayArenaUpdatePlayerInfosMessage.bestRank.");
      } else {
        this.victoryCount = param1.readVarUhShort();
        if (this.victoryCount < 0) {
          throw new Error("Forbidden value (" + this.victoryCount + ") on element of GameRolePlayArenaUpdatePlayerInfosMessage.victoryCount.");
        } else {
          this.arenaFightcount = param1.readVarUhShort();
          if (this.arenaFightcount < 0) {
            throw new Error("Forbidden value (" + this.arenaFightcount + ") on element of GameRolePlayArenaUpdatePlayerInfosMessage.arenaFightcount.");
          } else {
            return;
          }
        }
      }
    }
  }
};

GameRolePlayArenaUpdatePlayerInfosMessage.prototype.getMessageId = function() {
  return 6301;
};

GameRolePlayArenaUpdatePlayerInfosMessage.prototype.getClassName = function() {
  return 'GameRolePlayArenaUpdatePlayerInfosMessage';
};

module.exports.id = 6301;
module.exports.class = GameRolePlayArenaUpdatePlayerInfosMessage;