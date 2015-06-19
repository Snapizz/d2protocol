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
  output.writeShort(this.jobsDescription.length);
  var _i1;
  while (_i1 < this.jobsDescription.length) {
    (this.jobsDescription[_i1]).serializeAs_JobDescription(output);
    _i1++;
  };
};

JobDescriptionMessage.prototype.deserializeAs_JobDescriptionMessage = function(input) {
  var _item1;
  var _jobsDescriptionLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _jobsDescriptionLen) {
    _item1 = new JobDescription();
    _item1.deserialize(input);
    this.jobsDescription.push(_item1);
    _i1++;
  };
};

JobDescriptionMessage.prototype.getMessageId = function() {
  return 5655;
};

JobDescriptionMessage.prototype.getClassName = function() {
  return 'JobDescriptionMessage';
};

module.exports.id = 5655;
module.exports.class = JobDescriptionMessage;