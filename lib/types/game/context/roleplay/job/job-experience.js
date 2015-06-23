var JobExperience = function() {
    this.jobId = 0;
    this.jobLevel = 0;
    this.jobXP = 0;
    this.jobXpLevelFloor = 0;
    this.jobXpNextLevelFloor = 0;
};

module.exports = function() {
    return new JobExperience();
};

JobExperience.prototype.serialize = function(output) {
    this.serializeAs_JobExperience(output);
};

JobExperience.prototype.deserialize = function(input) {
    this.deserializeAs_JobExperience(input);
};

JobExperience.prototype.serializeAs_JobExperience = function(param1) {
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
    } else {
        param1.writeByte(this.jobId);
        if (this.jobLevel < 0 || this.jobLevel > 255) {
            throw new Error("Forbidden value (" + this.jobLevel + ") on element jobLevel.");
        } else {
            param1.writeByte(this.jobLevel);
            if (this.jobXP < 0 || this.jobXP > 9.007199254740992E15) {
                throw new Error("Forbidden value (" + this.jobXP + ") on element jobXP.");
            } else {
                param1.writeVarLong(this.jobXP);
                if (this.jobXpLevelFloor < 0 || this.jobXpLevelFloor > 9.007199254740992E15) {
                    throw new Error("Forbidden value (" + this.jobXpLevelFloor + ") on element jobXpLevelFloor.");
                } else {
                    param1.writeVarLong(this.jobXpLevelFloor);
                    if (this.jobXpNextLevelFloor < 0 || this.jobXpNextLevelFloor > 9.007199254740992E15) {
                        throw new Error("Forbidden value (" + this.jobXpNextLevelFloor + ") on element jobXpNextLevelFloor.");
                    } else {
                        param1.writeVarLong(this.jobXpNextLevelFloor);
                        return;
                    }
                }
            }
        }
    }
};

JobExperience.prototype.deserializeAs_JobExperience = function(param1) {
    this.jobId = param1.readByte();
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element of JobExperience.jobId.");
    } else {
        this.jobLevel = param1.readUnsignedByte();
        if (this.jobLevel < 0 || this.jobLevel > 255) {
            throw new Error("Forbidden value (" + this.jobLevel + ") on element of JobExperience.jobLevel.");
        } else {
            this.jobXP = param1.readVarUhLong();
            if (this.jobXP < 0 || this.jobXP > 9.007199254740992E15) {
                throw new Error("Forbidden value (" + this.jobXP + ") on element of JobExperience.jobXP.");
            } else {
                this.jobXpLevelFloor = param1.readVarUhLong();
                if (this.jobXpLevelFloor < 0 || this.jobXpLevelFloor > 9.007199254740992E15) {
                    throw new Error("Forbidden value (" + this.jobXpLevelFloor + ") on element of JobExperience.jobXpLevelFloor.");
                } else {
                    this.jobXpNextLevelFloor = param1.readVarUhLong();
                    if (this.jobXpNextLevelFloor < 0 || this.jobXpNextLevelFloor > 9.007199254740992E15) {
                        throw new Error("Forbidden value (" + this.jobXpNextLevelFloor + ") on element of JobExperience.jobXpNextLevelFloor.");
                    } else {
                        return;
                    }
                }
            }
        }
    }
};

JobExperience.prototype.getTypeId = function() {
    return 98;
};

JobExperience.prototype.getClassName = function() {
    return 'JobExperience';
};

module.exports.id = 98;
module.exports.JobExperience = JobExperience;