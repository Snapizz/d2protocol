var JobCrafterDirectoryEntryPlayerInfo = function() {
  this.playerId = 0;
  this.playerName = "";
  this.alignmentSide = 0;
  this.breed = 0;
  this.sex = false;
  this.isInWorkshop = false;
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
  this.status;
};



JobCrafterDirectoryEntryPlayerInfo.prototype.serialize = function(output) {
  this.serializeAs_JobCrafterDirectoryEntryPlayerInfo(output);
};

JobCrafterDirectoryEntryPlayerInfo.prototype.deserialize = function(input) {
  this.deserializeAs_JobCrafterDirectoryEntryPlayerInfo(input);
};

JobCrafterDirectoryEntryPlayerInfo.prototype.serializeAs_JobCrafterDirectoryEntryPlayerInfo = function(output) {
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
  output.writeUTF(this.playerName);
  output.writeByte(this.alignmentSide);
  output.writeByte(this.breed);
  output.writeBoolean(this.sex);
  output.writeBoolean(this.isInWorkshop);
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
  output.writeInt(this.mapId);
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  output.writeShort(this.status.getTypeId());
  this.status.serialize(output);
};

JobCrafterDirectoryEntryPlayerInfo.prototype.deserializeAs_JobCrafterDirectoryEntryPlayerInfo = function(input) {
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of JobCrafterDirectoryEntryPlayerInfo.playerId.")));
  };
  this.playerName = input.readUTF();
  this.alignmentSide = input.readByte();
  this.breed = input.readByte();
  if ((((this.breed < PlayableBreedEnum.Feca)) || ((this.breed > PlayableBreedEnum.Eliatrope)))) {
    throw (new Error((("Forbidden value (" + this.breed) + ") on element of JobCrafterDirectoryEntryPlayerInfo.breed.")));
  };
  this.sex = input.readBoolean();
  this.isInWorkshop = input.readBoolean();
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of JobCrafterDirectoryEntryPlayerInfo.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of JobCrafterDirectoryEntryPlayerInfo.worldY.")));
  };
  this.mapId = input.readInt();
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of JobCrafterDirectoryEntryPlayerInfo.subAreaId.")));
  };
  var _id11 = input.readUnsignedShort();
  this.status = ProtocolTypeManager.getInstance(PlayerStatus, _id11);
  this.status.deserialize(input);
};

JobCrafterDirectoryEntryPlayerInfo.prototype.getTypeId = function() {
  return 194;
};

JobCrafterDirectoryEntryPlayerInfo.prototype.getClassName = function() {
  return 'JobCrafterDirectoryEntryPlayerInfo';
};

module.exports.id = 194;
module.exports.class = JobCrafterDirectoryEntryPlayerInfo;