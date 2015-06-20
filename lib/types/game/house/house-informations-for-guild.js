var HouseInformationsForGuild = function() {
  this.houseId = 0;
  this.modelId = 0;
  this.ownerName = "";
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
  this.skillListIds = [];
  this.guildshareParams = 0;
};



HouseInformationsForGuild.prototype.serialize = function(output) {
  this.serializeAs_HouseInformationsForGuild(output);
};

HouseInformationsForGuild.prototype.deserialize = function(input) {
  this.deserializeAs_HouseInformationsForGuild(input);
};

HouseInformationsForGuild.prototype.serializeAs_HouseInformationsForGuild = function(output) {
  if (this.houseId < 0) {
    throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
  } else {
    param1.writeVarInt(this.houseId);
    if (this.modelId < 0) {
      throw new Error("Forbidden value (" + this.modelId + ") on element modelId.");
    } else {
      param1.writeVarInt(this.modelId);
      param1.writeUTF(this.ownerName);
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
            param1.writeShort(this.skillListIds.length);
            var _loc2_ = 0;
            while (_loc2_ < this.skillListIds.length) {
              param1.writeInt(this.skillListIds[_loc2_]);
              _loc2_++;
            }
            if (this.guildshareParams < 0) {
              throw new Error("Forbidden value (" + this.guildshareParams + ") on element guildshareParams.");
            } else {
              param1.writeVarInt(this.guildshareParams);
              return;
            }
          }
        }
      }
    }
  }
};

HouseInformationsForGuild.prototype.deserializeAs_HouseInformationsForGuild = function(input) {
  var _loc4_ = 0;
  this.houseId = param1.readVarUhInt();
  if (this.houseId < 0) {
    throw new Error("Forbidden value (" + this.houseId + ") on element of HouseInformationsForGuild.houseId.");
  } else {
    this.modelId = param1.readVarUhInt();
    if (this.modelId < 0) {
      throw new Error("Forbidden value (" + this.modelId + ") on element of HouseInformationsForGuild.modelId.");
    } else {
      this.ownerName = param1.readUTF();
      this.worldX = param1.readShort();
      if (this.worldX < -255 || this.worldX > 255) {
        throw new Error("Forbidden value (" + this.worldX + ") on element of HouseInformationsForGuild.worldX.");
      } else {
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
          throw new Error("Forbidden value (" + this.worldY + ") on element of HouseInformationsForGuild.worldY.");
        } else {
          this.mapId = param1.readInt();
          this.subAreaId = param1.readVarUhShort();
          if (this.subAreaId < 0) {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of HouseInformationsForGuild.subAreaId.");
          } else {
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
              _loc4_ = param1.readInt();
              this.skillListIds.push(_loc4_);
              _loc3_++;
            }
            this.guildshareParams = param1.readVarUhInt();
            if (this.guildshareParams < 0) {
              throw new Error("Forbidden value (" + this.guildshareParams + ") on element of HouseInformationsForGuild.guildshareParams.");
            } else {
              return;
            }
          }
        }
      }
    }
  }
};

HouseInformationsForGuild.prototype.getTypeId = function() {
  return 170;
};

HouseInformationsForGuild.prototype.getClassName = function() {
  return 'HouseInformationsForGuild';
};

module.exports.id = 170;
module.exports.class = HouseInformationsForGuild;