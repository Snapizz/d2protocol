var BaseMessage = require('./character-base-characteristic.js').class,
  util = require('util');

var CharacterBaseCharacteristic = function() {
  this.base = 0;
  this.additionnal = 0;
  this.objectsAndMountBonus = 0;
  this.alignGiftBonus = 0;
  this.contextModif = 0;
};

util.inherits(CharacterBaseCharacteristic, BaseMessage);

CharacterBaseCharacteristic.prototype.serialize = function(output) {
  this.serializeAs_CharacterBaseCharacteristic(output);
};

CharacterBaseCharacteristic.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterBaseCharacteristic(input);
};

CharacterBaseCharacteristic.prototype.serializeAs_CharacterBaseCharacteristic = function(param1) {
  param1.writeVarShort(this.base);
  param1.writeVarShort(this.additionnal);
  param1.writeVarShort(this.objectsAndMountBonus);
  param1.writeVarShort(this.alignGiftBonus);
  param1.writeVarShort(this.contextModif);
};

CharacterBaseCharacteristic.prototype.deserializeAs_CharacterBaseCharacteristic = function(param1) {
  this.base = param1.readVarShort();
  this.additionnal = param1.readVarShort();
  this.objectsAndMountBonus = param1.readVarShort();
  this.alignGiftBonus = param1.readVarShort();
  this.contextModif = param1.readVarShort();
};

CharacterBaseCharacteristic.prototype.getTypeId = function() {
  return 4;
};

CharacterBaseCharacteristic.prototype.getClassName = function() {
  return 'CharacterBaseCharacteristic';
};

module.exports.id = 4;
module.exports.class = CharacterBaseCharacteristic;
module.exports.getInstance = function() {
  return new CharacterBaseCharacteristic();
};