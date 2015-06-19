var BaseMessage = require('./abstract-character-to-refurbish-information.js').class,
  util = require('util');

var CharacterToRelookInformation = function() {

};

util.inherits(CharacterToRelookInformation, BaseMessage);

CharacterToRelookInformation.prototype.serialize = function(output) {
  this.serializeAs_CharacterToRelookInformation(output);
};

CharacterToRelookInformation.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterToRelookInformation(input);
};

CharacterToRelookInformation.prototype.serializeAs_CharacterToRelookInformation = function(output) {
  this.serializeAs_AbstractCharacterToRefurbishInformation(output);
};

CharacterToRelookInformation.prototype.deserializeAs_CharacterToRelookInformation = function(input) {
  this.deserialize(input);
};

CharacterToRelookInformation.prototype.getTypeId = function() {
  return 399;
};

CharacterToRelookInformation.prototype.getClassName = function() {
  return 'CharacterToRelookInformation';
};

module.exports.id = 399;
module.exports.class = CharacterToRelookInformation;