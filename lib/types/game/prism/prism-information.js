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

PrismInformation.prototype.serializeAs_PrismInformation = function(output) {
  if (this.typeId < 0) {
    throw (new Error((("Forbidden value (" + this.typeId) + ") on element typeId.")));
  };
  output.writeByte(this.typeId);
  output.writeByte(this.state);
  if (this.nextVulnerabilityDate < 0) {
    throw (new Error((("Forbidden value (" + this.nextVulnerabilityDate) + ") on element nextVulnerabilityDate.")));
  };
  output.writeInt(this.nextVulnerabilityDate);
  if (this.placementDate < 0) {
    throw (new Error((("Forbidden value (" + this.placementDate) + ") on element placementDate.")));
  };
  output.writeInt(this.placementDate);
  if (this.rewardTokenCount < 0) {
    throw (new Error((("Forbidden value (" + this.rewardTokenCount) + ") on element rewardTokenCount.")));
  };
  output.writeVarInt(this.rewardTokenCount);
};

PrismInformation.prototype.deserializeAs_PrismInformation = function(input) {
  this.typeId = input.readByte();
  if (this.typeId < 0) {
    throw (new Error((("Forbidden value (" + this.typeId) + ") on element of PrismInformation.typeId.")));
  };
  this.state = input.readByte();
  if (this.state < 0) {
    throw (new Error((("Forbidden value (" + this.state) + ") on element of PrismInformation.state.")));
  };
  this.nextVulnerabilityDate = input.readInt();
  if (this.nextVulnerabilityDate < 0) {
    throw (new Error((("Forbidden value (" + this.nextVulnerabilityDate) + ") on element of PrismInformation.nextVulnerabilityDate.")));
  };
  this.placementDate = input.readInt();
  if (this.placementDate < 0) {
    throw (new Error((("Forbidden value (" + this.placementDate) + ") on element of PrismInformation.placementDate.")));
  };
  this.rewardTokenCount = input.readVarUhInt();
  if (this.rewardTokenCount < 0) {
    throw (new Error((("Forbidden value (" + this.rewardTokenCount) + ") on element of PrismInformation.rewardTokenCount.")));
  };
};

PrismInformation.prototype.getTypeId = function() {
  return 428;
};

PrismInformation.prototype.getClassName = function() {
  return 'PrismInformation';
};

module.exports.id = 428;
module.exports.class = PrismInformation;