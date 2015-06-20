var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

JobListedUpdateMessage.prototype.serializeAs_JobListedUpdateMessage = function(param1) {
  param1.writeBoolean(this.addedOrDeleted);
  if (this.jobId < 0) {
    throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
  } else {
    param1.writeByte(this.jobId);
    return;
  }
};

JobListedUpdateMessage.prototype.deserializeAs_JobListedUpdateMessage = function(param1) {
  this.addedOrDeleted = param1.readBoolean();
  this.jobId = param1.readByte();
  if (this.jobId < 0) {
    throw new Error("Forbidden value (" + this.jobId + ") on element of JobListedUpdateMessage.jobId.");
  } else {
    return;
  }
};

JobListedUpdateMessage.prototype.getMessageId = function() {
  return 6016;
};

JobListedUpdateMessage.prototype.getClassName = function() {
  return 'JobListedUpdateMessage';
};

module.exports.id = 6016;
module.exports.class = JobListedUpdateMessage;
module.exports.getInstance = function() {
  return new JobListedUpdateMessage();
};