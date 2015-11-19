/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TreasureHuntStep = require('./treasure-hunt-step');
var TreasureHuntStepFollowDirectionToPOI = (function (_super) {
    __extends(TreasureHuntStepFollowDirectionToPOI, _super);
    function TreasureHuntStepFollowDirectionToPOI() {
        this.direction = 1;
        this.poiLabelId = 0;
        _super.call(this);
    }
    TreasureHuntStepFollowDirectionToPOI.prototype.getTypeId = function () {
        return TreasureHuntStepFollowDirectionToPOI.ID;
    };
    TreasureHuntStepFollowDirectionToPOI.prototype.reset = function () {
        this.direction = 1;
        this.poiLabelId = 0;
    };
    TreasureHuntStepFollowDirectionToPOI.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntStepFollowDirectionToPOI(param1);
    };
    TreasureHuntStepFollowDirectionToPOI.prototype.serializeAs_TreasureHuntStepFollowDirectionToPOI = function (param1) {
        _super.prototype.serializeAs_TreasureHuntStep.call(this, param1);
        param1.writeByte(this.direction);
        if (this.poiLabelId < 0) {
            throw new Error('Forbidden value (' + this.poiLabelId + ') on element poiLabelId.');
        }
        param1.writeVarShort(this.poiLabelId);
    };
    TreasureHuntStepFollowDirectionToPOI.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntStepFollowDirectionToPOI(param1);
    };
    TreasureHuntStepFollowDirectionToPOI.prototype.deserializeAs_TreasureHuntStepFollowDirectionToPOI = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.direction = param1.readByte();
        if (this.direction < 0) {
            throw new Error('Forbidden value (' + this.direction + ') on element of TreasureHuntStepFollowDirectionToPOI.direction.');
        }
        this.poiLabelId = param1.readVarUhShort();
        if (this.poiLabelId < 0) {
            throw new Error('Forbidden value (' + this.poiLabelId + ') on element of TreasureHuntStepFollowDirectionToPOI.poiLabelId.');
        }
    };
    TreasureHuntStepFollowDirectionToPOI.ID = 461;
    return TreasureHuntStepFollowDirectionToPOI;
})(TreasureHuntStep);
module.exports = TreasureHuntStepFollowDirectionToPOI;
