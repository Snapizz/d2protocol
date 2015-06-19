var BaseMessage = require('./fight-temporary-boost-effect.js').class,
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

FightTemporarySpellBoostEffect.prototype.serializeAs_FightTemporarySpellBoostEffect = function(output) {
  this.serializeAs_FightTemporaryBoostEffect(output);
  if (this.boostedSpellId < 0) {
    throw (new Error((("Forbidden value (" + this.boostedSpellId) + ") on element boostedSpellId.")));
  };
  output.writeVarShort(this.boostedSpellId);
};

FightTemporarySpellBoostEffect.prototype.deserializeAs_FightTemporarySpellBoostEffect = function(input) {
  this.deserialize(input);
  this.boostedSpellId = input.readVarUhShort();
  if (this.boostedSpellId < 0) {
    throw (new Error((("Forbidden value (" + this.boostedSpellId) + ") on element of FightTemporarySpellBoostEffect.boostedSpellId.")));
  };
};

FightTemporarySpellBoostEffect.prototype.getTypeId = function() {
  return 207;
};

FightTemporarySpellBoostEffect.prototype.getClassName = function() {
  return 'FightTemporarySpellBoostEffect';
};

module.exports.id = 207;
module.exports.class = FightTemporarySpellBoostEffect;