var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  super.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
  } else {
    param1.writeVarShort(this.spellId);
    param1.writeVarShort(this.value);
    return;
  }
};

GameActionFightSpellCooldownVariationMessage.prototype.deserializeAs_GameActionFightSpellCooldownVariationMessage = function(input) {
  super.deserialize(param1);
  this.targetId = param1.readInt();
  this.spellId = param1.readVarUhShort();
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element of GameActionFightSpellCooldownVariationMessage.spellId.");
  } else {
    this.value = param1.readVarShort();
    return;
  }
};

GameActionFightSpellCooldownVariationMessage.prototype.getMessageId = function() {
  return 6219;
};

GameActionFightSpellCooldownVariationMessage.prototype.getClassName = function() {
  return 'GameActionFightSpellCooldownVariationMessage';
};

module.exports.id = 6219;
module.exports.class = GameActionFightSpellCooldownVariationMessage;