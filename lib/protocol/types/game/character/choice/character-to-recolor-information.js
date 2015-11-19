/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractCharacterToRefurbishInformation = require('./abstract-character-to-refurbish-information');
var CharacterToRecolorInformation = (function (_super) {
    __extends(CharacterToRecolorInformation, _super);
    function CharacterToRecolorInformation() {
        _super.call(this);
    }
    CharacterToRecolorInformation.prototype.getTypeId = function () {
        return CharacterToRecolorInformation.ID;
    };
    CharacterToRecolorInformation.prototype.reset = function () {
    };
    CharacterToRecolorInformation.prototype.serialize = function (param1) {
        this.serializeAs_CharacterToRecolorInformation(param1);
    };
    CharacterToRecolorInformation.prototype.serializeAs_CharacterToRecolorInformation = function (param1) {
        _super.prototype.serializeAs_AbstractCharacterToRefurbishInformation.call(this, param1);
    };
    CharacterToRecolorInformation.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterToRecolorInformation(param1);
    };
    CharacterToRecolorInformation.prototype.deserializeAs_CharacterToRecolorInformation = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    CharacterToRecolorInformation.ID = 212;
    return CharacterToRecolorInformation;
})(AbstractCharacterToRefurbishInformation);
module.exports = CharacterToRecolorInformation;
