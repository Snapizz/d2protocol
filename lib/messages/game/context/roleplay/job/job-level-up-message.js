var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var JobDescription = require('../../../../../types/game/context/roleplay/job/job-description.js').class;

var JobLevelUpMessage = function() {
  this.newLevel = 0;
  this.jobsDescription = new JobDescription();
};

util.inherits(JobLevelUpMessage, BaseMessage);

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
module.exports.class = JobLevelUpMessage;
module.exports.getInstance = function() {
  return new JobLevelUpMessage();
};