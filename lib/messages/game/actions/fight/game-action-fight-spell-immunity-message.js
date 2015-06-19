var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightSpellImmunityMessage = function() {
  this.targetId = 0;
  this.spellId = 0;
};

util.inherits(GameActionFightSpellImmunityMessage, BaseMessage);

GameActionFightSpellImmunityMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightSpellImmunityMessage(output);
};

GameActionFightSpellImmunityMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightSpellImmunityMessage(input);
};

GameActionFightSpellImmunityMessage.prototype.serializeAs_GameActionFightSpellImmunityMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element spellId.")));
  };
  output.writeVarShort(this.spellId);
};

GameActionFightSpellImmunityMessage.prototype.deserializeAs_GameActionFightSpellImmunityMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.spellId = input.readVarUhShort();
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element of GameActionFightSpellImmunityMessage.spellId.")));
  };
};

GameActionFightSpellImmunityMessage.prototype.getMessageId = function() {
  return 6221;
};

GameActionFightSpellImmunityMessage.prototype.getClassName = function() {
  return 'GameActionFightSpellImmunityMessage';
};

module.exports.id = 6221;
module.exports.class = GameActionFightSpellImmunityMessage;