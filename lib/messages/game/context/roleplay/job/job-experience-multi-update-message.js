var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var JobExperienceMultiUpdateMessage = function() {
  this.experiencesUpdate = [];
};

util.inherits(JobExperienceMultiUpdateMessage, BaseMessage);

JobExperienceMultiUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_JobExperienceMultiUpdateMessage(output);
};

JobExperienceMultiUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_JobExperienceMultiUpdateMessage(input);
};

JobExperienceMultiUpdateMessage.prototype.serializeAs_JobExperienceMultiUpdateMessage = function(output) {
  output.writeShort(this.experiencesUpdate.length);
  var _i1;
  while (_i1 < this.experiencesUpdate.length) {
    (this.experiencesUpdate[_i1]).serializeAs_JobExperience(output);
    _i1++;
  };
};

JobExperienceMultiUpdateMessage.prototype.deserializeAs_JobExperienceMultiUpdateMessage = function(input) {
  var _item1;
  var _experiencesUpdateLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _experiencesUpdateLen) {
    _item1 = new JobExperience();
    _item1.deserialize(input);
    this.experiencesUpdate.push(_item1);
    _i1++;
  };
};

JobExperienceMultiUpdateMessage.prototype.getMessageId = function() {
  return 5809;
};

JobExperienceMultiUpdateMessage.prototype.getClassName = function() {
  return 'JobExperienceMultiUpdateMessage';
};

module.exports.id = 5809;
module.exports.class = JobExperienceMultiUpdateMessage;