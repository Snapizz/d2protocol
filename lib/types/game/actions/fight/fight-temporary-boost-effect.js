var BaseMessage = require('./abstract-fight-dispellable-effect.js').class,
  util = require('util');

var FightTemporaryBoostEffect = function() {
  this.delta = 0;
};

util.inherits(FightTemporaryBoostEffect, BaseMessage);

FightTemporaryBoostEffect.prototype.serialize = function(output) {
  this.serializeAs_FightTemporaryBoostEffect(output);
};

FightTemporaryBoostEffect.prototype.deserialize = function(input) {
  this.deserializeAs_FightTemporaryBoostEffect(input);
};

FightTemporaryBoostEffect.prototype.serializeAs_FightTemporaryBoostEffect = function(output) {
  this.serializeAs_AbstractFightDispellableEffect(output);
  output.writeShort(this.delta);
};

FightTemporaryBoostEffect.prototype.deserializeAs_FightTemporaryBoostEffect = function(input) {
  this.deserialize(input);
  this.delta = input.readShort();
};

FightTemporaryBoostEffect.prototype.getTypeId = function() {
  return 209;
};

FightTemporaryBoostEffect.prototype.getClassName = function() {
  return 'FightTemporaryBoostEffect';
};

module.exports.id = 209;
module.exports.class = FightTemporaryBoostEffect;