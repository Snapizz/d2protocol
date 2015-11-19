/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TaxCollectorStaticInformations = require('./tax-collector-static-informations');
var AllianceInformations = require('./roleplay/alliance-informations');
var TaxCollectorStaticExtendedInformations = (function (_super) {
    __extends(TaxCollectorStaticExtendedInformations, _super);
    function TaxCollectorStaticExtendedInformations() {
        this.allianceIdentity = new AllianceInformations();
        _super.call(this);
    }
    TaxCollectorStaticExtendedInformations.prototype.getTypeId = function () {
        return TaxCollectorStaticExtendedInformations.ID;
    };
    TaxCollectorStaticExtendedInformations.prototype.reset = function () {
        this.allianceIdentity = new AllianceInformations();
    };
    TaxCollectorStaticExtendedInformations.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorStaticExtendedInformations(param1);
    };
    TaxCollectorStaticExtendedInformations.prototype.serializeAs_TaxCollectorStaticExtendedInformations = function (param1) {
        _super.prototype.serializeAs_TaxCollectorStaticInformations.call(this, param1);
        this.allianceIdentity.serializeAs_AllianceInformations(param1);
    };
    TaxCollectorStaticExtendedInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorStaticExtendedInformations(param1);
    };
    TaxCollectorStaticExtendedInformations.prototype.deserializeAs_TaxCollectorStaticExtendedInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.allianceIdentity = new AllianceInformations();
        this.allianceIdentity.deserialize(param1);
    };
    TaxCollectorStaticExtendedInformations.ID = 440;
    return TaxCollectorStaticExtendedInformations;
})(TaxCollectorStaticInformations);
module.exports = TaxCollectorStaticExtendedInformations;
