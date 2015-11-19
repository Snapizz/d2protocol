/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PrismInformation = require('./prism-information');
var AllianceInformations = require('../context/roleplay/alliance-informations');
var AlliancePrismInformation = (function (_super) {
    __extends(AlliancePrismInformation, _super);
    function AlliancePrismInformation() {
        this.alliance = new AllianceInformations();
        _super.call(this);
    }
    AlliancePrismInformation.prototype.getTypeId = function () {
        return AlliancePrismInformation.ID;
    };
    AlliancePrismInformation.prototype.reset = function () {
        this.alliance = new AllianceInformations();
    };
    AlliancePrismInformation.prototype.serialize = function (param1) {
        this.serializeAs_AlliancePrismInformation(param1);
    };
    AlliancePrismInformation.prototype.serializeAs_AlliancePrismInformation = function (param1) {
        _super.prototype.serializeAs_PrismInformation.call(this, param1);
        this.alliance.serializeAs_AllianceInformations(param1);
    };
    AlliancePrismInformation.prototype.deserialize = function (param1) {
        this.deserializeAs_AlliancePrismInformation(param1);
    };
    AlliancePrismInformation.prototype.deserializeAs_AlliancePrismInformation = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.alliance = new AllianceInformations();
        this.alliance.deserialize(param1);
    };
    AlliancePrismInformation.ID = 427;
    return AlliancePrismInformation;
})(PrismInformation);
module.exports = AlliancePrismInformation;
