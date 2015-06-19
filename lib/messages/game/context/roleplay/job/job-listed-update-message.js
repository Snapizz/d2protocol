var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var JobListedUpdateMessage = function() {
  this.addedOrDeleted = false;
  this.jobId = 0;
};

util.inherits(JobListedUpdateMessage, BaseMessage);

JobListedUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_JobListedUpdateMessage(output);
};

JobListedUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobListedUpdateMessage(input);
};

JobListedUpdateMessage.prototype.serializeAs_JobListedUpdateMessage = function(output) {
  output.writeBoolean(this.addedOrDeleted);
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element jobId.")));
  };
  output.writeByte(this.jobId);
};

JobListedUpdateMessage.prototype.deserializeAs_JobListedUpdateMessage = function(input) {
  this.addedOrDeleted = input.readBoolean();
  this.jobId = input.readByte();
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element of JobListedUpdateMessage.jobId.")));
  };
};

JobListedUpdateMessage.prototype.getMessageId = function() {
  return 6016;
};

JobListedUpdateMessage.prototype.getClassName = function() {
  return 'JobListedUpdateMessage';
};

module.exports.id = 6016;
module.exports.class = JobListedUpdateMessage;