/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractFightDispellableEffect = require('./abstract-fight-dispellable-effect');
var FightTemporarySpellImmunityEffect = (function (_super) {
    __extends(FightTemporarySpellImmunityEffect, _super);
    function FightTemporarySpellImmunityEffect() {
        this.immuneSpellId = 0;
        _super.call(this);
    }
    FightTemporarySpellImmunityEffect.prototype.getTypeId = function () {
        return FightTemporarySpellImmunityEffect.ID;
    };
    FightTemporarySpellImmunityEffect.prototype.reset = function () {
        this.immuneSpellId = 0;
    };
    FightTemporarySpellImmunityEffect.prototype.serialize = function (param1) {
        this.serializeAs_FightTemporarySpellImmunityEffect(param1);
    };
    FightTemporarySpellImmunityEffect.prototype.serializeAs_FightTemporarySpellImmunityEffect = function (param1) {
        _super.prototype.serializeAs_AbstractFightDispellableEffect.call(this, param1);
        param1.writeInt(this.immuneSpellId);
    };
    FightTemporarySpellImmunityEffect.prototype.deserialize = function (param1) {
        this.deserializeAs_FightTemporarySpellImmunityEffect(param1);
    };
    FightTemporarySpellImmunityEffect.prototype.deserializeAs_FightTemporarySpellImmunityEffect = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.immuneSpellId = param1.readInt();
    };
    FightTemporarySpellImmunityEffect.ID = 366;
    return FightTemporarySpellImmunityEffect;
})(AbstractFightDispellableEffect);
module.exports = FightTemporarySpellImmunityEffect;
