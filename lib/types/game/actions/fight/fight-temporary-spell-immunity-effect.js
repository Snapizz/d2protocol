var BaseMessage = require('./abstract-fight-dispellable-effect.js').class,
  util = require('util');

var FightTemporarySpellImmunityEffect = function() {
  this.immuneSpellId = 0;
};

util.inherits(FightTemporarySpellImmunityEffect, BaseMessage);

FightTemporarySpellImmunityEffect.prototype.serialize = function(output) {
  this.serializeAs_FightTemporarySpellImmunityEffect(output);
};

FightTemporarySpellImmunityEffect.prototype.deserialize = function(input) {
  this.deserializeAs_FightTemporarySpellImmunityEffect(input);
};

FightTemporarySpellImmunityEffect.prototype.serializeAs_FightTemporarySpellImmunityEffect = function(output) {
  this.serializeAs_AbstractFightDispellableEffect(output);
  output.writeInt(this.immuneSpellId);
};

FightTemporarySpellImmunityEffect.prototype.deserializeAs_FightTemporarySpellImmunityEffect = function(input) {
  this.deserialize(input);
  this.immuneSpellId = input.readInt();
};

FightTemporarySpellImmunityEffect.prototype.getTypeId = function() {
  return 366;
};

FightTemporarySpellImmunityEffect.prototype.getClassName = function() {
  return 'FightTemporarySpellImmunityEffect';
};

module.exports.id = 366;
module.exports.class = FightTemporarySpellImmunityEffect;