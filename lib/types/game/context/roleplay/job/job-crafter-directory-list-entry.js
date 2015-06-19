var JobCrafterDirectoryListEntry = function() {
  this.playerInfo;
  this.jobInfo;
};



JobCrafterDirectoryListEntry.prototype.serialize = function(output) {
  this.serializeAs_JobCrafterDirectoryListEntry(output);
};

JobCrafterDirectoryListEntry.prototype.deserialize = function(input) {
  this.deserializeAs_JobCrafterDirectoryListEntry(input);
};

JobCrafterDirectoryListEntry.prototype.serializeAs_JobCrafterDirectoryListEntry = function(output) {
  this.playerInfo.serializeAs_JobCrafterDirectoryEntryPlayerInfo(output);
  this.jobInfo.serializeAs_JobCrafterDirectoryEntryJobInfo(output);
};

JobCrafterDirectoryListEntry.prototype.deserializeAs_JobCrafterDirectoryListEntry = function(input) {
  this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
  this.playerInfo.deserialize(input);
  this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
  this.jobInfo.deserialize(input);
};

JobCrafterDirectoryListEntry.prototype.getTypeId = function() {
  return 196;
};

JobCrafterDirectoryListEntry.prototype.getClassName = function() {
  return 'JobCrafterDirectoryListEntry';
};

module.exports.id = 196;
module.exports.class = JobCrafterDirectoryListEntry;