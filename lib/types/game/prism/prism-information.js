var PrismInformation = function() {
  this.typeId = 0;
  this.state = 1;
  this.nextVulnerabilityDate = 0;
  this.placementDate = 0;
  this.rewardTokenCount = 0;
};



PrismInformation.prototype.serialize = function(output) {
  this.serializeAs_PrismInformation(output);
};

PrismInformation.prototype.deserialize = function(input) {
  this.deserializeAs_PrismInformation(input);
};

PrismInformation.prototype.serializeAs_PrismInformation = function(param1) {
  if (this.typeId < 0) {
    throw new Error("Forbidden value (" + this.typeId + ") on element typeId.");
  } else {
    param1.writeByte(this.typeId);
    param1.writeByte(this.state);
    if (this.nextVulnerabilityDate < 0) {
      throw new Error("Forbidden value (" + this.nextVulnerabilityDate + ") on element nextVulnerabilityDate.");
    } else {
      param1.writeInt(this.nextVulnerabilityDate);
      if (this.placementDate < 0) {
        throw new Error("Forbidden value (" + this.placementDate + ") on element placementDate.");
      } else {
        param1.writeInt(this.placementDate);
        if (this.rewardTokenCount < 0) {
          throw new Error("Forbidden value (" + this.rewardTokenCount + ") on element rewardTokenCount.");
        } else {
          param1.writeVarInt(this.rewardTokenCount);
          return;
        }
      }
    }
  }
};

PrismInformation.prototype.deserializeAs_PrismInformation = function(param1) {
  this.typeId = param1.readByte();
  if (this.typeId < 0) {
    throw new Error("Forbidden value (" + this.typeId + ") on element of PrismInformation.typeId.");
  } else {
    this.state = param1.readByte();
    if (this.state < 0) {
      throw new Error("Forbidden value (" + this.state + ") on element of PrismInformation.state.");
    } else {
      this.nextVulnerabilityDate = param1.readInt();
      if (this.nextVulnerabilityDate < 0) {
        throw new Error("Forbidden value (" + this.nextVulnerabilityDate + ") on element of PrismInformation.nextVulnerabilityDate.");
      } else {
        this.placementDate = param1.readInt();
        if (this.placementDate < 0) {
          throw new Error("Forbidden value (" + this.placementDate + ") on element of PrismInformation.placementDate.");
        } else {
          this.rewardTokenCount = param1.readVarUhInt();
          if (this.rewardTokenCount < 0) {
            throw new Error("Forbidden value (" + this.rewardTokenCount + ") on element of PrismInformation.rewardTokenCount.");
          } else {
            return;
          }
        }
      }
    }
  }
};

PrismInformation.prototype.getTypeId = function() {
  return 428;
};

PrismInformation.prototype.getClassName = function() {
  return 'PrismInformation';
};

module.exports.id = 428;
module.exports.class = PrismInformation;
module.exports.getInstance = function() {
  return new PrismInformation();
};