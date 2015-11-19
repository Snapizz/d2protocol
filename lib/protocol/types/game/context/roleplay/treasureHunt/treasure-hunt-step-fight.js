/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TreasureHuntStep = require('./treasure-hunt-step');
var TreasureHuntStepFight = (function (_super) {
    __extends(TreasureHuntStepFight, _super);
    function TreasureHuntStepFight() {
        _super.call(this);
    }
    TreasureHuntStepFight.prototype.getTypeId = function () {
        return TreasureHuntStepFight.ID;
    };
    TreasureHuntStepFight.prototype.reset = function () {
    };
    TreasureHuntStepFight.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntStepFight(param1);
    };
    TreasureHuntStepFight.prototype.serializeAs_TreasureHuntStepFight = function (param1) {
    };
    TreasureHuntStepFight.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntStepFight(param1);
    };
    TreasureHuntStepFight.prototype.deserializeAs_TreasureHuntStepFight = function (param1) {
    };
    TreasureHuntStepFight.ID = 462;
    return TreasureHuntStepFight;
})(TreasureHuntStep);
module.exports = TreasureHuntStepFight;
