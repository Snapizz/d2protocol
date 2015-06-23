var JobCrafterDirectorySettings = function() {
    this.jobId = 0;
    this.minLevel = 0;
    this.free = false;
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
        if (this.minLevel < 0 || this.minLevel > 255) {
            throw new Error("Forbidden value (" + this.minLevel + ") on element minLevel.");
        } else {
            param1.writeByte(this.minLevel);
            param1.writeBoolean(this.free);
            return;
        }
    }
};

JobCrafterDirectorySettings.prototype.deserializeAs_JobCrafterDirectorySettings = function(param1) {
    this.jobId = param1.readByte();
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element of JobCrafterDirectorySettings.jobId.");
    } else {
        this.minLevel = param1.readUnsignedByte();
        if (this.minLevel < 0 || this.minLevel > 255) {
            throw new Error("Forbidden value (" + this.minLevel + ") on element of JobCrafterDirectorySettings.minLevel.");
        } else {
            this.free = param1.readBoolean();
            return;
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