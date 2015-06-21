var CharacterToRelookInformation = function() {

};

require('util').inherits(CharacterToRelookInformation, require('./abstract-character-to-refurbish-information.js'));

module.exports = function() {
    return new CharacterToRelookInformation();
};

CharacterToRelookInformation.prototype.serialize = function(output) {
    this.serializeAs_CharacterToRelookInformation(output);
};

CharacterToRelookInformation.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterToRelookInformation(input);
};

CharacterToRelookInformation.prototype.serializeAs_CharacterToRelookInformation = function(param1) {
    this.serializeAs_AbstractCharacterToRefurbishInformation(param1);
};

CharacterToRelookInformation.prototype.deserializeAs_CharacterToRelookInformation = function(param1) {
    this.deserializeAs_AbstractCharacterToRefurbishInformation(param1);
};

CharacterToRelookInformation.prototype.getTypeId = function() {
    return 399;
};

CharacterToRelookInformation.prototype.getClassName = function() {
    return 'CharacterToRelookInformation';
};

module.exports.id = 399;
module.exports.CharacterToRelookInformation = CharacterToRelookInformation;