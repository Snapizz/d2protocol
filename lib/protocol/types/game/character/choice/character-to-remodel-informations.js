/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CharacterRemodelingInformation = require('./character-remodeling-information');
var CharacterToRemodelInformations = (function (_super) {
    __extends(CharacterToRemodelInformations, _super);
    function CharacterToRemodelInformations() {
        this.possibleChangeMask = 0;
        this.mandatoryChangeMask = 0;
        _super.call(this);
    }
    CharacterToRemodelInformations.prototype.getTypeId = function () {
        return CharacterToRemodelInformations.ID;
    };
    CharacterToRemodelInformations.prototype.reset = function () {
        this.possibleChangeMask = 0;
        this.mandatoryChangeMask = 0;
    };
    CharacterToRemodelInformations.prototype.serialize = function (param1) {
        this.serializeAs_CharacterToRemodelInformations(param1);
    };
    CharacterToRemodelInformations.prototype.serializeAs_CharacterToRemodelInformations = function (param1) {
        _super.prototype.serializeAs_CharacterRemodelingInformation.call(this, param1);
        if (this.possibleChangeMask < 0) {
            throw new Error('Forbidden value (' + this.possibleChangeMask + ') on element possibleChangeMask.');
        }
        param1.writeByte(this.possibleChangeMask);
        if (this.mandatoryChangeMask < 0) {
            throw new Error('Forbidden value (' + this.mandatoryChangeMask + ') on element mandatoryChangeMask.');
        }
        param1.writeByte(this.mandatoryChangeMask);
    };
    CharacterToRemodelInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterToRemodelInformations(param1);
    };
    CharacterToRemodelInformations.prototype.deserializeAs_CharacterToRemodelInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.possibleChangeMask = param1.readByte();
        if (this.possibleChangeMask < 0) {
            throw new Error('Forbidden value (' + this.possibleChangeMask + ') on element of CharacterToRemodelInformations.possibleChangeMask.');
        }
        this.mandatoryChangeMask = param1.readByte();
        if (this.mandatoryChangeMask < 0) {
            throw new Error('Forbidden value (' + this.mandatoryChangeMask + ') on element of CharacterToRemodelInformations.mandatoryChangeMask.');
        }
    };
    CharacterToRemodelInformations.ID = 477;
    return CharacterToRemodelInformations;
})(CharacterRemodelingInformation);
module.exports = CharacterToRemodelInformations;
