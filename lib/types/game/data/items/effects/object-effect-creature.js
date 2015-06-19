var BaseMessage = require('./object-effect.js').class,
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

ObjectEffectCreature.prototype.serializeAs_ObjectEffectCreature = function(output) {
  this.serializeAs_ObjectEffect(output);
  if (this.monsterFamilyId < 0) {
    throw (new Error((("Forbidden value (" + this.monsterFamilyId) + ") on element monsterFamilyId.")));
  };
  output.writeVarShort(this.monsterFamilyId);
};

ObjectEffectCreature.prototype.deserializeAs_ObjectEffectCreature = function(input) {
  this.deserialize(input);
  this.monsterFamilyId = input.readVarUhShort();
  if (this.monsterFamilyId < 0) {
    throw (new Error((("Forbidden value (" + this.monsterFamilyId) + ") on element of ObjectEffectCreature.monsterFamilyId.")));
  };
};

ObjectEffectCreature.prototype.getTypeId = function() {
  return 71;
};

ObjectEffectCreature.prototype.getClassName = function() {
  return 'ObjectEffectCreature';
};

module.exports.id = 71;
module.exports.class = ObjectEffectCreature;