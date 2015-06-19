var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightReflectSpellMessage = function() {
  this.targetId = 0;
};

util.inherits(GameActionFightReflectSpellMessage, BaseMessage);

GameActionFightReflectSpellMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightReflectSpellMessage(output);
};

GameActionFightReflectSpellMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightReflectSpellMessage(input);
};

GameActionFightReflectSpellMessage.prototype.serializeAs_GameActionFightReflectSpellMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
};

GameActionFightReflectSpellMessage.prototype.deserializeAs_GameActionFightReflectSpellMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
};

GameActionFightReflectSpellMessage.prototype.getMessageId = function() {
  return 5531;
};

GameActionFightReflectSpellMessage.prototype.getClassName = function() {
  return 'GameActionFightReflectSpellMessage';
};

module.exports.id = 5531;
module.exports.class = GameActionFightReflectSpellMessage;