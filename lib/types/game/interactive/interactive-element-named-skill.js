var BaseMessage = require('./interactive-element-skill.js').class,
  util = require('util');

var InteractiveElementNamedSkill = function() {
  this.nameId = 0;
};

util.inherits(InteractiveElementNamedSkill, BaseMessage);

InteractiveElementNamedSkill.prototype.serialize = function(output) {
  this.serializeAs_InteractiveElementNamedSkill(output);
};

InteractiveElementNamedSkill.prototype.deserialize = function(input) {
  this.deserializeAs_InteractiveElementNamedSkill(input);
};

InteractiveElementNamedSkill.prototype.serializeAs_InteractiveElementNamedSkill = function(output) {
  this.serializeAs_InteractiveElementSkill(output);
  if (this.nameId < 0) {
    throw (new Error((("Forbidden value (" + this.nameId) + ") on element nameId.")));
  };
  output.writeVarInt(this.nameId);
};

InteractiveElementNamedSkill.prototype.deserializeAs_InteractiveElementNamedSkill = function(input) {
  this.deserialize(input);
  this.nameId = input.readVarUhInt();
  if (this.nameId < 0) {
    throw (new Error((("Forbidden value (" + this.nameId) + ") on element of InteractiveElementNamedSkill.nameId.")));
  };
};

InteractiveElementNamedSkill.prototype.getTypeId = function() {
  return 220;
};

InteractiveElementNamedSkill.prototype.getClassName = function() {
  return 'InteractiveElementNamedSkill';
};

module.exports.id = 220;
module.exports.class = InteractiveElementNamedSkill;