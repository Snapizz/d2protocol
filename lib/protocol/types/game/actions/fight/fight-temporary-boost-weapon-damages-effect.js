/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightTemporaryBoostEffect = require('./fight-temporary-boost-effect');
var FightTemporaryBoostWeaponDamagesEffect = (function (_super) {
    __extends(FightTemporaryBoostWeaponDamagesEffect, _super);
    function FightTemporaryBoostWeaponDamagesEffect() {
        this.weaponTypeId = 0;
        _super.call(this);
    }
    FightTemporaryBoostWeaponDamagesEffect.prototype.getTypeId = function () {
        return FightTemporaryBoostWeaponDamagesEffect.ID;
    };
    FightTemporaryBoostWeaponDamagesEffect.prototype.reset = function () {
        this.weaponTypeId = 0;
    };
    FightTemporaryBoostWeaponDamagesEffect.prototype.serialize = function (param1) {
        this.serializeAs_FightTemporaryBoostWeaponDamagesEffect(param1);
    };
    FightTemporaryBoostWeaponDamagesEffect.prototype.serializeAs_FightTemporaryBoostWeaponDamagesEffect = function (param1) {
        _super.prototype.serializeAs_FightTemporaryBoostEffect.call(this, param1);
        param1.writeShort(this.weaponTypeId);
    };
    FightTemporaryBoostWeaponDamagesEffect.prototype.deserialize = function (param1) {
        this.deserializeAs_FightTemporaryBoostWeaponDamagesEffect(param1);
    };
    FightTemporaryBoostWeaponDamagesEffect.prototype.deserializeAs_FightTemporaryBoostWeaponDamagesEffect = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.weaponTypeId = param1.readShort();
    };
    FightTemporaryBoostWeaponDamagesEffect.ID = 211;
    return FightTemporaryBoostWeaponDamagesEffect;
})(FightTemporaryBoostEffect);
module.exports = FightTemporaryBoostWeaponDamagesEffect;
