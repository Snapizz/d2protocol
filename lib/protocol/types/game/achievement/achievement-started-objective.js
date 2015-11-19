/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AchievementObjective = require('./achievement-objective');
var AchievementStartedObjective = (function (_super) {
    __extends(AchievementStartedObjective, _super);
    function AchievementStartedObjective() {
        this.value = 0;
        _super.call(this);
    }
    AchievementStartedObjective.prototype.getTypeId = function () {
        return AchievementStartedObjective.ID;
    };
    AchievementStartedObjective.prototype.reset = function () {
        this.value = 0;
    };
    AchievementStartedObjective.prototype.serialize = function (param1) {
        this.serializeAs_AchievementStartedObjective(param1);
    };
    AchievementStartedObjective.prototype.serializeAs_AchievementStartedObjective = function (param1) {
        _super.prototype.serializeAs_AchievementObjective.call(this, param1);
        if (this.value < 0) {
            throw new Error('Forbidden value (' + this.value + ') on element value.');
        }
        param1.writeVarShort(this.value);
    };
    AchievementStartedObjective.prototype.deserialize = function (param1) {
        this.deserializeAs_AchievementStartedObjective(param1);
    };
    AchievementStartedObjective.prototype.deserializeAs_AchievementStartedObjective = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.value = param1.readVarUhShort();
        if (this.value < 0) {
            throw new Error('Forbidden value (' + this.value + ') on element of AchievementStartedObjective.value.');
        }
    };
    AchievementStartedObjective.ID = 402;
    return AchievementStartedObjective;
})(AchievementObjective);
module.exports = AchievementStartedObjective;
