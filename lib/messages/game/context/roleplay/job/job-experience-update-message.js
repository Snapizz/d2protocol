var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var JobExperience = require('../../../../../types/game/context/roleplay/job/job-experience.js').class;

var JobExperienceUpdateMessage = function() {
    this.experiencesUpdate = new JobExperience();
};

require('util').inherits(JobExperienceUpdateMessage, d2com.NetworkMessage.class);

JobExperienceUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_JobExperienceUpdateMessage(output);
};

JobExperienceUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_JobExperienceUpdateMessage(input);
};

JobExperienceUpdateMessage.prototype.serializeAs_JobExperienceUpdateMessage = function(param1) {
    this.experiencesUpdate.serializeAs_JobExperience(param1);
};

JobExperienceUpdateMessage.prototype.deserializeAs_JobExperienceUpdateMessage = function(param1) {
    this.experiencesUpdate = new JobExperience();
    this.experiencesUpdate.deserialize(param1);
};

JobExperienceUpdateMessage.prototype.getMessageId = function() {
    return 5654;
};

JobExperienceUpdateMessage.prototype.getClassName = function() {
    return 'JobExperienceUpdateMessage';
};

module.exports.id = 5654;
module.exports.class = JobExperienceUpdateMessage;
module.exports.getInstance = function() {
    return new JobExperienceUpdateMessage;
};