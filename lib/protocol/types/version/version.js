/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var Version = (function () {
    function Version() {
        this.major = 0;
        this.minor = 0;
        this.release = 0;
        this.revision = 0;
        this.patch = 0;
        this.buildType = 0;
    }
    Version.prototype.getTypeId = function () {
        return Version.ID;
    };
    Version.prototype.reset = function () {
        this.major = 0;
        this.minor = 0;
        this.release = 0;
        this.revision = 0;
        this.patch = 0;
        this.buildType = 0;
    };
    Version.prototype.serialize = function (param1) {
        this.serializeAs_Version(param1);
    };
    Version.prototype.serializeAs_Version = function (param1) {
        if (this.major < 0) {
            throw new Error('Forbidden value (' + this.major + ') on element major.');
        }
        param1.writeByte(this.major);
        if (this.minor < 0) {
            throw new Error('Forbidden value (' + this.minor + ') on element minor.');
        }
        param1.writeByte(this.minor);
        if (this.release < 0) {
            throw new Error('Forbidden value (' + this.release + ') on element release.');
        }
        param1.writeByte(this.release);
        if (this.revision < 0) {
            throw new Error('Forbidden value (' + this.revision + ') on element revision.');
        }
        param1.writeInt(this.revision);
        if (this.patch < 0) {
            throw new Error('Forbidden value (' + this.patch + ') on element patch.');
        }
        param1.writeByte(this.patch);
        param1.writeByte(this.buildType);
    };
    Version.prototype.deserialize = function (param1) {
        this.deserializeAs_Version(param1);
    };
    Version.prototype.deserializeAs_Version = function (param1) {
        this.major = param1.readByte();
        if (this.major < 0) {
            throw new Error('Forbidden value (' + this.major + ') on element of Version.major.');
        }
        this.minor = param1.readByte();
        if (this.minor < 0) {
            throw new Error('Forbidden value (' + this.minor + ') on element of Version.minor.');
        }
        this.release = param1.readByte();
        if (this.release < 0) {
            throw new Error('Forbidden value (' + this.release + ') on element of Version.release.');
        }
        this.revision = param1.readInt();
        if (this.revision < 0) {
            throw new Error('Forbidden value (' + this.revision + ') on element of Version.revision.');
        }
        this.patch = param1.readByte();
        if (this.patch < 0) {
            throw new Error('Forbidden value (' + this.patch + ') on element of Version.patch.');
        }
        this.buildType = param1.readByte();
        if (this.buildType < 0) {
            throw new Error('Forbidden value (' + this.buildType + ') on element of Version.buildType.');
        }
    };
    Version.ID = 11;
    return Version;
})();
module.exports = Version;
