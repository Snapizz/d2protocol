var InteractiveElementWithAgeBonus = function() {
  this.ageBonus = 0;
};



InteractiveElementWithAgeBonus.prototype.serialize = function(output) {
  this.serializeAs_InteractiveElementWithAgeBonus(output);
};

InteractiveElementWithAgeBonus.prototype.deserialize = function(input) {
  this.deserializeAs_InteractiveElementWithAgeBonus(input);
};

InteractiveElementWithAgeBonus.prototype.serializeAs_InteractiveElementWithAgeBonus = function(param1) {
  this.serializeAs_InteractiveElement(param1);
  if (this.ageBonus < -1 || this.ageBonus > 1000) {
    throw new Error("Forbidden value (" + this.ageBonus + ") on element ageBonus.");
  } else {
    param1.writeShort(this.ageBonus);
    return;
  }
};

InteractiveElementWithAgeBonus.prototype.deserializeAs_InteractiveElementWithAgeBonus = function(param1) {
  this.deserialize(param1);
  this.ageBonus = param1.readShort();
  if (this.ageBonus < -1 || this.ageBonus > 1000) {
    throw new Error("Forbidden value (" + this.ageBonus + ") on element of InteractiveElementWithAgeBonus.ageBonus.");
  } else {
    return;
  }
};

InteractiveElementWithAgeBonus.prototype.getTypeId = function() {
  return 398;
};

InteractiveElementWithAgeBonus.prototype.getClassName = function() {
  return 'InteractiveElementWithAgeBonus';
};

module.exports.id = 398;
module.exports.class = InteractiveElementWithAgeBonus;
module.exports.getInstance = function() {
  return new InteractiveElementWithAgeBonus();
};