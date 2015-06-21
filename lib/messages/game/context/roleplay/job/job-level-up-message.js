var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var JobDescription = require('../../../../../types/game/context/roleplay/job/job-description.js').JobDescription;

var JobLevelUpMessage = function() {
    this.newLevel = 0;
    this.jobsDescription = new JobDescription();
};

require('util').inherits(JobLevelUpMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new JobLevelUpMessage();
};

JobLevelUpMessage.prototype.serialize = function(output) {
    this.serializeAs_JobLevelUpMessage(output);
};

JobLevelUpMessage.prototype.deserialize = function(input) {
    this.deserializeAs_JobLevelUpMessage(input);
};

JobLevelUpMessage.prototype.serializeAs_JobLevelUpMessage = function(param1) {
    if (this.newLevel < 0) {
        throw new Error("Forbidden value (" + this.newLevel + ") on element newLevel.");
    } else {
        param1.writeByte(this.newLevel);
        this.jobsDescription.serializeAs_JobDescription(param1);
        return;
    }
};

JobLevelUpMessage.prototype.deserializeAs_JobLevelUpMessage = function(param1) {
    this.newLevel = param1.readByte();
    if (this.newLevel < 0) {
        throw new Error("Forbidden value (" + this.newLevel + ") on element of JobLevelUpMessage.newLevel.");
    } else {
        this.jobsDescription = new JobDescription();
        this.jobsDescription.deserialize(param1);
        return;
    }
};

JobLevelUpMessage.prototype.getMessageId = function() {
    return 5656;
};

JobLevelUpMessage.prototype.getClassName = function() {
    return 'JobLevelUpMessage';
};

module.exports.id = 5656;
module.exports.JobLevelUpMessage = JobLevelUpMessage;