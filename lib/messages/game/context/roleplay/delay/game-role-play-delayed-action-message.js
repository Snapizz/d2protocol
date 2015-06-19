var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameRolePlayDelayedActionMessage.prototype.serializeAs_GameRolePlayDelayedActionMessage = function(output) {
  output.writeInt(this.delayedCharacterId);
  output.writeByte(this.delayTypeId);
  if ((((this.delayEndTime < 0)) || ((this.delayEndTime > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.delayEndTime) + ") on element delayEndTime.")));
  };
  output.writeDouble(this.delayEndTime);
};

GameRolePlayDelayedActionMessage.prototype.deserializeAs_GameRolePlayDelayedActionMessage = function(input) {
  this.delayedCharacterId = input.readInt();
  this.delayTypeId = input.readByte();
  if (this.delayTypeId < 0) {
    throw (new Error((("Forbidden value (" + this.delayTypeId) + ") on element of GameRolePlayDelayedActionMessage.delayTypeId.")));
  };
  this.delayEndTime = input.readDouble();
  if ((((this.delayEndTime < 0)) || ((this.delayEndTime > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.delayEndTime) + ") on element of GameRolePlayDelayedActionMessage.delayEndTime.")));
  };
};

GameRolePlayDelayedActionMessage.prototype.getMessageId = function() {
  return 6153;
};

GameRolePlayDelayedActionMessage.prototype.getClassName = function() {
  return 'GameRolePlayDelayedActionMessage';
};

module.exports.id = 6153;
module.exports.class = GameRolePlayDelayedActionMessage;