var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
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

GameActionFightDeathMessage.prototype.serializeAs_GameActionFightDeathMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
};

GameActionFightDeathMessage.prototype.deserializeAs_GameActionFightDeathMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
};

GameActionFightDeathMessage.prototype.getMessageId = function() {
  return 1099;
};

GameActionFightDeathMessage.prototype.getClassName = function() {
  return 'GameActionFightDeathMessage';
};

module.exports.id = 1099;
module.exports.class = GameActionFightDeathMessage;