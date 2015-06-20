var FightTemporaryBoostEffect = function() {
  this.delta = 0;
};



FightTemporaryBoostEffect.prototype.serialize = function(output) {
  this.serializeAs_FightTemporaryBoostEffect(output);
};

FightTemporaryBoostEffect.prototype.deserialize = function(input) {
  this.deserializeAs_FightTemporaryBoostEffect(input);
};

FightTemporaryBoostEffect.prototype.serializeAs_FightTemporaryBoostEffect = function(param1) {
  this.serializeAs_AbstractFightDispellableEffect(param1);
  param1.writeShort(this.delta);
};

FightTemporaryBoostEffect.prototype.deserializeAs_FightTemporaryBoostEffect = function(param1) {
  this.deserialize(param1);
  this.delta = param1.readShort();
};

FightTemporaryBoostEffect.prototype.getTypeId = function() {
  return 209;
};

FightTemporaryBoostEffect.prototype.getClassName = function() {
  return 'FightTemporaryBoostEffect';
};

module.exports.id = 209;
module.exports.class = FightTemporaryBoostEffect;