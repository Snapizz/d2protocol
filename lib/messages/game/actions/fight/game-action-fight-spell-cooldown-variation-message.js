var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightSpellCooldownVariationMessage = function() {
  this.targetId = 0;
  this.spellId = 0;
  this.value = 0;
};

util.inherits(GameActionFightSpellCooldownVariationMessage, BaseMessage);

GameActionFightSpellCooldownVariationMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightSpellCooldownVariationMessage(output);
};

GameActionFightSpellCooldownVariationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightSpellCooldownVariationMessage(input);
};

GameActionFightSpellCooldownVariationMessage.prototype.serializeAs_GameActionFightSpellCooldownVariationMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element spellId.")));
  };
  output.writeVarShort(this.spellId);
  output.writeVarShort(this.value);
};

GameActionFightSpellCooldownVariationMessage.prototype.deserializeAs_GameActionFightSpellCooldownVariationMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.spellId = input.readVarUhShort();
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element of GameActionFightSpellCooldownVariationMessage.spellId.")));
  };
  this.value = input.readVarShort();
};

GameActionFightSpellCooldownVariationMessage.prototype.getMessageId = function() {
  return 6219;
};

GameActionFightSpellCooldownVariationMessage.prototype.getClassName = function() {
  return 'GameActionFightSpellCooldownVariationMessage';
};

module.exports.id = 6219;
module.exports.class = GameActionFightSpellCooldownVariationMessage;