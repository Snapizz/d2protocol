/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractContactInformations = require('./abstract-contact-informations');
var IgnoredInformations = (function (_super) {
    __extends(IgnoredInformations, _super);
    function IgnoredInformations() {
        _super.call(this);
    }
    IgnoredInformations.prototype.getTypeId = function () {
        return IgnoredInformations.ID;
    };
    IgnoredInformations.prototype.reset = function () {
    };
    IgnoredInformations.prototype.serialize = function (param1) {
        this.serializeAs_IgnoredInformations(param1);
    };
    IgnoredInformations.prototype.serializeAs_IgnoredInformations = function (param1) {
        _super.prototype.serializeAs_AbstractContactInformations.call(this, param1);
    };
    IgnoredInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_IgnoredInformations(param1);
    };
    IgnoredInformations.prototype.deserializeAs_IgnoredInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    IgnoredInformations.ID = 106;
    return IgnoredInformations;
})(AbstractContactInformations);
module.exports = IgnoredInformations;
