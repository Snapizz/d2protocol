/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightTemporaryBoostEffect = require('./fight-temporary-boost-effect');
var FightTemporaryBoostStateEffect = (function (_super) {
    __extends(FightTemporaryBoostStateEffect, _super);
    function FightTemporaryBoostStateEffect() {
        this.stateId = 0;
        _super.call(this);
    }
    FightTemporaryBoostStateEffect.prototype.getTypeId = function () {
        return FightTemporaryBoostStateEffect.ID;
    };
    FightTemporaryBoostStateEffect.prototype.reset = function () {
        this.stateId = 0;
    };
    FightTemporaryBoostStateEffect.prototype.serialize = function (param1) {
        this.serializeAs_FightTemporaryBoostStateEffect(param1);
    };
    FightTemporaryBoostStateEffect.prototype.serializeAs_FightTemporaryBoostStateEffect = function (param1) {
        _super.prototype.serializeAs_FightTemporaryBoostEffect.call(this, param1);
        param1.writeShort(this.stateId);
    };
    FightTemporaryBoostStateEffect.prototype.deserialize = function (param1) {
        this.deserializeAs_FightTemporaryBoostStateEffect(param1);
    };
    FightTemporaryBoostStateEffect.prototype.deserializeAs_FightTemporaryBoostStateEffect = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.stateId = param1.readShort();
    };
    FightTemporaryBoostStateEffect.ID = 214;
    return FightTemporaryBoostStateEffect;
})(FightTemporaryBoostEffect);
module.exports = FightTemporaryBoostStateEffect;
