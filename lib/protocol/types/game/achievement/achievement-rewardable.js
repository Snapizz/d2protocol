/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var AchievementRewardable = (function () {
    function AchievementRewardable() {
        this.id = 0;
        this.finishedlevel = 0;
    }
    AchievementRewardable.prototype.getTypeId = function () {
        return AchievementRewardable.ID;
    };
    AchievementRewardable.prototype.reset = function () {
        this.id = 0;
        this.finishedlevel = 0;
    };
    AchievementRewardable.prototype.serialize = function (param1) {
        this.serializeAs_AchievementRewardable(param1);
    };
    AchievementRewardable.prototype.serializeAs_AchievementRewardable = function (param1) {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);
        if (this.finishedlevel < 0 || this.finishedlevel > 200) {
            throw new Error('Forbidden value (' + this.finishedlevel + ') on element finishedlevel.');
        }
        param1.writeByte(this.finishedlevel);
    };
    AchievementRewardable.prototype.deserialize = function (param1) {
        this.deserializeAs_AchievementRewardable(param1);
    };
    AchievementRewardable.prototype.deserializeAs_AchievementRewardable = function (param1) {
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of AchievementRewardable.id.');
        }
        this.finishedlevel = param1.readUnsignedByte();
        if (this.finishedlevel < 0 || this.finishedlevel > 200) {
            throw new Error('Forbidden value (' + this.finishedlevel + ') on element of AchievementRewardable.finishedlevel.');
        }
    };
    AchievementRewardable.ID = 412;
    return AchievementRewardable;
})();
module.exports = AchievementRewardable;
