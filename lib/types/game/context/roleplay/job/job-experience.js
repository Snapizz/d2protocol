var JobExperience = function() {
  this.jobId = 0;
  this.jobLevel = 0;
  this.jobXP = 0;
  this.jobXpLevelFloor = 0;
  this.jobXpNextLevelFloor = 0;
};



JobExperience.prototype.serialize = function(output) {
  this.serializeAs_JobExperience(output);
};

JobExperience.prototype.deserialize = function(input) {
  this.deserializeAs_JobExperience(input);
};

JobExperience.prototype.serializeAs_JobExperience = function(output) {
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element jobId.")));
  };
  output.writeByte(this.jobId);
  if (this.jobLevel < 0) {
    throw (new Error((("Forbidden value (" + this.jobLevel) + ") on element jobLevel.")));
  };
  output.writeByte(this.jobLevel);
  if ((((this.jobXP < 0)) || ((this.jobXP > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.jobXP) + ") on element jobXP.")));
  };
  output.writeVarLong(this.jobXP);
  if ((((this.jobXpLevelFloor < 0)) || ((this.jobXpLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.jobXpLevelFloor) + ") on element jobXpLevelFloor.")));
  };
  output.writeVarLong(this.jobXpLevelFloor);
  if ((((this.jobXpNextLevelFloor < 0)) || ((this.jobXpNextLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.jobXpNextLevelFloor) + ") on element jobXpNextLevelFloor.")));
  };
  output.writeVarLong(this.jobXpNextLevelFloor);
};

JobExperience.prototype.deserializeAs_JobExperience = function(input) {
  this.jobId = input.readByte();
  if (this.jobId < 0) {
    throw (new Error((("Forbidden value (" + this.jobId) + ") on element of JobExperience.jobId.")));
  };
  this.jobLevel = input.readByte();
  if (this.jobLevel < 0) {
    throw (new Error((("Forbidden value (" + this.jobLevel) + ") on element of JobExperience.jobLevel.")));
  };
  this.jobXP = input.readVarUhLong();
  if ((((this.jobXP < 0)) || ((this.jobXP > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.jobXP) + ") on element of JobExperience.jobXP.")));
  };
  this.jobXpLevelFloor = input.readVarUhLong();
  if ((((this.jobXpLevelFloor < 0)) || ((this.jobXpLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.jobXpLevelFloor) + ") on element of JobExperience.jobXpLevelFloor.")));
  };
  this.jobXpNextLevelFloor = input.readVarUhLong();
  if ((((this.jobXpNextLevelFloor < 0)) || ((this.jobXpNextLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.jobXpNextLevelFloor) + ") on element of JobExperience.jobXpNextLevelFloor.")));
  };
};

JobExperience.prototype.getTypeId = function() {
  return 98;
};

JobExperience.prototype.getClassName = function() {
  return 'JobExperience';
};

module.exports.id = 98;
module.exports.class = JobExperience;