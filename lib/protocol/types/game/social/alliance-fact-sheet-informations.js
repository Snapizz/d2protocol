/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AllianceInformations = require('../context/roleplay/alliance-informations');
var AllianceFactSheetInformations = (function (_super) {
    __extends(AllianceFactSheetInformations, _super);
    function AllianceFactSheetInformations() {
        this.creationDate = 0;
        _super.call(this);
    }
    AllianceFactSheetInformations.prototype.getTypeId = function () {
        return AllianceFactSheetInformations.ID;
    };
    AllianceFactSheetInformations.prototype.reset = function () {
        this.creationDate = 0;
    };
    AllianceFactSheetInformations.prototype.serialize = function (param1) {
        this.serializeAs_AllianceFactSheetInformations(param1);
    };
    AllianceFactSheetInformations.prototype.serializeAs_AllianceFactSheetInformations = function (param1) {
        _super.prototype.serializeAs_AllianceInformations.call(this, param1);
        if (this.creationDate < 0) {
            throw new Error('Forbidden value (' + this.creationDate + ') on element creationDate.');
        }
        param1.writeInt(this.creationDate);
    };
    AllianceFactSheetInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceFactSheetInformations(param1);
    };
    AllianceFactSheetInformations.prototype.deserializeAs_AllianceFactSheetInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.creationDate = param1.readInt();
        if (this.creationDate < 0) {
            throw new Error('Forbidden value (' + this.creationDate + ') on element of AllianceFactSheetInformations.creationDate.');
        }
    };
    AllianceFactSheetInformations.ID = 421;
    return AllianceFactSheetInformations;
})(AllianceInformations);
module.exports = AllianceFactSheetInformations;
