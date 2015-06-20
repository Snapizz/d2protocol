var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GameRolePlayPlayerLifeStatusMessage = function() {
  this.state = 0;
};

util.inherits(GameRolePlayPlayerLifeStatusMessage, BaseMessage);

GameRolePlayPlayerLifeStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayPlayerLifeStatusMessage(output);
};

GameRolePlayPlayerLifeStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayPlayerLifeStatusMessage(input);
};

GameRolePlayPlayerLifeStatusMessage.prototype.serializeAs_GameRolePlayPlayerLifeStatusMessage = function(param1) {
  param1.writeByte(this.state);
};

GameRolePlayPlayerLifeStatusMessage.prototype.deserializeAs_GameRolePlayPlayerLifeStatusMessage = function(param1) {
  this.state = param1.readByte();
  if (this.state < 0) {
    throw new Error("Forbidden value (" + this.state + ") on element of GameRolePlayPlayerLifeStatusMessage.state.");
  } else {
    return;
  }
};

GameRolePlayPlayerLifeStatusMessage.prototype.getMessageId = function() {
  return 5996;
};

GameRolePlayPlayerLifeStatusMessage.prototype.getClassName = function() {
  return 'GameRolePlayPlayerLifeStatusMessage';
};

module.exports.id = 5996;
module.exports.class = GameRolePlayPlayerLifeStatusMessage;
module.exports.getInstance = function() {
  return new GameRolePlayPlayerLifeStatusMessage();
};