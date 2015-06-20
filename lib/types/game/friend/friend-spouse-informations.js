var FriendSpouseInformations = function() {
  this.spouseAccountId = 0;
  this.spouseId = 0;
  this.spouseName = "";
  this.spouseLevel = 0;
  this.breed = 0;
  this.sex = 0;
  this.spouseEntityLook;
  this.guildInfo;
  this.alignmentSide = 0;
};



FriendSpouseInformations.prototype.serialize = function(output) {
  this.serializeAs_FriendSpouseInformations(output);
};

FriendSpouseInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FriendSpouseInformations(input);
};

FriendSpouseInformations.prototype.serializeAs_FriendSpouseInformations = function(param1) {
  if (this.spouseAccountId < 0) {
    throw new Error("Forbidden value (" + this.spouseAccountId + ") on element spouseAccountId.");
  } else {
    param1.writeInt(this.spouseAccountId);
    if (this.spouseId < 0) {
      throw new Error("Forbidden value (" + this.spouseId + ") on element spouseId.");
    } else {
      param1.writeVarInt(this.spouseId);
      param1.writeUTF(this.spouseName);
      if (this.spouseLevel < 1 || this.spouseLevel > 200) {
        throw new Error("Forbidden value (" + this.spouseLevel + ") on element spouseLevel.");
      } else {
        param1.writeByte(this.spouseLevel);
        param1.writeByte(this.breed);
        param1.writeByte(this.sex);
        this.spouseEntityLook.serializeAs_EntityLook(param1);
        this.guildInfo.serializeAs_BasicGuildInformations(param1);
        param1.writeByte(this.alignmentSide);
        return;
      }
    }
  }
};

FriendSpouseInformations.prototype.deserializeAs_FriendSpouseInformations = function(param1) {
  this.spouseAccountId = param1.readInt();
  if (this.spouseAccountId < 0) {
    throw new Error("Forbidden value (" + this.spouseAccountId + ") on element of FriendSpouseInformations.spouseAccountId.");
  } else {
    this.spouseId = param1.readVarUhInt();
    if (this.spouseId < 0) {
      throw new Error("Forbidden value (" + this.spouseId + ") on element of FriendSpouseInformations.spouseId.");
    } else {
      this.spouseName = param1.readUTF();
      this.spouseLevel = param1.readUnsignedByte();
      if (this.spouseLevel < 1 || this.spouseLevel > 200) {
        throw new Error("Forbidden value (" + this.spouseLevel + ") on element of FriendSpouseInformations.spouseLevel.");
      } else {
        this.breed = param1.readByte();
        this.sex = param1.readByte();
        this.spouseEntityLook = new EntityLook();
        this.spouseEntityLook.deserialize(param1);
        this.guildInfo = new BasicGuildInformations();
        this.guildInfo.deserialize(param1);
        this.alignmentSide = param1.readByte();
        return;
      }
    }
  }
};

FriendSpouseInformations.prototype.getTypeId = function() {
  return 77;
};

FriendSpouseInformations.prototype.getClassName = function() {
  return 'FriendSpouseInformations';
};

module.exports.id = 77;
module.exports.class = FriendSpouseInformations;
module.exports.getInstance = function() {
  return new FriendSpouseInformations();
};