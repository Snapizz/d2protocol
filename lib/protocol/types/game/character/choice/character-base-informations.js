/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CharacterMinimalPlusLookInformations = require('./../character-minimal-plus-look-informations');
var CharacterBaseInformations = (function (_super) {
    __extends(CharacterBaseInformations, _super);
    function CharacterBaseInformations() {
        this.breed = 0;
        this.sex = false;
        _super.call(this);
    }
    CharacterBaseInformations.prototype.getTypeId = function () {
        return CharacterBaseInformations.ID;
    };
    CharacterBaseInformations.prototype.reset = function () {
        this.breed = 0;
        this.sex = false;
    };
    CharacterBaseInformations.prototype.serialize = function (param1) {
        this.serializeAs_CharacterBaseInformations(param1);
    };
    CharacterBaseInformations.prototype.serializeAs_CharacterBaseInformations = function (param1) {
        _super.prototype.serializeAs_CharacterMinimalPlusLookInformations.call(this, param1);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
    };
    CharacterBaseInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterBaseInformations(param1);
    };
    CharacterBaseInformations.prototype.deserializeAs_CharacterBaseInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.breed = param1.readByte();
        this.sex = param1.readBoolean();
    };
    CharacterBaseInformations.ID = 45;
    return CharacterBaseInformations;
})(CharacterMinimalPlusLookInformations);
module.exports = CharacterBaseInformations;
