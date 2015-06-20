var BaseMessage = require('./character-to-remodel-informations.js').class,
  util = require('util');

var CharacterToRemodelInformations = function() {
  this.possibleChangeMask = 0;
  this.mandatoryChangeMask = 0;
};

util.inherits(CharacterToRemodelInformations, BaseMessage);

CharacterToRemodelInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterToRemodelInformations(output);
};

CharacterToRemodelInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterToRemodelInformations(input);
};

CharacterToRemodelInformations.prototype.serializeAs_CharacterToRemodelInformations = function(param1) {
  this.serializeAs_CharacterRemodelingInformation(param1);
  if (this.possibleChangeMask < 0) {
    throw new Error("Forbidden value (" + this.possibleChangeMask + ") on element possibleChangeMask.");
  } else {
    param1.writeByte(this.possibleChangeMask);
    if (this.mandatoryChangeMask < 0) {
      throw new Error("Forbidden value (" + this.mandatoryChangeMask + ") on element mandatoryChangeMask.");
    } else {
      param1.writeByte(this.mandatoryChangeMask);
      return;
    }
  }
};

CharacterToRemodelInformations.prototype.deserializeAs_CharacterToRemodelInformations = function(param1) {
  this.deserialize(param1);
  this.possibleChangeMask = param1.readByte();
  if (this.possibleChangeMask < 0) {
    throw new Error("Forbidden value (" + this.possibleChangeMask + ") on element of CharacterToRemodelInformations.possibleChangeMask.");
  } else {
    this.mandatoryChangeMask = param1.readByte();
    if (this.mandatoryChangeMask < 0) {
      throw new Error("Forbidden value (" + this.mandatoryChangeMask + ") on element of CharacterToRemodelInformations.mandatoryChangeMask.");
    } else {
      return;
    }
  }
};

CharacterToRemodelInformations.prototype.getTypeId = function() {
  return 477;
};

CharacterToRemodelInformations.prototype.getClassName = function() {
  return 'CharacterToRemodelInformations';
};

module.exports.id = 477;
module.exports.class = CharacterToRemodelInformations;
module.exports.getInstance = function() {
  return new CharacterToRemodelInformations();
};