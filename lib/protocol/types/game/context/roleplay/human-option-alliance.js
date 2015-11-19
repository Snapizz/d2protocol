/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AllianceInformations = require('./alliance-informations');
var HumanOption = require('./human-option');
var HumanOptionAlliance = (function (_super) {
    __extends(HumanOptionAlliance, _super);
    function HumanOptionAlliance() {
        this.allianceInformations = new AllianceInformations();
        this.aggressable = 0;
        _super.call(this);
    }
    HumanOptionAlliance.prototype.getTypeId = function () {
        return HumanOptionAlliance.ID;
    };
    HumanOptionAlliance.prototype.reset = function () {
        this.allianceInformations = new AllianceInformations();
        this.aggressable = 0;
    };
    HumanOptionAlliance.prototype.serialize = function (param1) {
        this.serializeAs_HumanOptionAlliance(param1);
    };
    HumanOptionAlliance.prototype.serializeAs_HumanOptionAlliance = function (param1) {
        _super.prototype.serializeAs_HumanOption.call(this, param1);
        this.allianceInformations.serializeAs_AllianceInformations(param1);
        param1.writeByte(this.aggressable);
    };
    HumanOptionAlliance.prototype.deserialize = function (param1) {
        this.deserializeAs_HumanOptionAlliance(param1);
    };
    HumanOptionAlliance.prototype.deserializeAs_HumanOptionAlliance = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.allianceInformations = new AllianceInformations();
        this.allianceInformations.deserialize(param1);
        this.aggressable = param1.readByte();
        if (this.aggressable < 0) {
            throw new Error('Forbidden value (' + this.aggressable + ') on element of HumanOptionAlliance.aggressable.');
        }
    };
    HumanOptionAlliance.ID = 425;
    return HumanOptionAlliance;
})(HumanOption);
module.exports = HumanOptionAlliance;
