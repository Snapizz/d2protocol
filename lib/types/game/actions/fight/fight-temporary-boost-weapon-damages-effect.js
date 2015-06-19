var BaseMessage = require('./fight-temporary-boost-effect.js').class,
  util = require('util');

var FightTemporaryBoostWeaponDamagesEffect = function() {
  this.weaponTypeId = 0;
};

util.inherits(FightTemporaryBoostWeaponDamagesEffect, BaseMessage);

FightTemporaryBoostWeaponDamagesEffect.prototype.serialize = function(output) {
  this.serializeAs_FightTemporaryBoostWeaponDamagesEffect(output);
};

FightTemporaryBoostWeaponDamagesEffect.prototype.deserialize = function(input) {
  this.deserializeAs_FightTemporaryBoostWeaponDamagesEffect(input);
};

FightTemporaryBoostWeaponDamagesEffect.prototype.serializeAs_FightTemporaryBoostWeaponDamagesEffect = function(output) {
  this.serializeAs_FightTemporaryBoostEffect(output);
  output.writeShort(this.weaponTypeId);
};

FightTemporaryBoostWeaponDamagesEffect.prototype.deserializeAs_FightTemporaryBoostWeaponDamagesEffect = function(input) {
  this.deserialize(input);
  this.weaponTypeId = input.readShort();
};

FightTemporaryBoostWeaponDamagesEffect.prototype.getTypeId = function() {
  return 211;
};

FightTemporaryBoostWeaponDamagesEffect.prototype.getClassName = function() {
  return 'FightTemporaryBoostWeaponDamagesEffect';
};

module.exports.id = 211;
module.exports.class = FightTemporaryBoostWeaponDamagesEffect;