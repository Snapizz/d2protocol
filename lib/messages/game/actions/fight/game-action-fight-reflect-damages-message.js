var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightReflectDamagesMessage = function() {
  this.targetId = 0;
};

util.inherits(GameActionFightReflectDamagesMessage, BaseMessage);

GameActionFightReflectDamagesMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightReflectDamagesMessage(output);
};

GameActionFightReflectDamagesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightReflectDamagesMessage(input);
};

GameActionFightReflectDamagesMessage.prototype.serializeAs_GameActionFightReflectDamagesMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
};

GameActionFightReflectDamagesMessage.prototype.deserializeAs_GameActionFightReflectDamagesMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
};

GameActionFightReflectDamagesMessage.prototype.getMessageId = function() {
  return 5530;
};

GameActionFightReflectDamagesMessage.prototype.getClassName = function() {
  return 'GameActionFightReflectDamagesMessage';
};

module.exports.id = 5530;
module.exports.class = GameActionFightReflectDamagesMessage;