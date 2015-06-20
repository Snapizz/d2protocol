var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

GameActionFightReflectSpellMessage.prototype.serializeAs_GameActionFightReflectSpellMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
};

GameActionFightReflectSpellMessage.prototype.deserializeAs_GameActionFightReflectSpellMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
};

GameActionFightReflectSpellMessage.prototype.getMessageId = function() {
  return 5531;
};

GameActionFightReflectSpellMessage.prototype.getClassName = function() {
  return 'GameActionFightReflectSpellMessage';
};

module.exports.id = 5531;
module.exports.class = GameActionFightReflectSpellMessage;
module.exports.getInstance = function() {
  return new GameActionFightReflectSpellMessage();
};