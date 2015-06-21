var AchievementRewardable = function() {
    this.id = 0;
    this.finishedlevel = 0;
};

AchievementRewardable.prototype.serialize = function(output) {
    this.serializeAs_AchievementRewardable(output);
};

AchievementRewardable.prototype.deserialize = function(input) {
    this.deserializeAs_AchievementRewardable(input);
};

AchievementRewardable.prototype.serializeAs_AchievementRewardable = function(param1) {
    if (this.id < 0) {
        throw new Error("Forbidden value (" + this.id + ") on element id.");
    } else {
        param1.writeVarShort(this.id);
        if (this.finishedlevel < 0 || this.finishedlevel > 200) {
            throw new Error("Forbidden value (" + this.finishedlevel + ") on element finishedlevel.");
        } else {
            param1.writeByte(this.finishedlevel);
            return;
        }
    }
};

AchievementRewardable.prototype.deserializeAs_AchievementRewardable = function(param1) {
    this.id = param1.readVarUhShort();
    if (this.id < 0) {
        throw new Error("Forbidden value (" + this.id + ") on element of AchievementRewardable.id.");
    } else {
        this.finishedlevel = param1.readUnsignedByte();
        if (this.finishedlevel < 0 || this.finishedlevel > 200) {
            throw new Error("Forbidden value (" + this.finishedlevel + ") on element of AchievementRewardable.finishedlevel.");
        } else {
            return;
        }
    }
};

AchievementRewardable.prototype.getTypeId = function() {
    return 412;
};

AchievementRewardable.prototype.getClassName = function() {
    return 'AchievementRewardable';
};

module.exports.id = 412;
module.exports.class = AchievementRewardable;
module.exports.getInstance = function() {
    return new AchievementRewardable;
};