var BaseMessage = require('./object-effect-creature.js').class,
  util = require('util');

var ObjectEffectCreature = function() {
  this.monsterFamilyId = 0;
};

util.inherits(ObjectEffectCreature, BaseMessage);

ObjectEffectCreature.prototype.serialize = function(output) {
  this.serializeAs_ObjectEffectCreature(output);
};

ObjectEffectCreature.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectEffectCreature(input);
};

ObjectEffectCreature.prototype.serializeAs_ObjectEffectCreature = function(param1) {
  this.serializeAs_ObjectEffect(param1);
  if (this.monsterFamilyId < 0) {
    throw new Error("Forbidden value (" + this.monsterFamilyId + ") on element monsterFamilyId.");
  } else {
    param1.writeVarShort(this.monsterFamilyId);
    return;
  }
};

ObjectEffectCreature.prototype.deserializeAs_ObjectEffectCreature = function(param1) {
  this.deserialize(param1);
  this.monsterFamilyId = param1.readVarUhShort();
  if (this.monsterFamilyId < 0) {
    throw new Error("Forbidden value (" + this.monsterFamilyId + ") on element of ObjectEffectCreature.monsterFamilyId.");
  } else {
    return;
  }
};

ObjectEffectCreature.prototype.getTypeId = function() {
  return 71;
};

ObjectEffectCreature.prototype.getClassName = function() {
  return 'ObjectEffectCreature';
};

module.exports.id = 71;
module.exports.class = ObjectEffectCreature;
module.exports.getInstance = function() {
  return new ObjectEffectCreature();
};