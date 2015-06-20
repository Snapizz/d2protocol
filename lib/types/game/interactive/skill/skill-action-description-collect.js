var SkillActionDescriptionCollect = function() {
  this.min = 0;
  this.max = 0;
};



SkillActionDescriptionCollect.prototype.serialize = function(output) {
  this.serializeAs_SkillActionDescriptionCollect(output);
};

SkillActionDescriptionCollect.prototype.deserialize = function(input) {
  this.deserializeAs_SkillActionDescriptionCollect(input);
};

SkillActionDescriptionCollect.prototype.serializeAs_SkillActionDescriptionCollect = function(param1) {
  this.serializeAs_SkillActionDescriptionTimed(param1);
  if (this.min < 0) {
    throw new Error("Forbidden value (" + this.min + ") on element min.");
  } else {
    param1.writeVarShort(this.min);
    if (this.max < 0) {
      throw new Error("Forbidden value (" + this.max + ") on element max.");
    } else {
      param1.writeVarShort(this.max);
      return;
    }
  }
};

SkillActionDescriptionCollect.prototype.deserializeAs_SkillActionDescriptionCollect = function(param1) {
  this.deserialize(param1);
  this.min = param1.readVarUhShort();
  if (this.min < 0) {
    throw new Error("Forbidden value (" + this.min + ") on element of SkillActionDescriptionCollect.min.");
  } else {
    this.max = param1.readVarUhShort();
    if (this.max < 0) {
      throw new Error("Forbidden value (" + this.max + ") on element of SkillActionDescriptionCollect.max.");
    } else {
      return;
    }
  }
};

SkillActionDescriptionCollect.prototype.getTypeId = function() {
  return 99;
};

SkillActionDescriptionCollect.prototype.getClassName = function() {
  return 'SkillActionDescriptionCollect';
};

module.exports.id = 99;
module.exports.class = SkillActionDescriptionCollect;