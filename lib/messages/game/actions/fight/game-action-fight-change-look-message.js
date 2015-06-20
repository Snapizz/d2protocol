var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var EntityLook = require('../../../../types/game/look/entity-look.js').class;

var GameActionFightChangeLookMessage = function() {
  this.targetId = 0;
  this.entityLook = new EntityLook();
};

util.inherits(GameActionFightChangeLookMessage, BaseMessage);

GameActionFightChangeLookMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightChangeLookMessage(output);
};

GameActionFightChangeLookMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightChangeLookMessage(input);
};

GameActionFightChangeLookMessage.prototype.serializeAs_GameActionFightChangeLookMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
  this.entityLook.serializeAs_EntityLook(param1);
};

GameActionFightChangeLookMessage.prototype.deserializeAs_GameActionFightChangeLookMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
  this.entityLook = new EntityLook();
  this.entityLook.deserialize(param1);
};

GameActionFightChangeLookMessage.prototype.getMessageId = function() {
  return 5532;
};

GameActionFightChangeLookMessage.prototype.getClassName = function() {
  return 'GameActionFightChangeLookMessage';
};

module.exports.id = 5532;
module.exports.class = GameActionFightChangeLookMessage;
module.exports.getInstance = function() {
  return new GameActionFightChangeLookMessage();
};