/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractFightDispellableEffect = require('./abstract-fight-dispellable-effect');
var FightTemporaryBoostEffect = (function (_super) {
    __extends(FightTemporaryBoostEffect, _super);
    function FightTemporaryBoostEffect() {
        this.delta = 0;
        _super.call(this);
    }
    FightTemporaryBoostEffect.prototype.getTypeId = function () {
        return FightTemporaryBoostEffect.ID;
    };
    FightTemporaryBoostEffect.prototype.reset = function () {
        this.delta = 0;
    };
    FightTemporaryBoostEffect.prototype.serialize = function (param1) {
        this.serializeAs_FightTemporaryBoostEffect(param1);
    };
    FightTemporaryBoostEffect.prototype.serializeAs_FightTemporaryBoostEffect = function (param1) {
        _super.prototype.serializeAs_AbstractFightDispellableEffect.call(this, param1);
        param1.writeShort(this.delta);
    };
    FightTemporaryBoostEffect.prototype.deserialize = function (param1) {
        this.deserializeAs_FightTemporaryBoostEffect(param1);
    };
    FightTemporaryBoostEffect.prototype.deserializeAs_FightTemporaryBoostEffect = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.delta = param1.readShort();
    };
    FightTemporaryBoostEffect.ID = 209;
    return FightTemporaryBoostEffect;
})(AbstractFightDispellableEffect);
module.exports = FightTemporaryBoostEffect;
