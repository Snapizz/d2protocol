var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlayPlayerFightFriendlyRequestedMessage = function() {
  this.fightId = 0;
  this.sourceId = 0;
  this.targetId = 0;
};

util.inherits(GameRolePlayPlayerFightFriendlyRequestedMessage, BaseMessage);

GameRolePlayPlayerFightFriendlyRequestedMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage(output);
};

GameRolePlayPlayerFightFriendlyRequestedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage(input);
};

GameRolePlayPlayerFightFriendlyRequestedMessage.prototype.serializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage = function(output) {
  if (this.fightId < 0) {
    throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
  } else {
    param1.writeInt(this.fightId);
    if (this.sourceId < 0) {
      throw new Error("Forbidden value (" + this.sourceId + ") on element sourceId.");
    } else {
      param1.writeVarInt(this.sourceId);
      if (this.targetId < 0) {
        throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
      } else {
        param1.writeVarInt(this.targetId);
        return;
      }
    }
  }
};

GameRolePlayPlayerFightFriendlyRequestedMessage.prototype.deserializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage = function(input) {
  this.fightId = param1.readInt();
  if (this.fightId < 0) {
    throw new Error("Forbidden value (" + this.fightId + ") on element of GameRolePlayPlayerFightFriendlyRequestedMessage.fightId.");
  } else {
    this.sourceId = param1.readVarUhInt();
    if (this.sourceId < 0) {
      throw new Error("Forbidden value (" + this.sourceId + ") on element of GameRolePlayPlayerFightFriendlyRequestedMessage.sourceId.");
    } else {
      this.targetId = param1.readVarUhInt();
      if (this.targetId < 0) {
        throw new Error("Forbidden value (" + this.targetId + ") on element of GameRolePlayPlayerFightFriendlyRequestedMessage.targetId.");
      } else {
        return;
      }
    }
  }
};

GameRolePlayPlayerFightFriendlyRequestedMessage.prototype.getMessageId = function() {
  return 5937;
};

GameRolePlayPlayerFightFriendlyRequestedMessage.prototype.getClassName = function() {
  return 'GameRolePlayPlayerFightFriendlyRequestedMessage';
};

module.exports.id = 5937;
module.exports.class = GameRolePlayPlayerFightFriendlyRequestedMessage;