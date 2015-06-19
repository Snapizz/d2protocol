var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var JobExperienceUpdateMessage = function() {
  this.experiencesUpdate;
};

util.inherits(JobExperienceUpdateMessage, BaseMessage);

JobExperienceUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_JobExperienceUpdateMessage(output);
};

JobExperienceUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobExperienceUpdateMessage(input);
};

JobExperienceUpdateMessage.prototype.serializeAs_JobExperienceUpdateMessage = function(output) {
  this.experiencesUpdate.serializeAs_JobExperience(output);
};

JobExperienceUpdateMessage.prototype.deserializeAs_JobExperienceUpdateMessage = function(input) {
  this.experiencesUpdate = new JobExperience();
  this.experiencesUpdate.deserialize(input);
};

JobExperienceUpdateMessage.prototype.getMessageId = function() {
  return 0;
};

JobExperienceUpdateMessage.prototype.getClassName = function() {
  return 'JobExperienceUpdateMessage';
};

module.exports.id = 0;
module.exports.class = JobExperienceUpdateMessage;