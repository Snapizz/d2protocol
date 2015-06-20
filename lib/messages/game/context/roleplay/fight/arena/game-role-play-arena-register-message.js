var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameRolePlayArenaRegisterMessage = function() {
  this.battleMode = 3;
};

util.inherits(GameRolePlayArenaRegisterMessage, BaseMessage);

GameRolePlayArenaRegisterMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayArenaRegisterMessage(output);
};

GameRolePlayArenaRegisterMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayArenaRegisterMessage(input);
};

GameRolePlayArenaRegisterMessage.prototype.serializeAs_GameRolePlayArenaRegisterMessage = function(param1) {
  param1.writeInt(this.battleMode);
};

GameRolePlayArenaRegisterMessage.prototype.deserializeAs_GameRolePlayArenaRegisterMessage = function(param1) {
  this.battleMode = param1.readInt();
  if (this.battleMode < 0) {
    throw new Error("Forbidden value (" + this.battleMode + ") on element of GameRolePlayArenaRegisterMessage.battleMode.");
  } else {
    return;
  }
};

GameRolePlayArenaRegisterMessage.prototype.getMessageId = function() {
  return 6280;
};

GameRolePlayArenaRegisterMessage.prototype.getClassName = function() {
  return 'GameRolePlayArenaRegisterMessage';
};

module.exports.id = 6280;
module.exports.class = GameRolePlayArenaRegisterMessage;