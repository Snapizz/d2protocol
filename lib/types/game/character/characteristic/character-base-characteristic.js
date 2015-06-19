var CharacterBaseCharacteristic = function() {
  this.base = 0;
  this.additionnal = 0;
  this.objectsAndMountBonus = 0;
  this.alignGiftBonus = 0;
  this.contextModif = 0;
};



CharacterBaseCharacteristic.prototype.serialize = function(output) {
  this.serializeAs_CharacterBaseCharacteristic(output);
};

CharacterBaseCharacteristic.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterBaseCharacteristic(input);
};

CharacterBaseCharacteristic.prototype.serializeAs_CharacterBaseCharacteristic = function(output) {
  output.writeVarShort(this.base);
  output.writeVarShort(this.additionnal);
  output.writeVarShort(this.objectsAndMountBonus);
  output.writeVarShort(this.alignGiftBonus);
  output.writeVarShort(this.contextModif);
};

CharacterBaseCharacteristic.prototype.deserializeAs_CharacterBaseCharacteristic = function(input) {
  this.base = input.readVarShort();
  this.additionnal = input.readVarShort();
  this.objectsAndMountBonus = input.readVarShort();
  this.alignGiftBonus = input.readVarShort();
  this.contextModif = input.readVarShort();
};

CharacterBaseCharacteristic.prototype.getTypeId = function() {
  return 4;
};

CharacterBaseCharacteristic.prototype.getClassName = function() {
  return 'CharacterBaseCharacteristic';
};

module.exports.id = 4;
module.exports.class = CharacterBaseCharacteristic;