var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var JobDescriptionMessage = function() {
  this.jobsDescription = [];
};

util.inherits(JobDescriptionMessage, BaseMessage);

JobDescriptionMessage.prototype.serialize = function(output) {
  this.serializeAs_JobDescriptionMessage(output);
};

JobDescriptionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobDescriptionMessage(input);
};

JobDescriptionMessage.prototype.serializeAs_JobDescriptionMessage = function(output) {
  param1.writeShort(this.jobsDescription.length);
  var _loc2_ = 0;
  while (_loc2_ < this.jobsDescription.length) {
    (this.jobsDescription[_loc2_]).serializeAs_JobDescription(param1);
    _loc2_++;
  }
};

JobDescriptionMessage.prototype.deserializeAs_JobDescriptionMessage = function(input) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new JobDescription();
    _loc4_.deserialize(param1);
    this.jobsDescription.push(_loc4_);
    _loc3_++;
  }
};

JobDescriptionMessage.prototype.getMessageId = function() {
  return 5655;
};

JobDescriptionMessage.prototype.getClassName = function() {
  return 'JobDescriptionMessage';
};

module.exports.id = 5655;
module.exports.class = JobDescriptionMessage;