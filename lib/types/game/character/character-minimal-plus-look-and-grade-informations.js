var CharacterMinimalPlusLookAndGradeInformations = module.exports = function() {
    this.grade = 0;

    return this;
};

require('util').inherits(CharacterMinimalPlusLookAndGradeInformations, require('./character-minimal-plus-look-informations.js'));

CharacterMinimalPlusLookAndGradeInformations.prototype.serialize = function(output) {
    this.serializeAs_CharacterMinimalPlusLookAndGradeInformations(output);
};

CharacterMinimalPlusLookAndGradeInformations.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterMinimalPlusLookAndGradeInformations(input);
};

CharacterMinimalPlusLookAndGradeInformations.prototype.serializeAs_CharacterMinimalPlusLookAndGradeInformations = function(param1) {
    this.serializeAs_CharacterMinimalPlusLookInformations(param1);
    if (this.grade < 0) {
        throw new Error("Forbidden value (" + this.grade + ") on element grade.");
    } else {
        param1.writeVarInt(this.grade);
        return;
    }
};

CharacterMinimalPlusLookAndGradeInformations.prototype.deserializeAs_CharacterMinimalPlusLookAndGradeInformations = function(param1) {
    this.deserializeAs_CharacterMinimalPlusLookInformations(param1);
    this.grade = param1.readVarUhInt();
    if (this.grade < 0) {
        throw new Error("Forbidden value (" + this.grade + ") on element of CharacterMinimalPlusLookAndGradeInformations.grade.");
    } else {
        return;
    }
};

CharacterMinimalPlusLookAndGradeInformations.prototype.getTypeId = function() {
    return 193;
};

CharacterMinimalPlusLookAndGradeInformations.prototype.getClassName = function() {
    return 'CharacterMinimalPlusLookAndGradeInformations';
};

module.exports.id = 193;