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

JobCrafterDirectoryEntryPlayerInfo.prototype.serializeAs_JobCrafterDirectoryEntryPlayerInfo = function(param1) {
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
  } else {
    param1.writeVarInt(this.playerId);
    param1.writeUTF(this.playerName);
    param1.writeByte(this.alignmentSide);
    param1.writeByte(this.breed);
    param1.writeBoolean(this.sex);
    param1.writeBoolean(this.isInWorkshop);
    if (this.worldX < -255 || this.worldX > 255) {
      throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
    } else {
      param1.writeShort(this.worldX);
      if (this.worldY < -255 || this.worldY > 255) {
        throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
      } else {
        param1.writeShort(this.worldY);
        param1.writeInt(this.mapId);
        if (this.subAreaId < 0) {
          throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
        } else {
          param1.writeVarShort(this.subAreaId);
          param1.writeShort(this.status.getTypeId());
          this.status.serialize(param1);
          return;
        }
      }
    }
  }
};

JobCrafterDirectoryEntryPlayerInfo.prototype.deserializeAs_JobCrafterDirectoryEntryPlayerInfo = function(param1) {
  this.playerId = param1.readVarUhInt();
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element of JobCrafterDirectoryEntryPlayerInfo.playerId.");
  } else {
    this.playerName = param1.readUTF();
    this.alignmentSide = param1.readByte();
    this.breed = param1.readByte();
    if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
      throw new Error("Forbidden value (" + this.breed + ") on element of JobCrafterDirectoryEntryPlayerInfo.breed.");
    } else {
      this.sex = param1.readBoolean();
      this.isInWorkshop = param1.readBoolean();
      this.worldX = param1.readShort();
      if (this.worldX < -255 || this.worldX > 255) {
        throw new Error("Forbidden value (" + this.worldX + ") on element of JobCrafterDirectoryEntryPlayerInfo.worldX.");
      } else {
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
          throw new Error("Forbidden value (" + this.worldY + ") on element of JobCrafterDirectoryEntryPlayerInfo.worldY.");
        } else {
          this.mapId = param1.readInt();
          this.subAreaId = param1.readVarUhShort();
          if (this.subAreaId < 0) {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of JobCrafterDirectoryEntryPlayerInfo.subAreaId.");
          } else {
            var _loc2_ = param1.readUnsignedShort();
            this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
            this.status.deserialize(param1);
            return;
          }
        }
      }
    }
  }
};

JobCrafterDirectoryEntryPlayerInfo.prototype.getTypeId = function() {
  return 194;
};

JobCrafterDirectoryEntryPlayerInfo.prototype.getClassName = function() {
  return 'JobCrafterDirectoryEntryPlayerInfo';
};

module.exports.id = 194;
module.exports.class = JobCrafterDirectoryEntryPlayerInfo;