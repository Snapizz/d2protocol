var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var JobLevelUpMessage = function() {
  this.newLevel = 0;
  this.jobsDescription;
};

util.inherits(JobLevelUpMessage, BaseMessage);

JobLevelUpMessage.prototype.serialize = function(output) {
  this.serializeAs_JobLevelUpMessage(output);
};

JobLevelUpMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobLevelUpMessage(input);
};

JobLevelUpMessage.prototype.serializeAs_JobLevelUpMessage = function(output) {
  if (this.newLevel < 0) {
    throw (new Error((("Forbidden value (" + this.newLevel) + ") on element newLevel.")));
  };
  output.writeByte(this.newLevel);
  this.jobsDescription.serializeAs_JobDescription(output);
};

JobLevelUpMessage.prototype.deserializeAs_JobLevelUpMessage = function(input) {
  this.newLevel = input.readByte();
  if (this.newLevel < 0) {
    throw (new Error((("Forbidden value (" + this.newLevel) + ") on element of JobLevelUpMessage.newLevel.")));
  };
  this.jobsDescription = new JobDescription();
  this.jobsDescription.deserialize(input);
};

JobLevelUpMessage.prototype.getMessageId = function() {
  return 5656;
};

JobLevelUpMessage.prototype.getClassName = function() {
  return 'JobLevelUpMessage';
};

module.exports.id = 5656;
module.exports.class = JobLevelUpMessage;