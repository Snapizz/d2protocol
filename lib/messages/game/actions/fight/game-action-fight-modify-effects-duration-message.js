var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightModifyEffectsDurationMessage = function() {
  this.targetId = 0;
  this.delta = 0;
};

util.inherits(GameActionFightModifyEffectsDurationMessage, BaseMessage);

GameActionFightModifyEffectsDurationMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightModifyEffectsDurationMessage(output);
};

GameActionFightModifyEffectsDurationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightModifyEffectsDurationMessage(input);
};

GameActionFightModifyEffectsDurationMessage.prototype.serializeAs_GameActionFightModifyEffectsDurationMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  output.writeShort(this.delta);
};

GameActionFightModifyEffectsDurationMessage.prototype.deserializeAs_GameActionFightModifyEffectsDurationMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.delta = input.readShort();
};

GameActionFightModifyEffectsDurationMessage.prototype.getMessageId = function() {
  return 6304;
};

GameActionFightModifyEffectsDurationMessage.prototype.getClassName = function() {
  return 'GameActionFightModifyEffectsDurationMessage';
};

module.exports.id = 6304;
module.exports.class = GameActionFightModifyEffectsDurationMessage;