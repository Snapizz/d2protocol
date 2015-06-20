var TaxCollectorInformations = function() {
  this.uniqueId = 0;
  this.firtNameId = 0;
  this.lastNameId = 0;
  this.additionalInfos;
  this.worldX = 0;
  this.worldY = 0;
  this.subAreaId = 0;
  this.state = 0;
  this.look;
  this.complements = [];
};



TaxCollectorInformations.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorInformations(output);
};

TaxCollectorInformations.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorInformations(input);
};

TaxCollectorInformations.prototype.serializeAs_TaxCollectorInformations = function(param1) {
  param1.writeInt(this.uniqueId);
  if (this.firtNameId < 0) {
    throw new Error("Forbidden value (" + this.firtNameId + ") on element firtNameId.");
  } else {
    param1.writeVarShort(this.firtNameId);
    if (this.lastNameId < 0) {
      throw new Error("Forbidden value (" + this.lastNameId + ") on element lastNameId.");
    } else {
      param1.writeVarShort(this.lastNameId);
      this.additionalInfos.serializeAs_AdditionalTaxCollectorInformations(param1);
      if (this.worldX < -255 || this.worldX > 255) {
        throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
      } else {
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
          throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
        } else {
          param1.writeShort(this.worldY);
          if (this.subAreaId < 0) {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
          } else {
            param1.writeVarShort(this.subAreaId);
            param1.writeByte(this.state);
            this.look.serializeAs_EntityLook(param1);
            param1.writeShort(this.complements.length);
            var _loc2_ = 0;
            while (_loc2_ < this.complements.length) {
              param1.writeShort((this.complements[_loc2_]).getTypeId());
              (this.complements[_loc2_]).serialize(param1);
              _loc2_++;
            }
            return;
          }
        }
      }
    }
  }
};

TaxCollectorInformations.prototype.deserializeAs_TaxCollectorInformations = function(param1) {
  var _loc4_ = 0;
  var _loc5_ = null;
  this.uniqueId = param1.readInt();
  this.firtNameId = param1.readVarUhShort();
  if (this.firtNameId < 0) {
    throw new Error("Forbidden value (" + this.firtNameId + ") on element of TaxCollectorInformations.firtNameId.");
  } else {
    this.lastNameId = param1.readVarUhShort();
    if (this.lastNameId < 0) {
      throw new Error("Forbidden value (" + this.lastNameId + ") on element of TaxCollectorInformations.lastNameId.");
    } else {
      this.additionalInfos = new AdditionalTaxCollectorInformations();
      this.additionalInfos.deserialize(param1);
      this.worldX = param1.readShort();
      if (this.worldX < -255 || this.worldX > 255) {
        throw new Error("Forbidden value (" + this.worldX + ") on element of TaxCollectorInformations.worldX.");
      } else {
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
          throw new Error("Forbidden value (" + this.worldY + ") on element of TaxCollectorInformations.worldY.");
        } else {
          this.subAreaId = param1.readVarUhShort();
          if (this.subAreaId < 0) {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of TaxCollectorInformations.subAreaId.");
          } else {
            this.state = param1.readByte();
            if (this.state < 0) {
              throw new Error("Forbidden value (" + this.state + ") on element of TaxCollectorInformations.state.");
            } else {
              this.look = new EntityLook();
              this.look.deserialize(param1);
              var _loc2_ = param1.readUnsignedShort();
              var _loc3_ = 0;
              while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = ProtocolTypeManager.getInstance(TaxCollectorComplementaryInformations, _loc4_);
                _loc5_.deserialize(param1);
                this.complements.push(_loc5_);
                _loc3_++;
              }
              return;
            }
          }
        }
      }
    }
  }
};

TaxCollectorInformations.prototype.getTypeId = function() {
  return 167;
};

TaxCollectorInformations.prototype.getClassName = function() {
  return 'TaxCollectorInformations';
};

module.exports.id = 167;
module.exports.class = TaxCollectorInformations;