/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var JobCrafterDirectoryEntryPlayerInfo = require('./job-crafter-directory-entry-player-info');
var JobCrafterDirectoryEntryJobInfo = require('./job-crafter-directory-entry-job-info');
var JobCrafterDirectoryListEntry = (function () {
    function JobCrafterDirectoryListEntry() {
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
    }
    JobCrafterDirectoryListEntry.prototype.getTypeId = function () {
        return JobCrafterDirectoryListEntry.ID;
    };
    JobCrafterDirectoryListEntry.prototype.reset = function () {
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
    };
    JobCrafterDirectoryListEntry.prototype.serialize = function (param1) {
        this.serializeAs_JobCrafterDirectoryListEntry(param1);
    };
    JobCrafterDirectoryListEntry.prototype.serializeAs_JobCrafterDirectoryListEntry = function (param1) {
        this.playerInfo.serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1);
        this.jobInfo.serializeAs_JobCrafterDirectoryEntryJobInfo(param1);
    };
    JobCrafterDirectoryListEntry.prototype.deserialize = function (param1) {
        this.deserializeAs_JobCrafterDirectoryListEntry(param1);
    };
    JobCrafterDirectoryListEntry.prototype.deserializeAs_JobCrafterDirectoryListEntry = function (param1) {
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.playerInfo.deserialize(param1);
        this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
        this.jobInfo.deserialize(param1);
    };
    JobCrafterDirectoryListEntry.ID = 196;
    return JobCrafterDirectoryListEntry;
})();
module.exports = JobCrafterDirectoryListEntry;
