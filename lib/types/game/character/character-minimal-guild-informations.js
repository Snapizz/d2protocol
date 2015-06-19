var BaseMessage = require('./character-minimal-plus-look-informations.js').class,
  util = require('util');

var CharacterMinimalGuildInformations = function() {
  this.guild;
};

util.inherits(CharacterMinimalGuildInformations, BaseMessage);

CharacterMinimalGuildInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterMinimalGuildInformations(output);
};

CharacterMinimalGuildInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterMinimalGuildInformations(input);
};

CharacterMinimalGuildInformations.prototype.serializeAs_CharacterMinimalGuildInformations = function(output) {
  this.serializeAs_CharacterMinimalPlusLookInformations(output);
  this.guild.serializeAs_BasicGuildInformations(output);
};

CharacterMinimalGuildInformations.prototype.deserializeAs_CharacterMinimalGuildInformations = function(input) {
  this.deserialize(input);
  this.guild = new BasicGuildInformations();
  this.guild.deserialize(input);
};

CharacterMinimalGuildInformations.prototype.getTypeId = function() {
  return 445;
};

CharacterMinimalGuildInformations.prototype.getClassName = function() {
  return 'CharacterMinimalGuildInformations';
};

module.exports.id = 445;
module.exports.class = CharacterMinimalGuildInformations;