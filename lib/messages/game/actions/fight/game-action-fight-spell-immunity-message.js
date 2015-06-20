var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

GameActionFightSpellImmunityMessage.prototype.serializeAs_GameActionFightSpellImmunityMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
  } else {
    param1.writeVarShort(this.spellId);
    return;
  }
};

GameActionFightSpellImmunityMessage.prototype.deserializeAs_GameActionFightSpellImmunityMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
  this.spellId = param1.readVarUhShort();
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element of GameActionFightSpellImmunityMessage.spellId.");
  } else {
    return;
  }
};

GameActionFightSpellImmunityMessage.prototype.getMessageId = function() {
  return 6221;
};

GameActionFightSpellImmunityMessage.prototype.getClassName = function() {
  return 'GameActionFightSpellImmunityMessage';
};

module.exports.id = 6221;
module.exports.class = GameActionFightSpellImmunityMessage;
module.exports.getInstance = function() {
  return new GameActionFightSpellImmunityMessage();
};