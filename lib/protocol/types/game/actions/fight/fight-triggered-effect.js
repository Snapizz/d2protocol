/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractFightDispellableEffect = require('./abstract-fight-dispellable-effect');
var FightTriggeredEffect = (function (_super) {
    __extends(FightTriggeredEffect, _super);
    function FightTriggeredEffect() {
        this.param1 = 0;
        this.param2 = 0;
        this.param3 = 0;
        this.delay = 0;
        _super.call(this);
    }
    FightTriggeredEffect.prototype.getTypeId = function () {
        return FightTriggeredEffect.ID;
    };
    FightTriggeredEffect.prototype.reset = function () {
        this.param1 = 0;
        this.param2 = 0;
        this.param3 = 0;
        this.delay = 0;
    };
    FightTriggeredEffect.prototype.serialize = function (param1) {
        this.serializeAs_FightTriggeredEffect(param1);
    };
    FightTriggeredEffect.prototype.serializeAs_FightTriggeredEffect = function (param1) {
        _super.prototype.serializeAs_AbstractFightDispellableEffect.call(this, param1);
        param1.writeInt(this.param1);
        param1.writeInt(this.param2);
        param1.writeInt(this.param3);
        param1.writeShort(this.delay);
    };
    FightTriggeredEffect.prototype.deserialize = function (param1) {
        this.deserializeAs_FightTriggeredEffect(param1);
    };
    FightTriggeredEffect.prototype.deserializeAs_FightTriggeredEffect = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.param1 = param1.readInt();
        this.param2 = param1.readInt();
        this.param3 = param1.readInt();
        this.delay = param1.readShort();
    };
    FightTriggeredEffect.ID = 210;
    return FightTriggeredEffect;
})(AbstractFightDispellableEffect);
module.exports = FightTriggeredEffect;
