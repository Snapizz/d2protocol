var JobDescription = function() {
  this.jobId = 0;
  this.skills = [];
};



JobDescription.prototype.serialize = function(output) {
  this.serializeAs_JobDescription(output);
};

JobDescription.prototype.deserialize = function(input) {
  this.deserializeAs_JobDescription(input);
};

JobDescription.prototype.serializeAs_JobDescription = function(output) {
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element jobId.")));
  };
  output.writeByte(this.jobId);
  output.writeShort(this.skills.length);
  var _i2 = 0;
  while (_i2 < this.skills.length) {
    output.writeShort((this.skills[_i2]).getTypeId());
    (this.skills[_i2]).serialize(output);
    _i2++;
  };
};

JobDescription.prototype.deserializeAs_JobDescription = function(input) {
  var _id2 = 0;
  var _item2;
  this.jobId = input.readByte();
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element of JobDescription.jobId.")));
  };
  var _skillsLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _skillsLen) {
    _id2 = input.readUnsignedShort();
    _item2 = ProtocolTypeManager.getInstance(SkillActionDescription, _id2);
    _item2.deserialize(input);
    this.skills.push(_item2);
    _i2++;
  };
};

JobDescription.prototype.getTypeId = function() {
  return 101;
};

JobDescription.prototype.getClassName = function() {
  return 'JobDescription';
};

module.exports.id = 101;
module.exports.class = JobDescription;