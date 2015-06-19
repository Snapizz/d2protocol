var BaseMessage = require('./character-minimal-informations.js').class,
  util = require('util');

var CharacterMinimalPlusLookInformations = function() {
  this.entityLook;
};

util.inherits(CharacterMinimalPlusLookInformations, BaseMessage);

CharacterMinimalPlusLookInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterMinimalPlusLookInformations(output);
};

CharacterMinimalPlusLookInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterMinimalPlusLookInformations(input);
};

CharacterMinimalPlusLookInformations.prototype.serializeAs_CharacterMinimalPlusLookInformations = function(output) {
  this.serializeAs_CharacterMinimalInformations(output);
  this.entityLook.serializeAs_EntityLook(output);
};

CharacterMinimalPlusLookInformations.prototype.deserializeAs_CharacterMinimalPlusLookInformations = function(input) {
  this.deserialize(input);
  this.entityLook = new EntityLook();
  this.entityLook.deserialize(input);
};

CharacterMinimalPlusLookInformations.prototype.getTypeId = function() {
  return 163;
};

CharacterMinimalPlusLookInformations.prototype.getClassName = function() {
  return 'CharacterMinimalPlusLookInformations';
};

module.exports.id = 163;
module.exports.class = CharacterMinimalPlusLookInformations;