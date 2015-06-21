var FightResultExperienceData = function() {
    this.experience = 0;
    this.showExperience = false;
    this.experienceLevelFloor = 0;
    this.showExperienceLevelFloor = false;
    this.experienceNextLevelFloor = 0;
    this.showExperienceNextLevelFloor = false;
    this.experienceFightDelta = 0;
    this.showExperienceFightDelta = false;
    this.experienceForGuild = 0;
    this.showExperienceForGuild = false;
    this.experienceForMount = 0;
    this.showExperienceForMount = false;
    this.isIncarnationExperience = false;
    this.rerollExperienceMul = 0;
};

require('util').inherits(FightResultExperienceData, require('./fight-result-additional-data.js'));

module.exports = function() {
    return new FightResultExperienceData();
};

FightResultExperienceData.prototype.serialize = function(output) {
    this.serializeAs_FightResultExperienceData(output);
};

FightResultExperienceData.prototype.deserialize = function(input) {
    this.deserializeAs_FightResultExperienceData(input);
};

FightResultExperienceData.prototype.serializeAs_FightResultExperienceData = function(param1) {
    this.serializeAs_FightResultAdditionalData(param1);
    var _loc2_ = 0;
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.showExperience);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.showExperienceLevelFloor);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.showExperienceNextLevelFloor);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.showExperienceFightDelta);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 4, this.showExperienceForGuild);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 5, this.showExperienceForMount);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 6, this.isIncarnationExperience);
    param1.writeByte(_loc2_);
    if (this.experience < 0 || this.experience > 9.007199254740992E15) {
        throw new Error("Forbidden value (" + this.experience + ") on element experience.");
    } else {
        param1.writeVarLong(this.experience);
        if (this.experienceLevelFloor < 0 || this.experienceLevelFloor > 9.007199254740992E15) {
            throw new Error("Forbidden value (" + this.experienceLevelFloor + ") on element experienceLevelFloor.");
        } else {
            param1.writeVarLong(this.experienceLevelFloor);
            if (this.experienceNextLevelFloor < 0 || this.experienceNextLevelFloor > 9.007199254740992E15) {
                throw new Error("Forbidden value (" + this.experienceNextLevelFloor + ") on element experienceNextLevelFloor.");
            } else {
                param1.writeDouble(this.experienceNextLevelFloor);
                param1.writeVarInt(this.experienceFightDelta);
                if (this.experienceForGuild < 0) {
                    throw new Error("Forbidden value (" + this.experienceForGuild + ") on element experienceForGuild.");
                } else {
                    param1.writeVarInt(this.experienceForGuild);
                    if (this.experienceForMount < 0) {
                        throw new Error("Forbidden value (" + this.experienceForMount + ") on element experienceForMount.");
                    } else {
                        param1.writeVarInt(this.experienceForMount);
                        if (this.rerollExperienceMul < 0) {
                            throw new Error("Forbidden value (" + this.rerollExperienceMul + ") on element rerollExperienceMul.");
                        } else {
                            param1.writeByte(this.rerollExperienceMul);
                            return;
                        }
                    }
                }
            }
        }
    }
};

FightResultExperienceData.prototype.deserializeAs_FightResultExperienceData = function(param1) {
    this.deserializeAs_FightResultAdditionalData(param1);
    var _loc2_ = param1.readByte();
    this.showExperience = BooleanByteWrapper.getFlag(_loc2_, 0);
    this.showExperienceLevelFloor = BooleanByteWrapper.getFlag(_loc2_, 1);
    this.showExperienceNextLevelFloor = BooleanByteWrapper.getFlag(_loc2_, 2);
    this.showExperienceFightDelta = BooleanByteWrapper.getFlag(_loc2_, 3);
    this.showExperienceForGuild = BooleanByteWrapper.getFlag(_loc2_, 4);
    this.showExperienceForMount = BooleanByteWrapper.getFlag(_loc2_, 5);
    this.isIncarnationExperience = BooleanByteWrapper.getFlag(_loc2_, 6);
    this.experience = param1.readVarUhLong();
    if (this.experience < 0 || this.experience > 9.007199254740992E15) {
        throw new Error("Forbidden value (" + this.experience + ") on element of FightResultExperienceData.experience.");
    } else {
        this.experienceLevelFloor = param1.readVarUhLong();
        if (this.experienceLevelFloor < 0 || this.experienceLevelFloor > 9.007199254740992E15) {
            throw new Error("Forbidden value (" + this.experienceLevelFloor + ") on element of FightResultExperienceData.experienceLevelFloor.");
        } else {
            this.experienceNextLevelFloor = param1.readDouble();
            if (this.experienceNextLevelFloor < 0 || this.experienceNextLevelFloor > 9.007199254740992E15) {
                throw new Error("Forbidden value (" + this.experienceNextLevelFloor + ") on element of FightResultExperienceData.experienceNextLevelFloor.");
            } else {
                this.experienceFightDelta = param1.readVarInt();
                this.experienceForGuild = param1.readVarUhInt();
                if (this.experienceForGuild < 0) {
                    throw new Error("Forbidden value (" + this.experienceForGuild + ") on element of FightResultExperienceData.experienceForGuild.");
                } else {
                    this.experienceForMount = param1.readVarUhInt();
                    if (this.experienceForMount < 0) {
                        throw new Error("Forbidden value (" + this.experienceForMount + ") on element of FightResultExperienceData.experienceForMount.");
                    } else {
                        this.rerollExperienceMul = param1.readByte();
                        if (this.rerollExperienceMul < 0) {
                            throw new Error("Forbidden value (" + this.rerollExperienceMul + ") on element of FightResultExperienceData.rerollExperienceMul.");
                        } else {
                            return;
                        }
                    }
                }
            }
        }
    }
};

FightResultExperienceData.prototype.getTypeId = function() {
    return 192;
};

FightResultExperienceData.prototype.getClassName = function() {
    return 'FightResultExperienceData';
};

module.exports.id = 192;
module.exports.FightResultExperienceData = FightResultExperienceData;