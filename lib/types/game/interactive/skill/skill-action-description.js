var SkillActionDescription = function() {
  this.skillId = 0;
};



SkillActionDescription.prototype.serialize = function(output) {
  this.serializeAs_SkillActionDescription(output);
};

SkillActionDescription.prototype.deserialize = function(input) {
  this.deserializeAs_SkillActionDescription(input);
};

SkillActionDescription.prototype.serializeAs_SkillActionDescription = function(output) {
  if (this.skillId < 0) {
    throw (new Error((("Forbidden value (" + this.skillId) + ") on element skillId.")));
  };
  output.writeVarShort(this.skillId);
};

SkillActionDescription.prototype.deserializeAs_SkillActionDescription = function(input) {
  this.skillId = input.readVarUhShort();
  if (this.skillId < 0) {
    throw (new Error((("Forbidden value (" + this.skillId) + ") on element of SkillActionDescription.skillId.")));
  };
};

SkillActionDescription.prototype.getTypeId = function() {
  return 102;
};

SkillActionDescription.prototype.getClassName = function() {
  return 'SkillActionDescription';
};

module.exports.id = 102;
module.exports.class = SkillActionDescription;