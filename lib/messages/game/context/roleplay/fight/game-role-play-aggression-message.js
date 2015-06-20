var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameRolePlayAggressionMessage = function() {
  this.attackerId = 0;
  this.defenderId = 0;
};

util.inherits(GameRolePlayAggressionMessage, BaseMessage);

GameRolePlayAggressionMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayAggressionMessage(output);
};

GameRolePlayAggressionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayAggressionMessage(input);
};

GameRolePlayAggressionMessage.prototype.serializeAs_GameRolePlayAggressionMessage = function(param1) {
  if (this.attackerId < 0) {
    throw new Error("Forbidden value (" + this.attackerId + ") on element attackerId.");
  } else {
    param1.writeVarInt(this.attackerId);
    if (this.defenderId < 0) {
      throw new Error("Forbidden value (" + this.defenderId + ") on element defenderId.");
    } else {
      param1.writeVarInt(this.defenderId);
      return;
    }
  }
};

GameRolePlayAggressionMessage.prototype.deserializeAs_GameRolePlayAggressionMessage = function(param1) {
  this.attackerId = param1.readVarUhInt();
  if (this.attackerId < 0) {
    throw new Error("Forbidden value (" + this.attackerId + ") on element of GameRolePlayAggressionMessage.attackerId.");
  } else {
    this.defenderId = param1.readVarUhInt();
    if (this.defenderId < 0) {
      throw new Error("Forbidden value (" + this.defenderId + ") on element of GameRolePlayAggressionMessage.defenderId.");
    } else {
      return;
    }
  }
};

GameRolePlayAggressionMessage.prototype.getMessageId = function() {
  return 6073;
};

GameRolePlayAggressionMessage.prototype.getClassName = function() {
  return 'GameRolePlayAggressionMessage';
};

module.exports.id = 6073;
module.exports.class = GameRolePlayAggressionMessage;
module.exports.getInstance = function() {
  return new GameRolePlayAggressionMessage();
};