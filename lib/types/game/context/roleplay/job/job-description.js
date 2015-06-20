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

JobDescription.prototype.serializeAs_JobDescription = function(param1) {
  if (this.jobId < 0) {
    throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
  } else {
    param1.writeByte(this.jobId);
    param1.writeShort(this.skills.length);
    var _loc2_ = 0;
    while (_loc2_ < this.skills.length) {
      param1.writeShort((this.skills[_loc2_]).getTypeId());
      (this.skills[_loc2_]).serialize(param1);
      _loc2_++;
    }
    return;
  }
};

JobDescription.prototype.deserializeAs_JobDescription = function(param1) {
  var _loc4_ = 0;
  var _loc5_ = null;
  this.jobId = param1.readByte();
  if (this.jobId < 0) {
    throw new Error("Forbidden value (" + this.jobId + ") on element of JobDescription.jobId.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = param1.readUnsignedShort();
      _loc5_ = ProtocolTypeManager.getInstance(SkillActionDescription, _loc4_);
      _loc5_.deserialize(param1);
      this.skills.push(_loc5_);
      _loc3_++;
    }
    return;
  }
};

JobDescription.prototype.getTypeId = function() {
  return 101;
};

JobDescription.prototype.getClassName = function() {
  return 'JobDescription';
};

module.exports.id = 101;
module.exports.class = JobDescription;