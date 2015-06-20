var BaseMessage = require('./version-extended.js').class,
  util = require('util');

var VersionExtended = function() {
  this.install = 0;
  this.technology = 0;
};

util.inherits(VersionExtended, BaseMessage);

VersionExtended.prototype.serialize = function(output) {
  this.serializeAs_VersionExtended(output);
};

VersionExtended.prototype.deserialize = function(input) {
  this.deserializeAs_VersionExtended(input);
};

VersionExtended.prototype.serializeAs_VersionExtended = function(param1) {
  this.serializeAs_Version(param1);
  param1.writeByte(this.install);
  param1.writeByte(this.technology);
};

VersionExtended.prototype.deserializeAs_VersionExtended = function(param1) {
  this.deserialize(param1);
  this.install = param1.readByte();
  if (this.install < 0) {
    throw new Error("Forbidden value (" + this.install + ") on element of VersionExtended.install.");
  } else {
    this.technology = param1.readByte();
    if (this.technology < 0) {
      throw new Error("Forbidden value (" + this.technology + ") on element of VersionExtended.technology.");
    } else {
      return;
    }
  }
};

VersionExtended.prototype.getTypeId = function() {
  return 393;
};

VersionExtended.prototype.getClassName = function() {
  return 'VersionExtended';
};

module.exports.id = 393;
module.exports.class = VersionExtended;
module.exports.getInstance = function() {
  return new VersionExtended();
};