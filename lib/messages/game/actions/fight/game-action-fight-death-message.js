var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameActionFightDeathMessage = function() {
  this.targetId = 0;
};

util.inherits(GameActionFightDeathMessage, BaseMessage);

GameActionFightDeathMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightDeathMessage(output);
};

GameActionFightDeathMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightDeathMessage(input);
};

GameActionFightDeathMessage.prototype.serializeAs_GameActionFightDeathMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
};

GameActionFightDeathMessage.prototype.deserializeAs_GameActionFightDeathMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
};

GameActionFightDeathMessage.prototype.getMessageId = function() {
  return 1099;
};

GameActionFightDeathMessage.prototype.getClassName = function() {
  return 'GameActionFightDeathMessage';
};

module.exports.id = 1099;
module.exports.class = GameActionFightDeathMessage;
module.exports.getInstance = function() {
  return new GameActionFightDeathMessage();
};