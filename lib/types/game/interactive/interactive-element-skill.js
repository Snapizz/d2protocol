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

InteractiveElementSkill.prototype.serializeAs_InteractiveElementSkill = function(output) {
  if (this.skillId < 0) {
    throw (new Error((("Forbidden value (" + this.skillId) + ") on element skillId.")));
  };
  output.writeVarInt(this.skillId);
  if (this.skillInstanceUid < 0) {
    throw (new Error((("Forbidden value (" + this.skillInstanceUid) + ") on element skillInstanceUid.")));
  };
  output.writeInt(this.skillInstanceUid);
};

InteractiveElementSkill.prototype.deserializeAs_InteractiveElementSkill = function(input) {
  this.skillId = input.readVarUhInt();
  if (this.skillId < 0) {
    throw (new Error((("Forbidden value (" + this.skillId) + ") on element of InteractiveElementSkill.skillId.")));
  };
  this.skillInstanceUid = input.readInt();
  if (this.skillInstanceUid < 0) {
    throw (new Error((("Forbidden value (" + this.skillInstanceUid) + ") on element of InteractiveElementSkill.skillInstanceUid.")));
  };
};

InteractiveElementSkill.prototype.getTypeId = function() {
  return 219;
};

InteractiveElementSkill.prototype.getClassName = function() {
  return 'InteractiveElementSkill';
};

module.exports.id = 219;
module.exports.class = InteractiveElementSkill;