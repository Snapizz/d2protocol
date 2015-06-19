var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlayDelayedActionFinishedMessage = function() {
  this.delayedCharacterId = 0;
  this.delayTypeId = 0;
};

util.inherits(GameRolePlayDelayedActionFinishedMessage, BaseMessage);

GameRolePlayDelayedActionFinishedMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayDelayedActionFinishedMessage(output);
};

GameRolePlayDelayedActionFinishedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayDelayedActionFinishedMessage(input);
};

GameRolePlayDelayedActionFinishedMessage.prototype.serializeAs_GameRolePlayDelayedActionFinishedMessage = function(output) {
  output.writeInt(this.delayedCharacterId);
  output.writeByte(this.delayTypeId);
};

GameRolePlayDelayedActionFinishedMessage.prototype.deserializeAs_GameRolePlayDelayedActionFinishedMessage = function(input) {
  this.delayedCharacterId = input.readInt();
  this.delayTypeId = input.readByte();
  if (this.delayTypeId < 0) {
    throw (new Error((("Forbidden value (" + this.delayTypeId) + ") on element of GameRolePlayDelayedActionFinishedMessage.delayTypeId.")));
  };
};

GameRolePlayDelayedActionFinishedMessage.prototype.getMessageId = function() {
  return 6150;
};

GameRolePlayDelayedActionFinishedMessage.prototype.getClassName = function() {
  return 'GameRolePlayDelayedActionFinishedMessage';
};

module.exports.id = 6150;
module.exports.class = GameRolePlayDelayedActionFinishedMessage;