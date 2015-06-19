var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
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

GameActionFightReflectDamagesMessage.prototype.serializeAs_GameActionFightReflectDamagesMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
};

GameActionFightReflectDamagesMessage.prototype.deserializeAs_GameActionFightReflectDamagesMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
};

GameActionFightReflectDamagesMessage.prototype.getMessageId = function() {
  return 5530;
};

GameActionFightReflectDamagesMessage.prototype.getClassName = function() {
  return 'GameActionFightReflectDamagesMessage';
};

module.exports.id = 5530;
module.exports.class = GameActionFightReflectDamagesMessage;