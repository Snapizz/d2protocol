/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CharacterMinimalPlusLookInformations = require('./character-minimal-plus-look-informations');
var CharacterMinimalPlusLookAndGradeInformations = (function (_super) {
    __extends(CharacterMinimalPlusLookAndGradeInformations, _super);
    function CharacterMinimalPlusLookAndGradeInformations() {
        this.grade = 0;
        _super.call(this);
    }
    CharacterMinimalPlusLookAndGradeInformations.prototype.getTypeId = function () {
        return CharacterMinimalPlusLookAndGradeInformations.ID;
    };
    CharacterMinimalPlusLookAndGradeInformations.prototype.reset = function () {
        this.grade = 0;
    };
    CharacterMinimalPlusLookAndGradeInformations.prototype.serialize = function (param1) {
        this.serializeAs_CharacterMinimalPlusLookAndGradeInformations(param1);
    };
    CharacterMinimalPlusLookAndGradeInformations.prototype.serializeAs_CharacterMinimalPlusLookAndGradeInformations = function (param1) {
        _super.prototype.serializeAs_CharacterMinimalPlusLookInformations.call(this, param1);
        if (this.grade < 0) {
            throw new Error('Forbidden value (' + this.grade + ') on element grade.');
        }
        param1.writeVarInt(this.grade);
    };
    CharacterMinimalPlusLookAndGradeInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterMinimalPlusLookAndGradeInformations(param1);
    };
    CharacterMinimalPlusLookAndGradeInformations.prototype.deserializeAs_CharacterMinimalPlusLookAndGradeInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.grade = param1.readVarUhInt();
        if (this.grade < 0) {
            throw new Error('Forbidden value (' + this.grade + ') on element of CharacterMinimalPlusLookAndGradeInformations.grade.');
        }
    };
    CharacterMinimalPlusLookAndGradeInformations.ID = 193;
    return CharacterMinimalPlusLookAndGradeInformations;
})(CharacterMinimalPlusLookInformations);
module.exports = CharacterMinimalPlusLookAndGradeInformations;
