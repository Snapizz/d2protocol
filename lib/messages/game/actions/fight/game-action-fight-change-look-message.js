var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightChangeLookMessage = function() {
  this.targetId = 0;
  this.entityLook;
};

util.inherits(GameActionFightChangeLookMessage, BaseMessage);

GameActionFightChangeLookMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightChangeLookMessage(output);
};

GameActionFightChangeLookMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightChangeLookMessage(input);
};

GameActionFightChangeLookMessage.prototype.serializeAs_GameActionFightChangeLookMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  this.entityLook.serializeAs_EntityLook(output);
};

GameActionFightChangeLookMessage.prototype.deserializeAs_GameActionFightChangeLookMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.entityLook = new EntityLook();
  this.entityLook.deserialize(input);
};

GameActionFightChangeLookMessage.prototype.getMessageId = function() {
  return 5532;
};

GameActionFightChangeLookMessage.prototype.getClassName = function() {
  return 'GameActionFightChangeLookMessage';
};

module.exports.id = 5532;
module.exports.class = GameActionFightChangeLookMessage;