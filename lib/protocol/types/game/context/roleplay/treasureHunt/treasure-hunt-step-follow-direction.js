/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TreasureHuntStep = require('./treasure-hunt-step');
var TreasureHuntStepFollowDirection = (function (_super) {
    __extends(TreasureHuntStepFollowDirection, _super);
    function TreasureHuntStepFollowDirection() {
        this.direction = 1;
        this.mapCount = 0;
        _super.call(this);
    }
    TreasureHuntStepFollowDirection.prototype.getTypeId = function () {
        return TreasureHuntStepFollowDirection.ID;
    };
    TreasureHuntStepFollowDirection.prototype.reset = function () {
        this.direction = 1;
        this.mapCount = 0;
    };
    TreasureHuntStepFollowDirection.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntStepFollowDirection(param1);
    };
    TreasureHuntStepFollowDirection.prototype.serializeAs_TreasureHuntStepFollowDirection = function (param1) {
        _super.prototype.serializeAs_TreasureHuntStep.call(this, param1);
        param1.writeByte(this.direction);
        if (this.mapCount < 0) {
            throw new Error('Forbidden value (' + this.mapCount + ') on element mapCount.');
        }
        param1.writeVarShort(this.mapCount);
    };
    TreasureHuntStepFollowDirection.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntStepFollowDirection(param1);
    };
    TreasureHuntStepFollowDirection.prototype.deserializeAs_TreasureHuntStepFollowDirection = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.direction = param1.readByte();
        if (this.direction < 0) {
            throw new Error('Forbidden value (' + this.direction + ') on element of TreasureHuntStepFollowDirection.direction.');
        }
        this.mapCount = param1.readVarUhShort();
        if (this.mapCount < 0) {
            throw new Error('Forbidden value (' + this.mapCount + ') on element of TreasureHuntStepFollowDirection.mapCount.');
        }
    };
    TreasureHuntStepFollowDirection.ID = 468;
    return TreasureHuntStepFollowDirection;
})(TreasureHuntStep);
module.exports = TreasureHuntStepFollowDirection;
