var CharacterSpellModification = function() {
  this.modificationType = 0;
  this.spellId = 0;
  this.value;
};



CharacterSpellModification.prototype.serialize = function(output) {
  this.serializeAs_CharacterSpellModification(output);
};

CharacterSpellModification.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterSpellModification(input);
};

CharacterSpellModification.prototype.serializeAs_CharacterSpellModification = function(output) {
  output.writeByte(this.modificationType);
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element spellId.")));
  };
  output.writeVarShort(this.spellId);
  this.value.serializeAs_CharacterBaseCharacteristic(output);
};

CharacterSpellModification.prototype.deserializeAs_CharacterSpellModification = function(input) {
  this.modificationType = input.readByte();
  if (this.modificationType < 0) {
    throw (new Error((("Forbidden value (" + this.modificationType) + ") on element of CharacterSpellModification.modificationType.")));
  };
  this.spellId = input.readVarUhShort();
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element of CharacterSpellModification.spellId.")));
  };
  this.value = new CharacterBaseCharacteristic();
  this.value.deserialize(input);
};

CharacterSpellModification.prototype.getTypeId = function() {
  return 215;
};

CharacterSpellModification.prototype.getClassName = function() {
  return 'CharacterSpellModification';
};

module.exports.id = 215;
module.exports.class = CharacterSpellModification;