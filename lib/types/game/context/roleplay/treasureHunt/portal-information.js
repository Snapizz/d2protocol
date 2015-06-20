var BaseMessage = require('./portal-information.js').class,
  util = require('util');

var PortalInformation = function() {
  this.portalId = 0;
  this.areaId = 0;
};

util.inherits(PortalInformation, BaseMessage);

PortalInformation.prototype.serialize = function(output) {
  this.serializeAs_PortalInformation(output);
};

PortalInformation.prototype.deserialize = function(input) {
  this.deserializeAs_PortalInformation(input);
};

PortalInformation.prototype.serializeAs_PortalInformation = function(param1) {
  if (this.portalId < 0) {
    throw new Error("Forbidden value (" + this.portalId + ") on element portalId.");
  } else {
    param1.writeVarShort(this.portalId);
    param1.writeShort(this.areaId);
    return;
  }
};

PortalInformation.prototype.deserializeAs_PortalInformation = function(param1) {
  this.portalId = param1.readVarUhShort();
  if (this.portalId < 0) {
    throw new Error("Forbidden value (" + this.portalId + ") on element of PortalInformation.portalId.");
  } else {
    this.areaId = param1.readShort();
    return;
  }
};

PortalInformation.prototype.getTypeId = function() {
  return 466;
};

PortalInformation.prototype.getClassName = function() {
  return 'PortalInformation';
};

module.exports.id = 466;
module.exports.class = PortalInformation;
module.exports.getInstance = function() {
  return new PortalInformation();
};