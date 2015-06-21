var CharacterBaseInformations = function() {
    this.breed = 0;
    this.sex = false;
};

require('util').inherits(CharacterBaseInformations, require('../character-minimal-plus-look-informations.js').class);

CharacterBaseInformations.prototype.serialize = function(output) {
    this.serializeAs_CharacterBaseInformations(output);
};

CharacterBaseInformations.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterBaseInformations(input);
};

CharacterBaseInformations.prototype.serializeAs_CharacterBaseInformations = function(param1) {
    this.serializeAs_CharacterMinimalPlusLookInformations(param1);
    param1.writeByte(this.breed);
    param1.writeBoolean(this.sex);
};

CharacterBaseInformations.prototype.deserializeAs_CharacterBaseInformations = function(param1) {
    this.deserializeAs_CharacterMinimalPlusLookInformations(param1);
    this.breed = param1.readByte();
    this.sex = param1.readBoolean();
};

CharacterBaseInformations.prototype.getTypeId = function() {
    return 45;
};

CharacterBaseInformations.prototype.getClassName = function() {
    return 'CharacterBaseInformations';
};

module.exports.id = 45;
module.exports.class = CharacterBaseInformations;
module.exports.getInstance = function() {
    return new CharacterBaseInformations;
};