var InteractiveElementSkill = function() {
  this.skillId = 0;
  this.skillInstanceUid = 0;
};



InteractiveElementSkill.prototype.serialize = function(output) {
  this.serializeAs_InteractiveElementSkill(output);
};

InteractiveElementSkill.prototype.deserialize = function(input) {
  this.deserializeAs_InteractiveElementSkill(input);
};

InteractiveElementSkill.prototype.serializeAs_InteractiveElementSkill = function(param1) {
  if (this.skillId < 0) {
    throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
  } else {
    param1.writeVarInt(this.skillId);
    if (this.skillInstanceUid < 0) {
      throw new Error("Forbidden value (" + this.skillInstanceUid + ") on element skillInstanceUid.");
    } else {
      param1.writeInt(this.skillInstanceUid);
      return;
    }
  }
};

InteractiveElementSkill.prototype.deserializeAs_InteractiveElementSkill = function(param1) {
  this.skillId = param1.readVarUhInt();
  if (this.skillId < 0) {
    throw new Error("Forbidden value (" + this.skillId + ") on element of InteractiveElementSkill.skillId.");
  } else {
    this.skillInstanceUid = param1.readInt();
    if (this.skillInstanceUid < 0) {
      throw new Error("Forbidden value (" + this.skillInstanceUid + ") on element of InteractiveElementSkill.skillInstanceUid.");
    } else {
      return;
    }
  }
};

InteractiveElementSkill.prototype.getTypeId = function() {
  return 219;
};

InteractiveElementSkill.prototype.getClassName = function() {
  return 'InteractiveElementSkill';
};

module.exports.id = 219;
module.exports.class = InteractiveElementSkill;