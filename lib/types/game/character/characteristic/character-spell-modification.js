var CharacterSpellModification = function() {
    this.modificationType = 0;
    this.spellId = 0;
    this.value = new CharacterBaseCharacteristic();
};

CharacterSpellModification.prototype.serialize = function(output) {
    this.serializeAs_CharacterSpellModification(output);
};

CharacterSpellModification.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterSpellModification(input);
};

CharacterSpellModification.prototype.serializeAs_CharacterSpellModification = function(param1) {
    param1.writeByte(this.modificationType);
    if (this.spellId < 0) {
        throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
    } else {
        param1.writeVarShort(this.spellId);
        this.value.serializeAs_CharacterBaseCharacteristic(param1);
        return;
    }
};

CharacterSpellModification.prototype.deserializeAs_CharacterSpellModification = function(param1) {
    this.modificationType = param1.readByte();
    if (this.modificationType < 0) {
        throw new Error("Forbidden value (" + this.modificationType + ") on element of CharacterSpellModification.modificationType.");
    } else {
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error("Forbidden value (" + this.spellId + ") on element of CharacterSpellModification.spellId.");
        } else {
            this.value = new CharacterBaseCharacteristic();
            this.value.deserialize(param1);
            return;
        }
    }
};

CharacterSpellModification.prototype.getTypeId = function() {
    return 215;
};

CharacterSpellModification.prototype.getClassName = function() {
    return 'CharacterSpellModification';
};

module.exports.id = 215;
module.exports.class = CharacterSpellModification;
module.exports.getInstance = function() {
    return new CharacterSpellModification;
};