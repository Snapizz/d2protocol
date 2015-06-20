var ObjectEffectLadder = function() {
  this.monsterCount = 0;
};



ObjectEffectLadder.prototype.serialize = function(output) {
  this.serializeAs_ObjectEffectLadder(output);
};

ObjectEffectLadder.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectEffectLadder(input);
};

ObjectEffectLadder.prototype.serializeAs_ObjectEffectLadder = function(param1) {
  this.serializeAs_ObjectEffectCreature(param1);
  if (this.monsterCount < 0) {
    throw new Error("Forbidden value (" + this.monsterCount + ") on element monsterCount.");
  } else {
    param1.writeVarInt(this.monsterCount);
    return;
  }
};

ObjectEffectLadder.prototype.deserializeAs_ObjectEffectLadder = function(param1) {
  this.deserialize(param1);
  this.monsterCount = param1.readVarUhInt();
  if (this.monsterCount < 0) {
    throw new Error("Forbidden value (" + this.monsterCount + ") on element of ObjectEffectLadder.monsterCount.");
  } else {
    return;
  }
};

ObjectEffectLadder.prototype.getTypeId = function() {
  return 81;
};

ObjectEffectLadder.prototype.getClassName = function() {
  return 'ObjectEffectLadder';
};

module.exports.id = 81;
module.exports.class = ObjectEffectLadder;
module.exports.getInstance = function() {
  return new ObjectEffectLadder();
};