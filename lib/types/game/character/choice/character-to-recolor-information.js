var CharacterToRecolorInformation = function() {

};



CharacterToRecolorInformation.prototype.serialize = function(output) {
  this.serializeAs_CharacterToRecolorInformation(output);
};

CharacterToRecolorInformation.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterToRecolorInformation(input);
};

CharacterToRecolorInformation.prototype.serializeAs_CharacterToRecolorInformation = function(param1) {
  this.serializeAs_AbstractCharacterToRefurbishInformation(param1);
};

CharacterToRecolorInformation.prototype.deserializeAs_CharacterToRecolorInformation = function(param1) {
  this.deserialize(param1);
};

CharacterToRecolorInformation.prototype.getTypeId = function() {
  return 212;
};

CharacterToRecolorInformation.prototype.getClassName = function() {
  return 'CharacterToRecolorInformation';
};

module.exports.id = 212;
module.exports.class = CharacterToRecolorInformation;
module.exports.getInstance = function() {
  return new CharacterToRecolorInformation();
};