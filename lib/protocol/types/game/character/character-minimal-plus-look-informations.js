/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CharacterMinimalInformations = require('./character-minimal-informations');
var EntityLook = require('../look/entity-look');
var CharacterMinimalPlusLookInformations = (function (_super) {
    __extends(CharacterMinimalPlusLookInformations, _super);
    function CharacterMinimalPlusLookInformations() {
        this.entityLook = new EntityLook();
        _super.call(this);
    }
    CharacterMinimalPlusLookInformations.prototype.getTypeId = function () {
        return CharacterMinimalPlusLookInformations.ID;
    };
    CharacterMinimalPlusLookInformations.prototype.reset = function () {
        this.entityLook = new EntityLook();
    };
    CharacterMinimalPlusLookInformations.prototype.serialize = function (param1) {
        this.serializeAs_CharacterMinimalPlusLookInformations(param1);
    };
    CharacterMinimalPlusLookInformations.prototype.serializeAs_CharacterMinimalPlusLookInformations = function (param1) {
        _super.prototype.serializeAs_CharacterMinimalInformations.call(this, param1);
        this.entityLook.serializeAs_EntityLook(param1);
    };
    CharacterMinimalPlusLookInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterMinimalPlusLookInformations(param1);
    };
    CharacterMinimalPlusLookInformations.prototype.deserializeAs_CharacterMinimalPlusLookInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.entityLook = new EntityLook();
        this.entityLook.deserialize(param1);
    };
    CharacterMinimalPlusLookInformations.ID = 163;
    return CharacterMinimalPlusLookInformations;
})(CharacterMinimalInformations);
module.exports = CharacterMinimalPlusLookInformations;
