var BaseMessage = require('./version.js').class,
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

VersionExtended.prototype.serializeAs_VersionExtended = function(output) {
  this.serializeAs_Version(output);
  output.writeByte(this.install);
  output.writeByte(this.technology);
};

VersionExtended.prototype.deserializeAs_VersionExtended = function(input) {
  this.deserialize(input);
  this.install = input.readByte();
  if (this.install < 0) {
    throw (new Error((("Forbidden value (" + this.install) + ") on element of VersionExtended.install.")));
  };
  this.technology = input.readByte();
  if (this.technology < 0) {
    throw (new Error((("Forbidden value (" + this.technology) + ") on element of VersionExtended.technology.")));
  };
};

VersionExtended.prototype.getTypeId = function() {
  return 393;
};

VersionExtended.prototype.getClassName = function() {
  return 'VersionExtended';
};

module.exports.id = 393;
module.exports.class = VersionExtended;