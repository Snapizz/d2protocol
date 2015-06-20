var d2com = require('d2com'),
  BaseMessage = require('./game-role-play-delayed-action-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameRolePlayDelayedActionMessage = function() {
  this.delayedCharacterId = 0;
  this.delayTypeId = 0;
  this.delayEndTime = 0;
};

util.inherits(GameRolePlayDelayedActionMessage, BaseMessage);

GameRolePlayDelayedActionMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayDelayedActionMessage(output);
};

GameRolePlayDelayedActionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayDelayedActionMessage(input);
};

GameRolePlayDelayedActionMessage.prototype.serializeAs_GameRolePlayDelayedActionMessage = function(param1) {
  param1.writeInt(this.delayedCharacterId);
  param1.writeByte(this.delayTypeId);
  if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.delayEndTime + ") on element delayEndTime.");
  } else {
    param1.writeDouble(this.delayEndTime);
    return;
  }
};

GameRolePlayDelayedActionMessage.prototype.deserializeAs_GameRolePlayDelayedActionMessage = function(param1) {
  this.delayedCharacterId = param1.readInt();
  this.delayTypeId = param1.readByte();
  if (this.delayTypeId < 0) {
    throw new Error("Forbidden value (" + this.delayTypeId + ") on element of GameRolePlayDelayedActionMessage.delayTypeId.");
  } else {
    this.delayEndTime = param1.readDouble();
    if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
      throw new Error("Forbidden value (" + this.delayEndTime + ") on element of GameRolePlayDelayedActionMessage.delayEndTime.");
    } else {
      return;
    }
  }
};

GameRolePlayDelayedActionMessage.prototype.getMessageId = function() {
  return 6153;
};

GameRolePlayDelayedActionMessage.prototype.getClassName = function() {
  return 'GameRolePlayDelayedActionMessage';
};

module.exports.id = 6153;
module.exports.class = GameRolePlayDelayedActionMessage;
module.exports.getInstance = function() {
  return new GameRolePlayDelayedActionMessage();
};