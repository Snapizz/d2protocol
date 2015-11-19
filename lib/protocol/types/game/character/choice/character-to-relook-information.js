/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractCharacterToRefurbishInformation = require('./abstract-character-to-refurbish-information');
var CharacterToRelookInformation = (function (_super) {
    __extends(CharacterToRelookInformation, _super);
    function CharacterToRelookInformation() {
        _super.call(this);
    }
    CharacterToRelookInformation.prototype.getTypeId = function () {
        return CharacterToRelookInformation.ID;
    };
    CharacterToRelookInformation.prototype.reset = function () {
    };
    CharacterToRelookInformation.prototype.serialize = function (param1) {
        this.serializeAs_CharacterToRelookInformation(param1);
    };
    CharacterToRelookInformation.prototype.serializeAs_CharacterToRelookInformation = function (param1) {
        _super.prototype.serializeAs_AbstractCharacterToRefurbishInformation.call(this, param1);
    };
    CharacterToRelookInformation.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterToRelookInformation(param1);
    };
    CharacterToRelookInformation.prototype.deserializeAs_CharacterToRelookInformation = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    CharacterToRelookInformation.ID = 399;
    return CharacterToRelookInformation;
})(AbstractCharacterToRefurbishInformation);
module.exports = CharacterToRelookInformation;
