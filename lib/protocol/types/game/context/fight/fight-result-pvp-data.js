/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightResultAdditionalData = require('./fight-result-additional-data');
var FightResultPvpData = (function (_super) {
    __extends(FightResultPvpData, _super);
    function FightResultPvpData() {
        this.grade = 0;
        this.minHonorForGrade = 0;
        this.maxHonorForGrade = 0;
        this.honor = 0;
        this.honorDelta = 0;
        _super.call(this);
    }
    FightResultPvpData.prototype.getTypeId = function () {
        return FightResultPvpData.ID;
    };
    FightResultPvpData.prototype.reset = function () {
        this.grade = 0;
        this.minHonorForGrade = 0;
        this.maxHonorForGrade = 0;
        this.honor = 0;
        this.honorDelta = 0;
    };
    FightResultPvpData.prototype.serialize = function (param1) {
        this.serializeAs_FightResultPvpData(param1);
    };
    FightResultPvpData.prototype.serializeAs_FightResultPvpData = function (param1) {
        _super.prototype.serializeAs_FightResultAdditionalData.call(this, param1);
        if (this.grade < 0 || this.grade > 255) {
            throw new Error('Forbidden value (' + this.grade + ') on element grade.');
        }
        param1.writeByte(this.grade);
        if (this.minHonorForGrade < 0 || this.minHonorForGrade > 20000) {
            throw new Error('Forbidden value (' + this.minHonorForGrade + ') on element minHonorForGrade.');
        }
        param1.writeVarShort(this.minHonorForGrade);
        if (this.maxHonorForGrade < 0 || this.maxHonorForGrade > 20000) {
            throw new Error('Forbidden value (' + this.maxHonorForGrade + ') on element maxHonorForGrade.');
        }
        param1.writeVarShort(this.maxHonorForGrade);
        if (this.honor < 0 || this.honor > 20000) {
            throw new Error('Forbidden value (' + this.honor + ') on element honor.');
        }
        param1.writeVarShort(this.honor);
        param1.writeVarShort(this.honorDelta);
    };
    FightResultPvpData.prototype.deserialize = function (param1) {
        this.deserializeAs_FightResultPvpData(param1);
    };
    FightResultPvpData.prototype.deserializeAs_FightResultPvpData = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.grade = param1.readUnsignedByte();
        if (this.grade < 0 || this.grade > 255) {
            throw new Error('Forbidden value (' + this.grade + ') on element of FightResultPvpData.grade.');
        }
        this.minHonorForGrade = param1.readVarUhShort();
        if (this.minHonorForGrade < 0 || this.minHonorForGrade > 20000) {
            throw new Error('Forbidden value (' + this.minHonorForGrade + ') on element of FightResultPvpData.minHonorForGrade.');
        }
        this.maxHonorForGrade = param1.readVarUhShort();
        if (this.maxHonorForGrade < 0 || this.maxHonorForGrade > 20000) {
            throw new Error('Forbidden value (' + this.maxHonorForGrade + ') on element of FightResultPvpData.maxHonorForGrade.');
        }
        this.honor = param1.readVarUhShort();
        if (this.honor < 0 || this.honor > 20000) {
            throw new Error('Forbidden value (' + this.honor + ') on element of FightResultPvpData.honor.');
        }
        this.honorDelta = param1.readVarShort();
    };
    FightResultPvpData.ID = 190;
    return FightResultPvpData;
})(FightResultAdditionalData);
module.exports = FightResultPvpData;
