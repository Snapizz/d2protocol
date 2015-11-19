/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var JobCrafterDirectorySettings = (function () {
    function JobCrafterDirectorySettings() {
        this.jobId = 0;
        this.minLevel = 0;
        this.free = false;
    }
    JobCrafterDirectorySettings.prototype.getTypeId = function () {
        return JobCrafterDirectorySettings.ID;
    };
    JobCrafterDirectorySettings.prototype.reset = function () {
        this.jobId = 0;
        this.minLevel = 0;
        this.free = false;
    };
    JobCrafterDirectorySettings.prototype.serialize = function (param1) {
        this.serializeAs_JobCrafterDirectorySettings(param1);
    };
    JobCrafterDirectorySettings.prototype.serializeAs_JobCrafterDirectorySettings = function (param1) {
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
        }
        param1.writeByte(this.jobId);
        if (this.minLevel < 0 || this.minLevel > 255) {
            throw new Error('Forbidden value (' + this.minLevel + ') on element minLevel.');
        }
        param1.writeByte(this.minLevel);
        param1.writeBoolean(this.free);
    };
    JobCrafterDirectorySettings.prototype.deserialize = function (param1) {
        this.deserializeAs_JobCrafterDirectorySettings(param1);
    };
    JobCrafterDirectorySettings.prototype.deserializeAs_JobCrafterDirectorySettings = function (param1) {
        this.jobId = param1.readByte();
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element of JobCrafterDirectorySettings.jobId.');
        }
        this.minLevel = param1.readUnsignedByte();
        if (this.minLevel < 0 || this.minLevel > 255) {
            throw new Error('Forbidden value (' + this.minLevel + ') on element of JobCrafterDirectorySettings.minLevel.');
        }
        this.free = param1.readBoolean();
    };
    JobCrafterDirectorySettings.ID = 97;
    return JobCrafterDirectorySettings;
})();
module.exports = JobCrafterDirectorySettings;
