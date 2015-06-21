var CharacterToRecolorInformation = function() {

};

require('util').inherits(CharacterToRecolorInformation, require('./abstract-character-to-refurbish-information.js').AbstractCharacterToRefurbishInformation);

module.exports = function() {
    return new CharacterToRecolorInformation();
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
    this.deserializeAs_AbstractCharacterToRefurbishInformation(param1);
};

CharacterToRecolorInformation.prototype.getTypeId = function() {
    return 212;
};

CharacterToRecolorInformation.prototype.getClassName = function() {
    return 'CharacterToRecolorInformation';
};

module.exports.id = 212;
module.exports.CharacterToRecolorInformation = CharacterToRecolorInformation;