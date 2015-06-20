var FightTemporaryBoostStateEffect = function() {
  this.stateId = 0;
};



FightTemporaryBoostStateEffect.prototype.serialize = function(output) {
  this.serializeAs_FightTemporaryBoostStateEffect(output);
};

FightTemporaryBoostStateEffect.prototype.deserialize = function(input) {
  this.deserializeAs_FightTemporaryBoostStateEffect(input);
};

FightTemporaryBoostStateEffect.prototype.serializeAs_FightTemporaryBoostStateEffect = function(output) {
  this.serializeAs_FightTemporaryBoostEffect(param1);
  param1.writeShort(this.stateId);
};

FightTemporaryBoostStateEffect.prototype.deserializeAs_FightTemporaryBoostStateEffect = function(input) {
  this.deserialize(param1);
  this.stateId = param1.readShort();
};

FightTemporaryBoostStateEffect.prototype.getTypeId = function() {
  return 214;
};

FightTemporaryBoostStateEffect.prototype.getClassName = function() {
  return 'FightTemporaryBoostStateEffect';
};

module.exports.id = 214;
module.exports.class = FightTemporaryBoostStateEffect;