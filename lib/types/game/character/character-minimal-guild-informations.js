var CharacterMinimalGuildInformations = function() {
  this.guild;
};



CharacterMinimalGuildInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterMinimalGuildInformations(output);
};

CharacterMinimalGuildInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterMinimalGuildInformations(input);
};

CharacterMinimalGuildInformations.prototype.serializeAs_CharacterMinimalGuildInformations = function(output) {
  this.serializeAs_CharacterMinimalPlusLookInformations(param1);
  this.guild.serializeAs_BasicGuildInformations(param1);
};

CharacterMinimalGuildInformations.prototype.deserializeAs_CharacterMinimalGuildInformations = function(input) {
  this.deserialize(param1);
  this.guild = new BasicGuildInformations();
  this.guild.deserialize(param1);
};

CharacterMinimalGuildInformations.prototype.getTypeId = function() {
  return 445;
};

CharacterMinimalGuildInformations.prototype.getClassName = function() {
  return 'CharacterMinimalGuildInformations';
};

module.exports.id = 445;
module.exports.class = CharacterMinimalGuildInformations;