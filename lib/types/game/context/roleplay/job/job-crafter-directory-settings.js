var JobCrafterDirectorySettings = function() {
    this.jobId = 0;
    this.minSlot = 0;
    this.userDefinedParams = 0;
};

module.exports = function() {
    return new JobCrafterDirectorySettings();
};

JobCrafterDirectorySettings.prototype.serialize = function(output) {
    this.serializeAs_JobCrafterDirectorySettings(output);
};

JobCrafterDirectorySettings.prototype.deserialize = function(input) {
    this.deserializeAs_JobCrafterDirectorySettings(input);
};

JobCrafterDirectorySettings.prototype.serializeAs_JobCrafterDirectorySettings = function(param1) {
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
    } else {
        param1.writeByte(this.jobId);
        if (this.minSlot < 0 || this.minSlot > 9) {
            throw new Error("Forbidden value (" + this.minSlot + ") on element minSlot.");
        } else {
            param1.writeByte(this.minSlot);
            if (this.userDefinedParams < 0) {
                throw new Error("Forbidden value (" + this.userDefinedParams + ") on element userDefinedParams.");
            } else {
                param1.writeByte(this.userDefinedParams);
                return;
            }
        }
    }
};

JobCrafterDirectorySettings.prototype.deserializeAs_JobCrafterDirectorySettings = function(param1) {
    this.jobId = param1.readByte();
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element of JobCrafterDirectorySettings.jobId.");
    } else {
        this.minSlot = param1.readByte();
        if (this.minSlot < 0 || this.minSlot > 9) {
            throw new Error("Forbidden value (" + this.minSlot + ") on element of JobCrafterDirectorySettings.minSlot.");
        } else {
            this.userDefinedParams = param1.readByte();
            if (this.userDefinedParams < 0) {
                throw new Error("Forbidden value (" + this.userDefinedParams + ") on element of JobCrafterDirectorySettings.userDefinedParams.");
            } else {
                return;
            }
        }
    }
};

JobCrafterDirectorySettings.prototype.getTypeId = function() {
    return 97;
};

JobCrafterDirectorySettings.prototype.getClassName = function() {
    return 'JobCrafterDirectorySettings';
};

module.exports.id = 97;
module.exports.JobCrafterDirectorySettings = JobCrafterDirectorySettings;