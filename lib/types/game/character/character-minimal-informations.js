var CharacterMinimalInformations = function() {
  this.level = 0;
  this.name = "";
};



CharacterMinimalInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterMinimalInformations(output);
};

CharacterMinimalInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterMinimalInformations(input);
};

CharacterMinimalInformations.prototype.serializeAs_CharacterMinimalInformations = function(param1) {
  this.serializeAs_AbstractCharacterInformation(param1);
  if (this.level < 1 || this.level > 200) {
    throw new Error("Forbidden value (" + this.level + ") on element level.");
  } else {
    param1.writeByte(this.level);
    param1.writeUTF(this.name);
    return;
  }
};

CharacterMinimalInformations.prototype.deserializeAs_CharacterMinimalInformations = function(param1) {
  this.deserialize(param1);
  this.level = param1.readUnsignedByte();
  if (this.level < 1 || this.level > 200) {
    throw new Error("Forbidden value (" + this.level + ") on element of CharacterMinimalInformations.level.");
  } else {
    this.name = param1.readUTF();
    return;
  }
};

CharacterMinimalInformations.prototype.getTypeId = function() {
  return 110;
};

CharacterMinimalInformations.prototype.getClassName = function() {
  return 'CharacterMinimalInformations';
};

module.exports.id = 110;
module.exports.class = CharacterMinimalInformations;