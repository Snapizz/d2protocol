var BaseMessage = require('./abstract-character-to-refurbish-information.js').class,
  util = require('util');

var CharacterToRecolorInformation = function() {

};

util.inherits(CharacterToRecolorInformation, BaseMessage);

CharacterToRecolorInformation.prototype.serialize = function(output) {
  this.serializeAs_CharacterToRecolorInformation(output);
};

CharacterToRecolorInformation.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterToRecolorInformation(input);
};

CharacterToRecolorInformation.prototype.serializeAs_CharacterToRecolorInformation = function(output) {
  this.serializeAs_AbstractCharacterToRefurbishInformation(output);
};

CharacterToRecolorInformation.prototype.deserializeAs_CharacterToRecolorInformation = function(input) {
  this.deserialize(input);
};

CharacterToRecolorInformation.prototype.getTypeId = function() {
  return 212;
};

CharacterToRecolorInformation.prototype.getClassName = function() {
  return 'CharacterToRecolorInformation';
};

module.exports.id = 212;
module.exports.class = CharacterToRecolorInformation;