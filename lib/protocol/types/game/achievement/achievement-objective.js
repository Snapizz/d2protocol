/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var AchievementObjective = (function () {
    function AchievementObjective() {
        this.id = 0;
        this.maxValue = 0;
    }
    AchievementObjective.prototype.getTypeId = function () {
        return AchievementObjective.ID;
    };
    AchievementObjective.prototype.reset = function () {
        this.id = 0;
        this.maxValue = 0;
    };
    AchievementObjective.prototype.serialize = function (param1) {
        this.serializeAs_AchievementObjective(param1);
    };
    AchievementObjective.prototype.serializeAs_AchievementObjective = function (param1) {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarInt(this.id);
        if (this.maxValue < 0) {
            throw new Error('Forbidden value (' + this.maxValue + ') on element maxValue.');
        }
        param1.writeVarShort(this.maxValue);
    };
    AchievementObjective.prototype.deserialize = function (param1) {
        this.deserializeAs_AchievementObjective(param1);
    };
    AchievementObjective.prototype.deserializeAs_AchievementObjective = function (param1) {
        this.id = param1.readVarUhInt();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of AchievementObjective.id.');
        }
        this.maxValue = param1.readVarUhShort();
        if (this.maxValue < 0) {
            throw new Error('Forbidden value (' + this.maxValue + ') on element of AchievementObjective.maxValue.');
        }
    };
    AchievementObjective.ID = 404;
    return AchievementObjective;
})();
module.exports = AchievementObjective;
