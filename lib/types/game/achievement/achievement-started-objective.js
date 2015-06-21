var AchievementStartedObjective = function() {
    this.value = 0;
};

require('util').inherits(AchievementStartedObjective, require('./achievement-objective.js').class);

AchievementStartedObjective.prototype.serialize = function(output) {
    this.serializeAs_AchievementStartedObjective(output);
};

AchievementStartedObjective.prototype.deserialize = function(input) {
    this.deserializeAs_AchievementStartedObjective(input);
};

AchievementStartedObjective.prototype.serializeAs_AchievementStartedObjective = function(param1) {
    this.serializeAs_AchievementObjectiveAs_AchievementObjective(param1);
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
module.exports.class = AchievementStartedObjective;
module.exports.getInstance = function() {
    return new AchievementStartedObjective;
};