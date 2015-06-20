var BaseMessage = require('./version.js').class,
  util = require('util');

var Version = function() {
  this.major = 0;
  this.minor = 0;
  this.release = 0;
  this.revision = 0;
  this.patch = 0;
  this.buildType = 0;
};

util.inherits(Version, BaseMessage);

Version.prototype.serialize = function(output) {
  this.serializeAs_Version(output);
};

Version.prototype.deserialize = function(input) {
  this.deserializeAs_Version(input);
};

Version.prototype.serializeAs_Version = function(param1) {
  if (this.major < 0) {
    throw new Error("Forbidden value (" + this.major + ") on element major.");
  } else {
    param1.writeByte(this.major);
    if (this.minor < 0) {
      throw new Error("Forbidden value (" + this.minor + ") on element minor.");
    } else {
      param1.writeByte(this.minor);
      if (this.release < 0) {
        throw new Error("Forbidden value (" + this.release + ") on element release.");
      } else {
        param1.writeByte(this.release);
        if (this.revision < 0) {
          throw new Error("Forbidden value (" + this.revision + ") on element revision.");
        } else {
          param1.writeInt(this.revision);
          if (this.patch < 0) {
            throw new Error("Forbidden value (" + this.patch + ") on element patch.");
          } else {
            param1.writeByte(this.patch);
            param1.writeByte(this.buildType);
            return;
          }
        }
      }
    }
  }
};

Version.prototype.deserializeAs_Version = function(param1) {
  this.major = param1.readByte();
  if (this.major < 0) {
    throw new Error("Forbidden value (" + this.major + ") on element of Version.major.");
  } else {
    this.minor = param1.readByte();
    if (this.minor < 0) {
      throw new Error("Forbidden value (" + this.minor + ") on element of Version.minor.");
    } else {
      this.release = param1.readByte();
      if (this.release < 0) {
        throw new Error("Forbidden value (" + this.release + ") on element of Version.release.");
      } else {
        this.revision = param1.readInt();
        if (this.revision < 0) {
          throw new Error("Forbidden value (" + this.revision + ") on element of Version.revision.");
        } else {
          this.patch = param1.readByte();
          if (this.patch < 0) {
            throw new Error("Forbidden value (" + this.patch + ") on element of Version.patch.");
          } else {
            this.buildType = param1.readByte();
            if (this.buildType < 0) {
              throw new Error("Forbidden value (" + this.buildType + ") on element of Version.buildType.");
            } else {
              return;
            }
          }
        }
      }
    }
  }
};

Version.prototype.getTypeId = function() {
  return 11;
};

Version.prototype.getClassName = function() {
  return 'Version';
};

module.exports.id = 11;
module.exports.class = Version;
module.exports.getInstance = function() {
  return new Version();
};