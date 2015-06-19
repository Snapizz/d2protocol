var BaseMessage = require('./character-remodeling-information.js').class,
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

CharacterToRemodelInformations.prototype.serializeAs_CharacterToRemodelInformations = function(output) {
  this.serializeAs_CharacterRemodelingInformation(output);
  if (this.possibleChangeMask < 0) {
    throw (new Error((("Forbidden value (" + this.possibleChangeMask) + ") on element possibleChangeMask.")));
  };
  output.writeByte(this.possibleChangeMask);
  if (this.mandatoryChangeMask < 0) {
    throw (new Error((("Forbidden value (" + this.mandatoryChangeMask) + ") on element mandatoryChangeMask.")));
  };
  output.writeByte(this.mandatoryChangeMask);
};

CharacterToRemodelInformations.prototype.deserializeAs_CharacterToRemodelInformations = function(input) {
  this.deserialize(input);
  this.possibleChangeMask = input.readByte();
  if (this.possibleChangeMask < 0) {
    throw (new Error((("Forbidden value (" + this.possibleChangeMask) + ") on element of CharacterToRemodelInformations.possibleChangeMask.")));
  };
  this.mandatoryChangeMask = input.readByte();
  if (this.mandatoryChangeMask < 0) {
    throw (new Error((("Forbidden value (" + this.mandatoryChangeMask) + ") on element of CharacterToRemodelInformations.mandatoryChangeMask.")));
  };
};

CharacterToRemodelInformations.prototype.getTypeId = function() {
  return 477;
};

CharacterToRemodelInformations.prototype.getClassName = function() {
  return 'CharacterToRemodelInformations';
};

module.exports.id = 477;
module.exports.class = CharacterToRemodelInformations;