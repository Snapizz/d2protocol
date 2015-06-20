var d2com = require('d2com'),
  BaseMessage = require('./job-unlearnt-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var JobUnlearntMessage = function() {
  this.jobId = 0;
};

util.inherits(JobUnlearntMessage, BaseMessage);

JobUnlearntMessage.prototype.serialize = function(output) {
  this.serializeAs_JobUnlearntMessage(output);
};

JobUnlearntMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobUnlearntMessage(input);
};

JobUnlearntMessage.prototype.serializeAs_JobUnlearntMessage = function(param1) {
  if (this.jobId < 0) {
    throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
  } else {
    param1.writeByte(this.jobId);
    return;
  }
};

JobUnlearntMessage.prototype.deserializeAs_JobUnlearntMessage = function(param1) {
  this.jobId = param1.readByte();
  if (this.jobId < 0) {
    throw new Error("Forbidden value (" + this.jobId + ") on element of JobUnlearntMessage.jobId.");
  } else {
    return;
  }
};

JobUnlearntMessage.prototype.getMessageId = function() {
  return 5657;
};

JobUnlearntMessage.prototype.getClassName = function() {
  return 'JobUnlearntMessage';
};

module.exports.id = 5657;
module.exports.class = JobUnlearntMessage;
module.exports.getInstance = function() {
  return new JobUnlearntMessage();
};