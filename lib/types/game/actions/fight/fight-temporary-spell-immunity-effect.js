var FightTemporarySpellImmunityEffect = function() {
  this.immuneSpellId = 0;
};



FightTemporarySpellImmunityEffect.prototype.serialize = function(output) {
  this.serializeAs_FightTemporarySpellImmunityEffect(output);
};

FightTemporarySpellImmunityEffect.prototype.deserialize = function(input) {
  this.deserializeAs_FightTemporarySpellImmunityEffect(input);
};

FightTemporarySpellImmunityEffect.prototype.serializeAs_FightTemporarySpellImmunityEffect = function(param1) {
  this.serializeAs_AbstractFightDispellableEffect(param1);
  param1.writeInt(this.immuneSpellId);
};

FightTemporarySpellImmunityEffect.prototype.deserializeAs_FightTemporarySpellImmunityEffect = function(param1) {
  this.deserialize(param1);
  this.immuneSpellId = param1.readInt();
};

FightTemporarySpellImmunityEffect.prototype.getTypeId = function() {
  return 366;
};

FightTemporarySpellImmunityEffect.prototype.getClassName = function() {
  return 'FightTemporarySpellImmunityEffect';
};

module.exports.id = 366;
module.exports.class = FightTemporarySpellImmunityEffect;