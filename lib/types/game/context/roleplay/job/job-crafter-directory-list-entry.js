var JobCrafterDirectoryListEntry = function() {
    this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
    this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
};

module.exports = function() {
    return new JobCrafterDirectoryListEntry();
};

JobCrafterDirectoryListEntry.prototype.serialize = function(output) {
    this.serializeAs_JobCrafterDirectoryListEntry(output);
};

JobCrafterDirectoryListEntry.prototype.deserialize = function(input) {
    this.deserializeAs_JobCrafterDirectoryListEntry(input);
};

JobCrafterDirectoryListEntry.prototype.serializeAs_JobCrafterDirectoryListEntry = function(param1) {
    this.playerInfo.serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1);
    this.jobInfo.serializeAs_JobCrafterDirectoryEntryJobInfo(param1);
};

JobCrafterDirectoryListEntry.prototype.deserializeAs_JobCrafterDirectoryListEntry = function(param1) {
    this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
    this.playerInfo.deserialize(param1);
    this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
    this.jobInfo.deserialize(param1);
};

JobCrafterDirectoryListEntry.prototype.getTypeId = function() {
    return 196;
};

JobCrafterDirectoryListEntry.prototype.getClassName = function() {
    return 'JobCrafterDirectoryListEntry';
};

module.exports.id = 196;
module.exports.JobCrafterDirectoryListEntry = JobCrafterDirectoryListEntry;