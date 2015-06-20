var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GameRolePlayFightRequestCanceledMessage = function() {
  this.fightId = 0;
  this.sourceId = 0;
  this.targetId = 0;
};

util.inherits(GameRolePlayFightRequestCanceledMessage, BaseMessage);

GameRolePlayFightRequestCanceledMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayFightRequestCanceledMessage(output);
};

GameRolePlayFightRequestCanceledMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayFightRequestCanceledMessage(input);
};

GameRolePlayFightRequestCanceledMessage.prototype.serializeAs_GameRolePlayFightRequestCanceledMessage = function(param1) {
  param1.writeInt(this.fightId);
  if (this.sourceId < 0) {
    throw new Error("Forbidden value (" + this.sourceId + ") on element sourceId.");
  } else {
    param1.writeVarInt(this.sourceId);
    param1.writeInt(this.targetId);
    return;
  }
};

GameRolePlayFightRequestCanceledMessage.prototype.deserializeAs_GameRolePlayFightRequestCanceledMessage = function(param1) {
  this.fightId = param1.readInt();
  this.sourceId = param1.readVarUhInt();
  if (this.sourceId < 0) {
    throw new Error("Forbidden value (" + this.sourceId + ") on element of GameRolePlayFightRequestCanceledMessage.sourceId.");
  } else {
    this.targetId = param1.readInt();
    return;
  }
};

GameRolePlayFightRequestCanceledMessage.prototype.getMessageId = function() {
  return 5822;
};

GameRolePlayFightRequestCanceledMessage.prototype.getClassName = function() {
  return 'GameRolePlayFightRequestCanceledMessage';
};

module.exports.id = 5822;
module.exports.class = GameRolePlayFightRequestCanceledMessage;
module.exports.getInstance = function() {
  return new GameRolePlayFightRequestCanceledMessage();
};