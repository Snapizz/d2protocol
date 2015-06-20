var CharacterRemodelingInformation = function() {
  this.name = "";
  this.breed = 0;
  this.sex = false;
  this.cosmeticId = 0;
  this.colors = [];
};



CharacterRemodelingInformation.prototype.serialize = function(output) {
  this.serializeAs_CharacterRemodelingInformation(output);
};

CharacterRemodelingInformation.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterRemodelingInformation(input);
};

CharacterRemodelingInformation.prototype.serializeAs_CharacterRemodelingInformation = function(output) {
  super.serializeAs_AbstractCharacterInformation(param1);
  param1.writeUTF(this.name);
  param1.writeByte(this.breed);
  param1.writeBoolean(this.sex);
  if (this.cosmeticId < 0) {
    throw new Error("Forbidden value (" + this.cosmeticId + ") on element cosmeticId.");
  } else {
    param1.writeVarShort(this.cosmeticId);
    param1.writeShort(this.colors.length);
    var _loc2_ = 0;
    while (_loc2_ < this.colors.length) {
      param1.writeInt(this.colors[_loc2_]);
      _loc2_++;
    }
    return;
  }
};

CharacterRemodelingInformation.prototype.deserializeAs_CharacterRemodelingInformation = function(input) {
  var _loc4_ = 0;
  super.deserialize(param1);
  this.name = param1.readUTF();
  this.breed = param1.readByte();
  this.sex = param1.readBoolean();
  this.cosmeticId = param1.readVarUhShort();
  if (this.cosmeticId < 0) {
    throw new Error("Forbidden value (" + this.cosmeticId + ") on element of CharacterRemodelingInformation.cosmeticId.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = param1.readInt();
      this.colors.push(_loc4_);
      _loc3_++;
    }
    return;
  }
};

CharacterRemodelingInformation.prototype.getTypeId = function() {
  return 479;
};

CharacterRemodelingInformation.prototype.getClassName = function() {
  return 'CharacterRemodelingInformation';
};

module.exports.id = 479;
module.exports.class = CharacterRemodelingInformation;