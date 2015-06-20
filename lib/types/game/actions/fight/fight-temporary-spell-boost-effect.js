var BaseMessage = require('./fight-temporary-spell-boost-effect.js').class,
  util = require('util');

var FightTemporarySpellBoostEffect = function() {
  this.boostedSpellId = 0;
};

util.inherits(FightTemporarySpellBoostEffect, BaseMessage);

FightTemporarySpellBoostEffect.prototype.serialize = function(output) {
  this.serializeAs_FightTemporarySpellBoostEffect(output);
};

FightTemporarySpellBoostEffect.prototype.deserialize = function(input) {
  this.deserializeAs_FightTemporarySpellBoostEffect(input);
};

FightTemporarySpellBoostEffect.prototype.serializeAs_FightTemporarySpellBoostEffect = function(param1) {
  this.serializeAs_FightTemporaryBoostEffect(param1);
  if (this.boostedSpellId < 0) {
    throw new Error("Forbidden value (" + this.boostedSpellId + ") on element boostedSpellId.");
  } else {
    param1.writeVarShort(this.boostedSpellId);
    return;
  }
};

FightTemporarySpellBoostEffect.prototype.deserializeAs_FightTemporarySpellBoostEffect = function(param1) {
  this.deserialize(param1);
  this.boostedSpellId = param1.readVarUhShort();
  if (this.boostedSpellId < 0) {
    throw new Error("Forbidden value (" + this.boostedSpellId + ") on element of FightTemporarySpellBoostEffect.boostedSpellId.");
  } else {
    return;
  }
};

FightTemporarySpellBoostEffect.prototype.getTypeId = function() {
  return 207;
};

FightTemporarySpellBoostEffect.prototype.getClassName = function() {
  return 'FightTemporarySpellBoostEffect';
};

module.exports.id = 207;
module.exports.class = FightTemporarySpellBoostEffect;
module.exports.getInstance = function() {
  return new FightTemporarySpellBoostEffect();
};