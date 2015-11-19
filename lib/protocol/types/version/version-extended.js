/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Version = require('./version');
var VersionExtended = (function (_super) {
    __extends(VersionExtended, _super);
    function VersionExtended() {
        this.install = 0;
        this.technology = 0;
        _super.call(this);
    }
    VersionExtended.prototype.getTypeId = function () {
        return VersionExtended.ID;
    };
    VersionExtended.prototype.reset = function () {
        this.install = 0;
        this.technology = 0;
    };
    VersionExtended.prototype.serialize = function (param1) {
        this.serializeAs_VersionExtended(param1);
    };
    VersionExtended.prototype.serializeAs_VersionExtended = function (param1) {
        _super.prototype.serializeAs_Version.call(this, param1);
        param1.writeByte(this.install);
        param1.writeByte(this.technology);
    };
    VersionExtended.prototype.deserialize = function (param1) {
        this.deserializeAs_VersionExtended(param1);
    };
    VersionExtended.prototype.deserializeAs_VersionExtended = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.install = param1.readByte();
        if (this.install < 0) {
            throw new Error('Forbidden value (' + this.install + ') on element of VersionExtended.install.');
        }
        this.technology = param1.readByte();
        if (this.technology < 0) {
            throw new Error('Forbidden value (' + this.technology + ') on element of VersionExtended.technology.');
        }
    };
    VersionExtended.ID = 393;
    return VersionExtended;
})(Version);
module.exports = VersionExtended;
