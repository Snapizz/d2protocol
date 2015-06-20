var TaxCollectorBasicInformations = function() {
  this.firstNameId = 0;
  this.lastNameId = 0;
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
};



TaxCollectorBasicInformations.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorBasicInformations(output);
};

TaxCollectorBasicInformations.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorBasicInformations(input);
};

TaxCollectorBasicInformations.prototype.serializeAs_TaxCollectorBasicInformations = function(output) {
  if (this.firstNameId < 0) {
    throw new Error("Forbidden value (" + this.firstNameId + ") on element firstNameId.");
  } else {
    param1.writeVarShort(this.firstNameId);
    if (this.lastNameId < 0) {
      throw new Error("Forbidden value (" + this.lastNameId + ") on element lastNameId.");
    } else {
      param1.writeVarShort(this.lastNameId);
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
            return;
          }
        }
      }
    }
  }
};

TaxCollectorBasicInformations.prototype.deserializeAs_TaxCollectorBasicInformations = function(input) {
  this.firstNameId = param1.readVarUhShort();
  if (this.firstNameId < 0) {
    throw new Error("Forbidden value (" + this.firstNameId + ") on element of TaxCollectorBasicInformations.firstNameId.");
  } else {
    this.lastNameId = param1.readVarUhShort();
    if (this.lastNameId < 0) {
      throw new Error("Forbidden value (" + this.lastNameId + ") on element of TaxCollectorBasicInformations.lastNameId.");
    } else {
      this.worldX = param1.readShort();
      if (this.worldX < -255 || this.worldX > 255) {
        throw new Error("Forbidden value (" + this.worldX + ") on element of TaxCollectorBasicInformations.worldX.");
      } else {
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
          throw new Error("Forbidden value (" + this.worldY + ") on element of TaxCollectorBasicInformations.worldY.");
        } else {
          this.mapId = param1.readInt();
          this.subAreaId = param1.readVarUhShort();
          if (this.subAreaId < 0) {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of TaxCollectorBasicInformations.subAreaId.");
          } else {
            return;
          }
        }
      }
    }
  }
};

TaxCollectorBasicInformations.prototype.getTypeId = function() {
  return 96;
};

TaxCollectorBasicInformations.prototype.getClassName = function() {
  return 'TaxCollectorBasicInformations';
};

module.exports.id = 96;
module.exports.class = TaxCollectorBasicInformations;