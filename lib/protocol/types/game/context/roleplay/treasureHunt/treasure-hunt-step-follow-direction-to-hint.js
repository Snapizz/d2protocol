/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TreasureHuntStep = require('./treasure-hunt-step');
var TreasureHuntStepFollowDirectionToHint = (function (_super) {
    __extends(TreasureHuntStepFollowDirectionToHint, _super);
    function TreasureHuntStepFollowDirectionToHint() {
        this.direction = 1;
        this.npcId = 0;
        _super.call(this);
    }
    TreasureHuntStepFollowDirectionToHint.prototype.getTypeId = function () {
        return TreasureHuntStepFollowDirectionToHint.ID;
    };
    TreasureHuntStepFollowDirectionToHint.prototype.reset = function () {
        this.direction = 1;
        this.npcId = 0;
    };
    TreasureHuntStepFollowDirectionToHint.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntStepFollowDirectionToHint(param1);
    };
    TreasureHuntStepFollowDirectionToHint.prototype.serializeAs_TreasureHuntStepFollowDirectionToHint = function (param1) {
        _super.prototype.serializeAs_TreasureHuntStep.call(this, param1);
        param1.writeByte(this.direction);
        if (this.npcId < 0) {
            throw new Error('Forbidden value (' + this.npcId + ') on element npcId.');
        }
        param1.writeVarShort(this.npcId);
    };
    TreasureHuntStepFollowDirectionToHint.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntStepFollowDirectionToHint(param1);
    };
    TreasureHuntStepFollowDirectionToHint.prototype.deserializeAs_TreasureHuntStepFollowDirectionToHint = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.direction = param1.readByte();
        if (this.direction < 0) {
            throw new Error('Forbidden value (' + this.direction + ') on element of TreasureHuntStepFollowDirectionToHint.direction.');
        }
        this.npcId = param1.readVarUhShort();
        if (this.npcId < 0) {
            throw new Error('Forbidden value (' + this.npcId + ') on element of TreasureHuntStepFollowDirectionToHint.npcId.');
        }
    };
    TreasureHuntStepFollowDirectionToHint.ID = 472;
    return TreasureHuntStepFollowDirectionToHint;
})(TreasureHuntStep);
module.exports = TreasureHuntStepFollowDirectionToHint;
