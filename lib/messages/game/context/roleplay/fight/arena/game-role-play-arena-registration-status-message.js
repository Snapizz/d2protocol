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

GameRolePlayArenaRegistrationStatusMessage.prototype.serializeAs_GameRolePlayArenaRegistrationStatusMessage = function(param1) {
  param1.writeBoolean(this.registered);
  param1.writeByte(this.step);
  param1.writeInt(this.battleMode);
};

GameRolePlayArenaRegistrationStatusMessage.prototype.deserializeAs_GameRolePlayArenaRegistrationStatusMessage = function(param1) {
  this.registered = param1.readBoolean();
  this.step = param1.readByte();
  if (this.step < 0) {
    throw new Error("Forbidden value (" + this.step + ") on element of GameRolePlayArenaRegistrationStatusMessage.step.");
  } else {
    this.battleMode = param1.readInt();
    if (this.battleMode < 0) {
      throw new Error("Forbidden value (" + this.battleMode + ") on element of GameRolePlayArenaRegistrationStatusMessage.battleMode.");
    } else {
      return;
    }
  }
};

GameRolePlayArenaRegistrationStatusMessage.prototype.getMessageId = function() {
  return 6284;
};

GameRolePlayArenaRegistrationStatusMessage.prototype.getClassName = function() {
  return 'GameRolePlayArenaRegistrationStatusMessage';
};

module.exports.id = 6284;
module.exports.class = GameRolePlayArenaRegistrationStatusMessage;