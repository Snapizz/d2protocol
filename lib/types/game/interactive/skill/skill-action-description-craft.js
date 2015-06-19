var BaseMessage = require('./skill-action-description.js').class,
  util = require('util');

var SkillActionDescriptionCraft = function() {
  this.maxSlots = 0;
  this.probability = 0;
};

util.inherits(SkillActionDescriptionCraft, BaseMessage);

SkillActionDescriptionCraft.prototype.serialize = function(output) {
  this.serializeAs_SkillActionDescriptionCraft(output);
};

SkillActionDescriptionCraft.prototype.deserialize = function(input) {
  this.deserializeAs_SkillActionDescriptionCraft(input);
};

SkillActionDescriptionCraft.prototype.serializeAs_SkillActionDescriptionCraft = function(output) {
  this.serializeAs_SkillActionDescription(output);
  if (this.maxSlots < 0) {
    throw (new Error((("Forbidden value (" + this.maxSlots) + ") on element maxSlots.")));
  };
  output.writeByte(this.maxSlots);
  if (this.probability < 0) {
    throw (new Error((("Forbidden value (" + this.probability) + ") on element probability.")));
  };
  output.writeByte(this.probability);
};

SkillActionDescriptionCraft.prototype.deserializeAs_SkillActionDescriptionCraft = function(input) {
  this.deserialize(input);
  this.maxSlots = input.readByte();
  if (this.maxSlots < 0) {
    throw (new Error((("Forbidden value (" + this.maxSlots) + ") on element of SkillActionDescriptionCraft.maxSlots.")));
  };
  this.probability = input.readByte();
  if (this.probability < 0) {
    throw (new Error((("Forbidden value (" + this.probability) + ") on element of SkillActionDescriptionCraft.probability.")));
  };
};

SkillActionDescriptionCraft.prototype.getTypeId = function() {
  return 100;
};

SkillActionDescriptionCraft.prototype.getClassName = function() {
  return 'SkillActionDescriptionCraft';
};

module.exports.id = 100;
module.exports.class = SkillActionDescriptionCraft;