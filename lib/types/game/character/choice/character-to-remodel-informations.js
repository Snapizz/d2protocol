var CharacterToRemodelInformations = function() {
  this.possibleChangeMask = 0;
  this.mandatoryChangeMask = 0;
};



CharacterToRemodelInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterToRemodelInformations(output);
};

CharacterToRemodelInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterToRemodelInformations(input);
};

CharacterToRemodelInformations.prototype.serializeAs_CharacterToRemodelInformations = function(output) {
  super.serializeAs_CharacterRemodelingInformation(param1);
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

CharacterToRemodelInformations.prototype.deserializeAs_CharacterToRemodelInformations = function(input) {
  super.deserialize(param1);
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