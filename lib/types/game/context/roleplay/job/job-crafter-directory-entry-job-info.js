var JobCrafterDirectoryEntryJobInfo = function() {
    this.jobId = 0;
    this.jobLevel = 0;
    this.free = false;
    this.minLevel = 0;
};

module.exports = function() {
    return new JobCrafterDirectoryEntryJobInfo();
};

JobCrafterDirectoryEntryJobInfo.prototype.serialize = function(output) {
    this.serializeAs_JobCrafterDirectoryEntryJobInfo(output);
};

JobCrafterDirectoryEntryJobInfo.prototype.deserialize = function(input) {
    this.deserializeAs_JobCrafterDirectoryEntryJobInfo(input);
};

JobCrafterDirectoryEntryJobInfo.prototype.serializeAs_JobCrafterDirectoryEntryJobInfo = function(param1) {
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
    } else {
        param1.writeByte(this.jobId);
        if (this.jobLevel < 1 || this.jobLevel > 200) {
            throw new Error("Forbidden value (" + this.jobLevel + ") on element jobLevel.");
        } else {
            param1.writeByte(this.jobLevel);
            param1.writeBoolean(this.free);
            if (this.minLevel < 0 || this.minLevel > 255) {
                throw new Error("Forbidden value (" + this.minLevel + ") on element minLevel.");
            } else {
                param1.writeByte(this.minLevel);
                return;
            }
        }
    }
};

JobCrafterDirectoryEntryJobInfo.prototype.deserializeAs_JobCrafterDirectoryEntryJobInfo = function(param1) {
    this.jobId = param1.readByte();
    if (this.jobId < 0) {
        throw new Error("Forbidden value (" + this.jobId + ") on element of JobCrafterDirectoryEntryJobInfo.jobId.");
    } else {
        this.jobLevel = param1.readUnsignedByte();
        if (this.jobLevel < 1 || this.jobLevel > 200) {
            throw new Error("Forbidden value (" + this.jobLevel + ") on element of JobCrafterDirectoryEntryJobInfo.jobLevel.");
        } else {
            this.free = param1.readBoolean();
            this.minLevel = param1.readUnsignedByte();
            if (this.minLevel < 0 || this.minLevel > 255) {
                throw new Error("Forbidden value (" + this.minLevel + ") on element of JobCrafterDirectoryEntryJobInfo.minLevel.");
            } else {
                return;
            }
        }
    }
};

JobCrafterDirectoryEntryJobInfo.prototype.getTypeId = function() {
    return 195;
};

JobCrafterDirectoryEntryJobInfo.prototype.getClassName = function() {
    return 'JobCrafterDirectoryEntryJobInfo';
};

module.exports.id = 195;
module.exports.JobCrafterDirectoryEntryJobInfo = JobCrafterDirectoryEntryJobInfo;