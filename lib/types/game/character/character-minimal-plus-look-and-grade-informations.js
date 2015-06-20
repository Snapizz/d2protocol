var CharacterMinimalPlusLookAndGradeInformations = function() {
  this.grade = 0;
};



CharacterMinimalPlusLookAndGradeInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterMinimalPlusLookAndGradeInformations(output);
};

CharacterMinimalPlusLookAndGradeInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterMinimalPlusLookAndGradeInformations(input);
};

CharacterMinimalPlusLookAndGradeInformations.prototype.serializeAs_CharacterMinimalPlusLookAndGradeInformations = function(output) {
  super.serializeAs_CharacterMinimalPlusLookInformations(param1);
  if (this.grade < 0) {
    throw new Error("Forbidden value (" + this.grade + ") on element grade.");
  } else {
    param1.writeVarInt(this.grade);
    return;
  }
};

CharacterMinimalPlusLookAndGradeInformations.prototype.deserializeAs_CharacterMinimalPlusLookAndGradeInformations = function(input) {
  super.deserialize(param1);
  this.grade = param1.readVarUhInt();
  if (this.grade < 0) {
    throw new Error("Forbidden value (" + this.grade + ") on element of CharacterMinimalPlusLookAndGradeInformations.grade.");
  } else {
    return;
  }
};

CharacterMinimalPlusLookAndGradeInformations.prototype.getTypeId = function() {
  return 193;
};

CharacterMinimalPlusLookAndGradeInformations.prototype.getClassName = function() {
  return 'CharacterMinimalPlusLookAndGradeInformations';
};

module.exports.id = 193;
module.exports.class = CharacterMinimalPlusLookAndGradeInformations;