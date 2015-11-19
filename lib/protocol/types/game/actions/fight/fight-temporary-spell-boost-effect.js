/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightTemporaryBoostEffect = require('./fight-temporary-boost-effect');
var FightTemporarySpellBoostEffect = (function (_super) {
    __extends(FightTemporarySpellBoostEffect, _super);
    function FightTemporarySpellBoostEffect() {
        this.boostedSpellId = 0;
        _super.call(this);
    }
    FightTemporarySpellBoostEffect.prototype.getTypeId = function () {
        return FightTemporarySpellBoostEffect.ID;
    };
    FightTemporarySpellBoostEffect.prototype.reset = function () {
        this.boostedSpellId = 0;
    };
    FightTemporarySpellBoostEffect.prototype.serialize = function (param1) {
        this.serializeAs_FightTemporarySpellBoostEffect(param1);
    };
    FightTemporarySpellBoostEffect.prototype.serializeAs_FightTemporarySpellBoostEffect = function (param1) {
        _super.prototype.serializeAs_FightTemporaryBoostEffect.call(this, param1);
        if (this.boostedSpellId < 0) {
            throw new Error('Forbidden value (' + this.boostedSpellId + ') on element boostedSpellId.');
        }
        param1.writeVarShort(this.boostedSpellId);
    };
    FightTemporarySpellBoostEffect.prototype.deserialize = function (param1) {
        this.deserializeAs_FightTemporarySpellBoostEffect(param1);
    };
    FightTemporarySpellBoostEffect.prototype.deserializeAs_FightTemporarySpellBoostEffect = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.boostedSpellId = param1.readVarUhShort();
        if (this.boostedSpellId < 0) {
            throw new Error('Forbidden value (' + this.boostedSpellId + ') on element of FightTemporarySpellBoostEffect.boostedSpellId.');
        }
    };
    FightTemporarySpellBoostEffect.ID = 207;
    return FightTemporarySpellBoostEffect;
})(FightTemporaryBoostEffect);
module.exports = FightTemporarySpellBoostEffect;
