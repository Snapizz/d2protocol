var BaseMessage = require('../character-minimal-plus-look-informations.js').class,
  util = require('util');

var CharacterBaseInformations = function() {
  this.breed = 0;
  this.sex = false;
};

util.inherits(CharacterBaseInformations, BaseMessage);

CharacterBaseInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterBaseInformations(output);
};

CharacterBaseInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterBaseInformations(input);
};

CharacterBaseInformations.prototype.serializeAs_CharacterBaseInformations = function(output) {
  this.serializeAs_CharacterMinimalPlusLookInformations(output);
  output.writeByte(this.breed);
  output.writeBoolean(this.sex);
};

CharacterBaseInformations.prototype.deserializeAs_CharacterBaseInformations = function(input) {
  this.deserialize(input);
  this.breed = input.readByte();
  this.sex = input.readBoolean();
};

CharacterBaseInformations.prototype.getTypeId = function() {
  return 45;
};

CharacterBaseInformations.prototype.getClassName = function() {
  return 'CharacterBaseInformations';
};

module.exports.id = 45;
module.exports.class = CharacterBaseInformations;