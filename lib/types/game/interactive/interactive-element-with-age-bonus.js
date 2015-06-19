var BaseMessage = require('./interactive-element.js').class,
  util = require('util');

var InteractiveElementWithAgeBonus = function() {
  this.ageBonus = 0;
};

util.inherits(InteractiveElementWithAgeBonus, BaseMessage);

InteractiveElementWithAgeBonus.prototype.serialize = function(output) {
  this.serializeAs_InteractiveElementWithAgeBonus(output);
};

InteractiveElementWithAgeBonus.prototype.deserialize = function(input) {
  this.deserializeAs_InteractiveElementWithAgeBonus(input);
};

InteractiveElementWithAgeBonus.prototype.serializeAs_InteractiveElementWithAgeBonus = function(output) {
  this.serializeAs_InteractiveElement(output);
  if ((((this.ageBonus < -1)) || ((this.ageBonus > 1000)))) {
    throw (new Error((("Forbidden value (" + this.ageBonus) + ") on element ageBonus.")));
  };
  output.writeShort(this.ageBonus);
};

InteractiveElementWithAgeBonus.prototype.deserializeAs_InteractiveElementWithAgeBonus = function(input) {
  this.deserialize(input);
  this.ageBonus = input.readShort();
  if ((((this.ageBonus < -1)) || ((this.ageBonus > 1000)))) {
    throw (new Error((("Forbidden value (" + this.ageBonus) + ") on element of InteractiveElementWithAgeBonus.ageBonus.")));
  };
};

InteractiveElementWithAgeBonus.prototype.getTypeId = function() {
  return 398;
};

InteractiveElementWithAgeBonus.prototype.getClassName = function() {
  return 'InteractiveElementWithAgeBonus';
};

module.exports.id = 398;
module.exports.class = InteractiveElementWithAgeBonus;