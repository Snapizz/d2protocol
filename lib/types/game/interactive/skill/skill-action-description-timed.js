var BaseMessage = require('./skill-action-description.js').class,
  util = require('util');

var SkillActionDescriptionTimed = function() {
  this.time = 0;
};

util.inherits(SkillActionDescriptionTimed, BaseMessage);

SkillActionDescriptionTimed.prototype.serialize = function(output) {
  this.serializeAs_SkillActionDescriptionTimed(output);
};

SkillActionDescriptionTimed.prototype.deserialize = function(input) {
  this.deserializeAs_SkillActionDescriptionTimed(input);
};

SkillActionDescriptionTimed.prototype.serializeAs_SkillActionDescriptionTimed = function(output) {
  this.serializeAs_SkillActionDescription(output);
  if ((((this.time < 0)) || ((this.time > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.time) + ") on element time.")));
  };
  output.writeByte(this.time);
};

SkillActionDescriptionTimed.prototype.deserializeAs_SkillActionDescriptionTimed = function(input) {
  this.deserialize(input);
  this.time = input.readUnsignedByte();
  if ((((this.time < 0)) || ((this.time > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.time) + ") on element of SkillActionDescriptionTimed.time.")));
  };
};

SkillActionDescriptionTimed.prototype.getTypeId = function() {
  return 103;
};

SkillActionDescriptionTimed.prototype.getClassName = function() {
  return 'SkillActionDescriptionTimed';
};

module.exports.id = 103;
module.exports.class = SkillActionDescriptionTimed;