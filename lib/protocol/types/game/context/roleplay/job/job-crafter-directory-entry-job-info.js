/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var JobCrafterDirectoryEntryJobInfo = (function () {
    function JobCrafterDirectoryEntryJobInfo() {
        this.jobId = 0;
        this.jobLevel = 0;
        this.free = false;
        this.minLevel = 0;
    }
    JobCrafterDirectoryEntryJobInfo.prototype.getTypeId = function () {
        return JobCrafterDirectoryEntryJobInfo.ID;
    };
    JobCrafterDirectoryEntryJobInfo.prototype.reset = function () {
        this.jobId = 0;
        this.jobLevel = 0;
        this.free = false;
        this.minLevel = 0;
    };
    JobCrafterDirectoryEntryJobInfo.prototype.serialize = function (param1) {
        this.serializeAs_JobCrafterDirectoryEntryJobInfo(param1);
    };
    JobCrafterDirectoryEntryJobInfo.prototype.serializeAs_JobCrafterDirectoryEntryJobInfo = function (param1) {
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
        }
        param1.writeByte(this.jobId);
        if (this.jobLevel < 1 || this.jobLevel > 200) {
            throw new Error('Forbidden value (' + this.jobLevel + ') on element jobLevel.');
        }
        param1.writeByte(this.jobLevel);
        param1.writeBoolean(this.free);
        if (this.minLevel < 0 || this.minLevel > 255) {
            throw new Error('Forbidden value (' + this.minLevel + ') on element minLevel.');
        }
        param1.writeByte(this.minLevel);
    };
    JobCrafterDirectoryEntryJobInfo.prototype.deserialize = function (param1) {
        this.deserializeAs_JobCrafterDirectoryEntryJobInfo(param1);
    };
    JobCrafterDirectoryEntryJobInfo.prototype.deserializeAs_JobCrafterDirectoryEntryJobInfo = function (param1) {
        this.jobId = param1.readByte();
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element of JobCrafterDirectoryEntryJobInfo.jobId.');
        }
        this.jobLevel = param1.readUnsignedByte();
        if (this.jobLevel < 1 || this.jobLevel > 200) {
            throw new Error('Forbidden value (' + this.jobLevel + ') on element of JobCrafterDirectoryEntryJobInfo.jobLevel.');
        }
        this.free = param1.readBoolean();
        this.minLevel = param1.readUnsignedByte();
        if (this.minLevel < 0 || this.minLevel > 255) {
            throw new Error('Forbidden value (' + this.minLevel + ') on element of JobCrafterDirectoryEntryJobInfo.minLevel.');
        }
    };
    JobCrafterDirectoryEntryJobInfo.ID = 195;
    return JobCrafterDirectoryEntryJobInfo;
})();
module.exports = JobCrafterDirectoryEntryJobInfo;
