var CharacterHardcoreOrEpicInformations = function() {
  this.deathState = 0;
  this.deathCount = 0;
  this.deathMaxLevel = 0;
};



CharacterHardcoreOrEpicInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterHardcoreOrEpicInformations(output);
};

CharacterHardcoreOrEpicInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterHardcoreOrEpicInformations(input);
};

CharacterHardcoreOrEpicInformations.prototype.serializeAs_CharacterHardcoreOrEpicInformations = function(param1) {
  this.serializeAs_CharacterBaseInformations(param1);
  param1.writeByte(this.deathState);
  if (this.deathCount < 0) {
    throw new Error("Forbidden value (" + this.deathCount + ") on element deathCount.");
  } else {
    param1.writeVarShort(this.deathCount);
    if (this.deathMaxLevel < 1 || this.deathMaxLevel > 200) {
      throw new Error("Forbidden value (" + this.deathMaxLevel + ") on element deathMaxLevel.");
    } else {
      param1.writeByte(this.deathMaxLevel);
      return;
    }
  }
};

CharacterHardcoreOrEpicInformations.prototype.deserializeAs_CharacterHardcoreOrEpicInformations = function(param1) {
  this.deserialize(param1);
  this.deathState = param1.readByte();
  if (this.deathState < 0) {
    throw new Error("Forbidden value (" + this.deathState + ") on element of CharacterHardcoreOrEpicInformations.deathState.");
  } else {
    this.deathCount = param1.readVarUhShort();
    if (this.deathCount < 0) {
      throw new Error("Forbidden value (" + this.deathCount + ") on element of CharacterHardcoreOrEpicInformations.deathCount.");
    } else {
      this.deathMaxLevel = param1.readUnsignedByte();
      if (this.deathMaxLevel < 1 || this.deathMaxLevel > 200) {
        throw new Error("Forbidden value (" + this.deathMaxLevel + ") on element of CharacterHardcoreOrEpicInformations.deathMaxLevel.");
      } else {
        return;
      }
    }
  }
};

CharacterHardcoreOrEpicInformations.prototype.getTypeId = function() {
  return 474;
};

CharacterHardcoreOrEpicInformations.prototype.getClassName = function() {
  return 'CharacterHardcoreOrEpicInformations';
};

module.exports.id = 474;
module.exports.class = CharacterHardcoreOrEpicInformations;