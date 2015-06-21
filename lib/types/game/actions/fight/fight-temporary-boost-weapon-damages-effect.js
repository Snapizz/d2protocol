var FightTemporaryBoostWeaponDamagesEffect = module.exports = function() {
    this.weaponTypeId = 0;

    return this;
};

require('util').inherits(FightTemporaryBoostWeaponDamagesEffect, require('./fight-temporary-boost-effect.js'));

FightTemporaryBoostWeaponDamagesEffect.prototype.serialize = function(output) {
    this.serializeAs_FightTemporaryBoostWeaponDamagesEffect(output);
};

FightTemporaryBoostWeaponDamagesEffect.prototype.deserialize = function(input) {
    this.deserializeAs_FightTemporaryBoostWeaponDamagesEffect(input);
};

FightTemporaryBoostWeaponDamagesEffect.prototype.serializeAs_FightTemporaryBoostWeaponDamagesEffect = function(param1) {
    this.serializeAs_FightTemporaryBoostEffect(param1);
    param1.writeShort(this.weaponTypeId);
};

FightTemporaryBoostWeaponDamagesEffect.prototype.deserializeAs_FightTemporaryBoostWeaponDamagesEffect = function(param1) {
    this.deserializeAs_FightTemporaryBoostEffect(param1);
    this.weaponTypeId = param1.readShort();
};

FightTemporaryBoostWeaponDamagesEffect.prototype.getTypeId = function() {
    return 211;
};

FightTemporaryBoostWeaponDamagesEffect.prototype.getClassName = function() {
    return 'FightTemporaryBoostWeaponDamagesEffect';
};

module.exports.id = 211;