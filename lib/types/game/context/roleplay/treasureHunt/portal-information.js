var PortalInformation = function() {
  this.portalId = 0;
  this.areaId = 0;
};



PortalInformation.prototype.serialize = function(output) {
  this.serializeAs_PortalInformation(output);
};

PortalInformation.prototype.deserialize = function(input) {
  this.deserializeAs_PortalInformation(input);
};

PortalInformation.prototype.serializeAs_PortalInformation = function(output) {
  if (this.portalId < 0) {
    throw (new Error((("Forbidden value (" + this.portalId) + ") on element portalId.")));
  };
  output.writeVarShort(this.portalId);
  output.writeShort(this.areaId);
};

PortalInformation.prototype.deserializeAs_PortalInformation = function(input) {
  this.portalId = input.readVarUhShort();
  if (this.portalId < 0) {
    throw (new Error((("Forbidden value (" + this.portalId) + ") on element of PortalInformation.portalId.")));
  };
  this.areaId = input.readShort();
};

PortalInformation.prototype.getTypeId = function() {
  return 466;
};

PortalInformation.prototype.getClassName = function() {
  return 'PortalInformation';
};

module.exports.id = 466;
module.exports.class = PortalInformation;