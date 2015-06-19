var MonsterInGroupLightInformations = function() {
  this.creatureGenericId = 0;
  this.grade = 0;
};



MonsterInGroupLightInformations.prototype.serialize = function(output) {
  this.serializeAs_MonsterInGroupLightInformations(output);
};

MonsterInGroupLightInformations.prototype.deserialize = function(input) {
  this.deserializeAs_MonsterInGroupLightInformations(input);
};

MonsterInGroupLightInformations.prototype.serializeAs_MonsterInGroupLightInformations = function(output) {
  output.writeInt(this.creatureGenericId);
  if (this.grade < 0) {
    throw (new Error((("Forbidden value (" + this.grade) + ") on element grade.")));
  };
  output.writeByte(this.grade);
};

MonsterInGroupLightInformations.prototype.deserializeAs_MonsterInGroupLightInformations = function(input) {
  this.creatureGenericId = input.readInt();
  this.grade = input.readByte();
  if (this.grade < 0) {
    throw (new Error((("Forbidden value (" + this.grade) + ") on element of MonsterInGroupLightInformations.grade.")));
  };
};

MonsterInGroupLightInformations.prototype.getTypeId = function() {
  return 395;
};

MonsterInGroupLightInformations.prototype.getClassName = function() {
  return 'MonsterInGroupLightInformations';
};

module.exports.id = 395;
module.exports.class = MonsterInGroupLightInformations;