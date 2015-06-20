var PaddockContentInformations = function() {
  this.paddockId = 0;
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
  this.abandonned = false;
  this.mountsInformations = [];
};



PaddockContentInformations.prototype.serialize = function(output) {
  this.serializeAs_PaddockContentInformations(output);
};

PaddockContentInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockContentInformations(input);
};

PaddockContentInformations.prototype.serializeAs_PaddockContentInformations = function(param1) {
  this.serializeAs_PaddockInformations(param1);
  param1.writeInt(this.paddockId);
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
        param1.writeBoolean(this.abandonned);
        param1.writeShort(this.mountsInformations.length);
        var _loc2_ = 0;
        while (_loc2_ < this.mountsInformations.length) {
          (this.mountsInformations[_loc2_]).serializeAs_MountInformationsForPaddock(param1);
          _loc2_++;
        }
        return;
      }
    }
  }
};

PaddockContentInformations.prototype.deserializeAs_PaddockContentInformations = function(param1) {
  var _loc4_ = null;
  this.deserialize(param1);
  this.paddockId = param1.readInt();
  this.worldX = param1.readShort();
  if (this.worldX < -255 || this.worldX > 255) {
    throw new Error("Forbidden value (" + this.worldX + ") on element of PaddockContentInformations.worldX.");
  } else {
    this.worldY = param1.readShort();
    if (this.worldY < -255 || this.worldY > 255) {
      throw new Error("Forbidden value (" + this.worldY + ") on element of PaddockContentInformations.worldY.");
    } else {
      this.mapId = param1.readInt();
      this.subAreaId = param1.readVarUhShort();
      if (this.subAreaId < 0) {
        throw new Error("Forbidden value (" + this.subAreaId + ") on element of PaddockContentInformations.subAreaId.");
      } else {
        this.abandonned = param1.readBoolean();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
          _loc4_ = new MountInformationsForPaddock();
          _loc4_.deserialize(param1);
          this.mountsInformations.push(_loc4_);
          _loc3_++;
        }
        return;
      }
    }
  }
};

PaddockContentInformations.prototype.getTypeId = function() {
  return 183;
};

PaddockContentInformations.prototype.getClassName = function() {
  return 'PaddockContentInformations';
};

module.exports.id = 183;
module.exports.class = PaddockContentInformations;
module.exports.getInstance = function() {
  return new PaddockContentInformations();
};