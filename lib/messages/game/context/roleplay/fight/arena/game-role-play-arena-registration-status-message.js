var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlayArenaRegistrationStatusMessage = function() {
  this.registered = false;
  this.step = 0;
  this.battleMode = 3;
};

util.inherits(GameRolePlayArenaRegistrationStatusMessage, BaseMessage);

GameRolePlayArenaRegistrationStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayArenaRegistrationStatusMessage(output);
};

GameRolePlayArenaRegistrationStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayArenaRegistrationStatusMessage(input);
};

GameRolePlayArenaRegistrationStatusMessage.prototype.serializeAs_GameRolePlayArenaRegistrationStatusMessage = function(output) {
  output.writeBoolean(this.registered);
  output.writeByte(this.step);
  output.writeInt(this.battleMode);
};

GameRolePlayArenaRegistrationStatusMessage.prototype.deserializeAs_GameRolePlayArenaRegistrationStatusMessage = function(input) {
  this.registered = input.readBoolean();
  this.step = input.readByte();
  if (this.step < 0) {
    throw (new Error((("Forbidden value (" + this.step) + ") on element of GameRolePlayArenaRegistrationStatusMessage.step.")));
  };
  this.battleMode = input.readInt();
  if (this.battleMode < 0) {
    throw (new Error((("Forbidden value (" + this.battleMode) + ") on element of GameRolePlayArenaRegistrationStatusMessage.battleMode.")));
  };
};

GameRolePlayArenaRegistrationStatusMessage.prototype.getMessageId = function() {
  return 6284;
};

GameRolePlayArenaRegistrationStatusMessage.prototype.getClassName = function() {
  return 'GameRolePlayArenaRegistrationStatusMessage';
};

module.exports.id = 6284;
module.exports.class = GameRolePlayArenaRegistrationStatusMessage;