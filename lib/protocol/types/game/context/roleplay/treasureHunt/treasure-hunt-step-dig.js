/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TreasureHuntStep = require('./treasure-hunt-step');
var TreasureHuntStepDig = (function (_super) {
    __extends(TreasureHuntStepDig, _super);
    function TreasureHuntStepDig() {
        _super.call(this);
    }
    TreasureHuntStepDig.prototype.getTypeId = function () {
        return TreasureHuntStepDig.ID;
    };
    TreasureHuntStepDig.prototype.reset = function () {
    };
    TreasureHuntStepDig.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntStepDig(param1);
    };
    TreasureHuntStepDig.prototype.serializeAs_TreasureHuntStepDig = function (param1) {
    };
    TreasureHuntStepDig.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntStepDig(param1);
    };
    TreasureHuntStepDig.prototype.deserializeAs_TreasureHuntStepDig = function (param1) {
    };
    TreasureHuntStepDig.ID = 465;
    return TreasureHuntStepDig;
})(TreasureHuntStep);
module.exports = TreasureHuntStepDig;
