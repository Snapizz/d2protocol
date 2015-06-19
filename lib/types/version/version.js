var Version = function() {
  this.major = 0;
  this.minor = 0;
  this.release = 0;
  this.revision = 0;
  this.patch = 0;
  this.buildType = 0;
};



Version.prototype.serialize = function(output) {
  this.serializeAs_Version(output);
};

Version.prototype.deserialize = function(input) {
  this.deserializeAs_Version(input);
};

Version.prototype.serializeAs_Version = function(output) {
  if (this.major < 0) {
    throw (new Error((("Forbidden value (" + this.major) + ") on element major.")));
  };
  output.writeByte(this.major);
  if (this.minor < 0) {
    throw (new Error((("Forbidden value (" + this.minor) + ") on element minor.")));
  };
  output.writeByte(this.minor);
  if (this.release < 0) {
    throw (new Error((("Forbidden value (" + this.release) + ") on element release.")));
  };
  output.writeByte(this.release);
  if (this.revision < 0) {
    throw (new Error((("Forbidden value (" + this.revision) + ") on element revision.")));
  };
  output.writeInt(this.revision);
  if (this.patch < 0) {
    throw (new Error((("Forbidden value (" + this.patch) + ") on element patch.")));
  };
  output.writeByte(this.patch);
  output.writeByte(this.buildType);
};

Version.prototype.deserializeAs_Version = function(input) {
  this.major = input.readByte();
  if (this.major < 0) {
    throw (new Error((("Forbidden value (" + this.major) + ") on element of Version.major.")));
  };
  this.minor = input.readByte();
  if (this.minor < 0) {
    throw (new Error((("Forbidden value (" + this.minor) + ") on element of Version.minor.")));
  };
  this.release = input.readByte();
  if (this.release < 0) {
    throw (new Error((("Forbidden value (" + this.release) + ") on element of Version.release.")));
  };
  this.revision = input.readInt();
  if (this.revision < 0) {
    throw (new Error((("Forbidden value (" + this.revision) + ") on element of Version.revision.")));
  };
  this.patch = input.readByte();
  if (this.patch < 0) {
    throw (new Error((("Forbidden value (" + this.patch) + ") on element of Version.patch.")));
  };
  this.buildType = input.readByte();
  if (this.buildType < 0) {
    throw (new Error((("Forbidden value (" + this.buildType) + ") on element of Version.buildType.")));
  };
};

Version.prototype.getTypeId = function() {
  return 11;
};

Version.prototype.getClassName = function() {
  return 'Version';
};

module.exports.id = 11;
module.exports.class = Version;