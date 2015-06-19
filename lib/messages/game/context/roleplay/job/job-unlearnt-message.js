var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

JobUnlearntMessage.prototype.serializeAs_JobUnlearntMessage = function(output) {
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element jobId.")));
  };
  output.writeByte(this.jobId);
};

JobUnlearntMessage.prototype.deserializeAs_JobUnlearntMessage = function(input) {
  this.jobId = input.readByte();
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element of JobUnlearntMessage.jobId.")));
  };
};

JobUnlearntMessage.prototype.getMessageId = function() {
  return 5657;
};

JobUnlearntMessage.prototype.getClassName = function() {
  return 'JobUnlearntMessage';
};

module.exports.id = 5657;
module.exports.class = JobUnlearntMessage;