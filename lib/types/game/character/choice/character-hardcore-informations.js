var BaseMessage = require('./character-base-informations.js').class,
  util = require('util');

var CharacterHardcoreInformations = function() {
  this.deathState = 0;
  this.deathCount = 0;
  this.deathMaxLevel = 0;
};

util.inherits(CharacterHardcoreInformations, BaseMessage);

CharacterHardcoreInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterHardcoreInformations(output);
};

CharacterHardcoreInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterHardcoreInformations(input);
};

CharacterHardcoreInformations.prototype.serializeAs_CharacterHardcoreInformations = function(output) {
  this.serializeAs_CharacterBaseInformations(output);
  output.writeByte(this.deathState);
  if (this.deathCount < 0) {
    throw (new Error((("Forbidden value (" + this.deathCount) + ") on element deathCount.")));
  };
  output.writeShort(this.deathCount);
  if ((((this.deathMaxLevel < 1)) || ((this.deathMaxLevel > 200)))) {
    throw (new Error((("Forbidden value (" + this.deathMaxLevel) + ") on element deathMaxLevel.")));
  };
  output.writeByte(this.deathMaxLevel);
};

CharacterHardcoreInformations.prototype.deserializeAs_CharacterHardcoreInformations = function(input) {
  this.deserialize(input);
  this.deathState = input.readByte();
  if (this.deathState < 0) {
    throw (new Error((("Forbidden value (" + this.deathState) + ") on element of CharacterHardcoreInformations.deathState.")));
  };
  this.deathCount = input.readShort();
  if (this.deathCount < 0) {
    throw (new Error((("Forbidden value (" + this.deathCount) + ") on element of CharacterHardcoreInformations.deathCount.")));
  };
  this.deathMaxLevel = input.readUnsignedByte();
  if ((((this.deathMaxLevel < 1)) || ((this.deathMaxLevel > 200)))) {
    throw (new Error((("Forbidden value (" + this.deathMaxLevel) + ") on element of CharacterHardcoreInformations.deathMaxLevel.")));
  };
};

CharacterHardcoreInformations.prototype.getTypeId = function() {
  return 86;
};

CharacterHardcoreInformations.prototype.getClassName = function() {
  return 'CharacterHardcoreInformations';
};

module.exports.id = 86;
module.exports.class = CharacterHardcoreInformations;