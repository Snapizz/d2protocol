var BaseMessage = require('./skill-action-description-timed.js').class,
  util = require('util');

var SkillActionDescriptionCollect = function() {
  this.min = 0;
  this.max = 0;
};

util.inherits(SkillActionDescriptionCollect, BaseMessage);

SkillActionDescriptionCollect.prototype.serialize = function(output) {
  this.serializeAs_SkillActionDescriptionCollect(output);
};

SkillActionDescriptionCollect.prototype.deserialize = function(input) {
  this.deserializeAs_SkillActionDescriptionCollect(input);
};

SkillActionDescriptionCollect.prototype.serializeAs_SkillActionDescriptionCollect = function(output) {
  this.serializeAs_SkillActionDescriptionTimed(output);
  if (this.min < 0) {
    throw (new Error((("Forbidden value (" + this.min) + ") on element min.")));
  };
  output.writeVarShort(this.min);
  if (this.max < 0) {
    throw (new Error((("Forbidden value (" + this.max) + ") on element max.")));
  };
  output.writeVarShort(this.max);
};

SkillActionDescriptionCollect.prototype.deserializeAs_SkillActionDescriptionCollect = function(input) {
  this.deserialize(input);
  this.min = input.readVarUhShort();
  if (this.min < 0) {
    throw (new Error((("Forbidden value (" + this.min) + ") on element of SkillActionDescriptionCollect.min.")));
  };
  this.max = input.readVarUhShort();
  if (this.max < 0) {
    throw (new Error((("Forbidden value (" + this.max) + ") on element of SkillActionDescriptionCollect.max.")));
  };
};

SkillActionDescriptionCollect.prototype.getTypeId = function() {
  return 99;
};

SkillActionDescriptionCollect.prototype.getClassName = function() {
  return 'SkillActionDescriptionCollect';
};

module.exports.id = 99;
module.exports.class = SkillActionDescriptionCollect;