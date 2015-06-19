var BaseMessage = require('./character-base-informations.js').class,
  util = require('util');

var CharacterHardcoreOrEpicInformations = function() {
  this.deathState = 0;
  this.deathCount = 0;
  this.deathMaxLevel = 0;
};

util.inherits(CharacterHardcoreOrEpicInformations, BaseMessage);

CharacterHardcoreOrEpicInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterHardcoreOrEpicInformations(output);
};

CharacterHardcoreOrEpicInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterHardcoreOrEpicInformations(input);
};

CharacterHardcoreOrEpicInformations.prototype.serializeAs_CharacterHardcoreOrEpicInformations = function(output) {
  this.serializeAs_CharacterBaseInformations(output);
  output.writeByte(this.deathState);
  if (this.deathCount < 0) {
    throw (new Error((("Forbidden value (" + this.deathCount) + ") on element deathCount.")));
  };
  output.writeVarShort(this.deathCount);
  if ((((this.deathMaxLevel < 1)) || ((this.deathMaxLevel > 200)))) {
    throw (new Error((("Forbidden value (" + this.deathMaxLevel) + ") on element deathMaxLevel.")));
  };
  output.writeByte(this.deathMaxLevel);
};

CharacterHardcoreOrEpicInformations.prototype.deserializeAs_CharacterHardcoreOrEpicInformations = function(input) {
  this.deserialize(input);
  this.deathState = input.readByte();
  if (this.deathState < 0) {
    throw (new Error((("Forbidden value (" + this.deathState) + ") on element of CharacterHardcoreOrEpicInformations.deathState.")));
  };
  this.deathCount = input.readVarUhShort();
  if (this.deathCount < 0) {
    throw (new Error((("Forbidden value (" + this.deathCount) + ") on element of CharacterHardcoreOrEpicInformations.deathCount.")));
  };
  this.deathMaxLevel = input.readUnsignedByte();
  if ((((this.deathMaxLevel < 1)) || ((this.deathMaxLevel > 200)))) {
    throw (new Error((("Forbidden value (" + this.deathMaxLevel) + ") on element of CharacterHardcoreOrEpicInformations.deathMaxLevel.")));
  };
};

CharacterHardcoreOrEpicInformations.prototype.getTypeId = function() {
  return 474;
};

CharacterHardcoreOrEpicInformations.prototype.getClassName = function() {
  return 'CharacterHardcoreOrEpicInformations';
};

module.exports.id = 474;
module.exports.class = CharacterHardcoreOrEpicInformations;