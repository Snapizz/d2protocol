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

FriendSpouseInformations.prototype.serializeAs_FriendSpouseInformations = function(output) {
  if (this.spouseAccountId < 0) {
    throw (new Error((("Forbidden value (" + this.spouseAccountId) + ") on element spouseAccountId.")));
  };
  output.writeInt(this.spouseAccountId);
  if (this.spouseId < 0) {
    throw (new Error((("Forbidden value (" + this.spouseId) + ") on element spouseId.")));
  };
  output.writeVarInt(this.spouseId);
  output.writeUTF(this.spouseName);
  if ((((this.spouseLevel < 1)) || ((this.spouseLevel > 200)))) {
    throw (new Error((("Forbidden value (" + this.spouseLevel) + ") on element spouseLevel.")));
  };
  output.writeByte(this.spouseLevel);
  output.writeByte(this.breed);
  output.writeByte(this.sex);
  this.spouseEntityLook.serializeAs_EntityLook(output);
  this.guildInfo.serializeAs_BasicGuildInformations(output);
  output.writeByte(this.alignmentSide);
};

FriendSpouseInformations.prototype.deserializeAs_FriendSpouseInformations = function(input) {
  this.spouseAccountId = input.readInt();
  if (this.spouseAccountId < 0) {
    throw (new Error((("Forbidden value (" + this.spouseAccountId) + ") on element of FriendSpouseInformations.spouseAccountId.")));
  };
  this.spouseId = input.readVarUhInt();
  if (this.spouseId < 0) {
    throw (new Error((("Forbidden value (" + this.spouseId) + ") on element of FriendSpouseInformations.spouseId.")));
  };
  this.spouseName = input.readUTF();
  this.spouseLevel = input.readUnsignedByte();
  if ((((this.spouseLevel < 1)) || ((this.spouseLevel > 200)))) {
    throw (new Error((("Forbidden value (" + this.spouseLevel) + ") on element of FriendSpouseInformations.spouseLevel.")));
  };
  this.breed = input.readByte();
  this.sex = input.readByte();
  this.spouseEntityLook = new EntityLook();
  this.spouseEntityLook.deserialize(input);
  this.guildInfo = new BasicGuildInformations();
  this.guildInfo.deserialize(input);
  this.alignmentSide = input.readByte();
};

FriendSpouseInformations.prototype.getTypeId = function() {
  return 77;
};

FriendSpouseInformations.prototype.getClassName = function() {
  return 'FriendSpouseInformations';
};

module.exports.id = 77;
module.exports.class = FriendSpouseInformations;