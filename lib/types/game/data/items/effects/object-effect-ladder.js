var BaseMessage = require('./object-effect-creature.js').class,
  util = require('util');

var ObjectEffectLadder = function() {
  this.monsterCount = 0;
};

util.inherits(ObjectEffectLadder, BaseMessage);

ObjectEffectLadder.prototype.serialize = function(output) {
  this.serializeAs_ObjectEffectLadder(output);
};

ObjectEffectLadder.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectEffectLadder(input);
};

ObjectEffectLadder.prototype.serializeAs_ObjectEffectLadder = function(output) {
  this.serializeAs_ObjectEffectCreature(output);
  if (this.monsterCount < 0) {
    throw (new Error((("Forbidden value (" + this.monsterCount) + ") on element monsterCount.")));
  };
  output.writeVarInt(this.monsterCount);
};

ObjectEffectLadder.prototype.deserializeAs_ObjectEffectLadder = function(input) {
  this.deserialize(input);
  this.monsterCount = input.readVarUhInt();
  if (this.monsterCount < 0) {
    throw (new Error((("Forbidden value (" + this.monsterCount) + ") on element of ObjectEffectLadder.monsterCount.")));
  };
};

ObjectEffectLadder.prototype.getTypeId = function() {
  return 81;
};

ObjectEffectLadder.prototype.getClassName = function() {
  return 'ObjectEffectLadder';
};

module.exports.id = 81;
module.exports.class = ObjectEffectLadder;