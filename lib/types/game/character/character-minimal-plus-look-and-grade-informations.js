var BaseMessage = require('./character-minimal-plus-look-informations.js').class,
  util = require('util');

var CharacterMinimalPlusLookAndGradeInformations = function() {
  this.grade = 0;
};

util.inherits(CharacterMinimalPlusLookAndGradeInformations, BaseMessage);

CharacterMinimalPlusLookAndGradeInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterMinimalPlusLookAndGradeInformations(output);
};

CharacterMinimalPlusLookAndGradeInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterMinimalPlusLookAndGradeInformations(input);
};

CharacterMinimalPlusLookAndGradeInformations.prototype.serializeAs_CharacterMinimalPlusLookAndGradeInformations = function(output) {
  this.serializeAs_CharacterMinimalPlusLookInformations(output);
  if (this.grade < 0) {
    throw (new Error((("Forbidden value (" + this.grade) + ") on element grade.")));
  };
  output.writeVarInt(this.grade);
};

CharacterMinimalPlusLookAndGradeInformations.prototype.deserializeAs_CharacterMinimalPlusLookAndGradeInformations = function(input) {
  this.deserialize(input);
  this.grade = input.readVarUhInt();
  if (this.grade < 0) {
    throw (new Error((("Forbidden value (" + this.grade) + ") on element of CharacterMinimalPlusLookAndGradeInformations.grade.")));
  };
};

CharacterMinimalPlusLookAndGradeInformations.prototype.getTypeId = function() {
  return 193;
};

CharacterMinimalPlusLookAndGradeInformations.prototype.getClassName = function() {
  return 'CharacterMinimalPlusLookAndGradeInformations';
};

module.exports.id = 193;
module.exports.class = CharacterMinimalPlusLookAndGradeInformations;