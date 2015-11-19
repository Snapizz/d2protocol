/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var JobExperience = (function () {
    function JobExperience() {
        this.jobId = 0;
        this.jobLevel = 0;
        this.jobXP = 0;
        this.jobXpLevelFloor = 0;
        this.jobXpNextLevelFloor = 0;
    }
    JobExperience.prototype.getTypeId = function () {
        return JobExperience.ID;
    };
    JobExperience.prototype.reset = function () {
        this.jobId = 0;
        this.jobLevel = 0;
        this.jobXP = 0;
        this.jobXpLevelFloor = 0;
        this.jobXpNextLevelFloor = 0;
    };
    JobExperience.prototype.serialize = function (param1) {
        this.serializeAs_JobExperience(param1);
    };
    JobExperience.prototype.serializeAs_JobExperience = function (param1) {
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
        }
        param1.writeByte(this.jobId);
        if (this.jobLevel < 0 || this.jobLevel > 255) {
            throw new Error('Forbidden value (' + this.jobLevel + ') on element jobLevel.');
        }
        param1.writeByte(this.jobLevel);
        if (this.jobXP < 0 || this.jobXP > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.jobXP + ') on element jobXP.');
        }
        param1.writeVarLong(this.jobXP);
        if (this.jobXpLevelFloor < 0 || this.jobXpLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.jobXpLevelFloor + ') on element jobXpLevelFloor.');
        }
        param1.writeVarLong(this.jobXpLevelFloor);
        if (this.jobXpNextLevelFloor < 0 || this.jobXpNextLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.jobXpNextLevelFloor + ') on element jobXpNextLevelFloor.');
        }
        param1.writeVarLong(this.jobXpNextLevelFloor);
    };
    JobExperience.prototype.deserialize = function (param1) {
        this.deserializeAs_JobExperience(param1);
    };
    JobExperience.prototype.deserializeAs_JobExperience = function (param1) {
        this.jobId = param1.readByte();
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element of JobExperience.jobId.');
        }
        this.jobLevel = param1.readUnsignedByte();
        if (this.jobLevel < 0 || this.jobLevel > 255) {
            throw new Error('Forbidden value (' + this.jobLevel + ') on element of JobExperience.jobLevel.');
        }
        this.jobXP = param1.readVarUhLong();
        if (this.jobXP < 0 || this.jobXP > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.jobXP + ') on element of JobExperience.jobXP.');
        }
        this.jobXpLevelFloor = param1.readVarUhLong();
        if (this.jobXpLevelFloor < 0 || this.jobXpLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.jobXpLevelFloor + ') on element of JobExperience.jobXpLevelFloor.');
        }
        this.jobXpNextLevelFloor = param1.readVarUhLong();
        if (this.jobXpNextLevelFloor < 0 || this.jobXpNextLevelFloor > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.jobXpNextLevelFloor + ') on element of JobExperience.jobXpNextLevelFloor.');
        }
    };
    JobExperience.ID = 98;
    return JobExperience;
})();
module.exports = JobExperience;
