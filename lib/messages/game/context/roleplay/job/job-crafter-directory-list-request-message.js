var d2com = require('d2com'),
  BaseMessage = require('./job-crafter-directory-list-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var JobCrafterDirectoryListRequestMessage = function() {
  this.jobId = 0;
};

util.inherits(JobCrafterDirectoryListRequestMessage, BaseMessage);

JobCrafterDirectoryListRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_JobCrafterDirectoryListRequestMessage(output);
};

JobCrafterDirectoryListRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobCrafterDirectoryListRequestMessage(input);
};

JobCrafterDirectoryListRequestMessage.prototype.serializeAs_JobCrafterDirectoryListRequestMessage = function(param1) {
  if (this.jobId < 0) {
    throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
  } else {
    param1.writeByte(this.jobId);
    return;
  }
};

JobCrafterDirectoryListRequestMessage.prototype.deserializeAs_JobCrafterDirectoryListRequestMessage = function(param1) {
  this.jobId = param1.readByte();
  if (this.jobId < 0) {
    throw new Error("Forbidden value (" + this.jobId + ") on element of JobCrafterDirectoryListRequestMessage.jobId.");
  } else {
    return;
  }
};

JobCrafterDirectoryListRequestMessage.prototype.getMessageId = function() {
  return 6047;
};

JobCrafterDirectoryListRequestMessage.prototype.getClassName = function() {
  return 'JobCrafterDirectoryListRequestMessage';
};

module.exports.id = 6047;
module.exports.class = JobCrafterDirectoryListRequestMessage;
module.exports.getInstance = function() {
  return new JobCrafterDirectoryListRequestMessage();
};