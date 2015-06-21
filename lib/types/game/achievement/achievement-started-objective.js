var AchievementStartedObjective = module.exports = function() {
    this.value = 0;

    return this;
};

require('util').inherits(AchievementStartedObjective, require('./achievement-objective.js'));

AchievementStartedObjective.prototype.serialize = function(output) {
    this.serializeAs_AchievementStartedObjective(output);
};

AchievementStartedObjective.prototype.deserialize = function(input) {
    this.deserializeAs_AchievementStartedObjective(input);
};

AchievementStartedObjective.prototype.serializeAs_AchievementStartedObjective = function(param1) {
    this.serializeAs_AchievementObjective(param1);
    if (this.value < 0) {
        throw new Error("Forbidden value (" + this.value + ") on element value.");
    } else {
        param1.writeVarShort(this.value);
        return;
    }
};

AchievementStartedObjective.prototype.deserializeAs_AchievementStartedObjective = function(param1) {
    this.deserializeAs_AchievementObjective(param1);
    this.value = param1.readVarUhShort();
    if (this.value < 0) {
        throw new Error("Forbidden value (" + this.value + ") on element of AchievementStartedObjective.value.");
    } else {
        return;
    }
};

AchievementStartedObjective.prototype.getTypeId = function() {
    return 402;
};

AchievementStartedObjective.prototype.getClassName = function() {
    return 'AchievementStartedObjective';
};

module.exports.id = 402;