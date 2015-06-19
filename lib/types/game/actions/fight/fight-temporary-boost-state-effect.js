var BaseMessage = require('./fight-temporary-boost-effect.js').class,
  util = require('util');

var FightTemporaryBoostStateEffect = function() {
  this.stateId = 0;
};

util.inherits(FightTemporaryBoostStateEffect, BaseMessage);

FightTemporaryBoostStateEffect.prototype.serialize = function(output) {
  this.serializeAs_FightTemporaryBoostStateEffect(output);
};

FightTemporaryBoostStateEffect.prototype.deserialize = function(input) {
  this.deserializeAs_FightTemporaryBoostStateEffect(input);
};

FightTemporaryBoostStateEffect.prototype.serializeAs_FightTemporaryBoostStateEffect = function(output) {
  this.serializeAs_FightTemporaryBoostEffect(output);
  output.writeShort(this.stateId);
};

FightTemporaryBoostStateEffect.prototype.deserializeAs_FightTemporaryBoostStateEffect = function(input) {
  this.deserialize(input);
  this.stateId = input.readShort();
};

FightTemporaryBoostStateEffect.prototype.getTypeId = function() {
  return 214;
};

FightTemporaryBoostStateEffect.prototype.getClassName = function() {
  return 'FightTemporaryBoostStateEffect';
};

module.exports.id = 214;
module.exports.class = FightTemporaryBoostStateEffect;