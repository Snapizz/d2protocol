/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObjectEffect = require('./object-effect');
var ObjectEffectCreature = (function (_super) {
    __extends(ObjectEffectCreature, _super);
    function ObjectEffectCreature() {
        this.monsterFamilyId = 0;
        _super.call(this);
    }
    ObjectEffectCreature.prototype.getTypeId = function () {
        return ObjectEffectCreature.ID;
    };
    ObjectEffectCreature.prototype.reset = function () {
        this.monsterFamilyId = 0;
    };
    ObjectEffectCreature.prototype.serialize = function (param1) {
        this.serializeAs_ObjectEffectCreature(param1);
    };
    ObjectEffectCreature.prototype.serializeAs_ObjectEffectCreature = function (param1) {
        _super.prototype.serializeAs_ObjectEffect.call(this, param1);
        if (this.monsterFamilyId < 0) {
            throw new Error('Forbidden value (' + this.monsterFamilyId + ') on element monsterFamilyId.');
        }
        param1.writeVarShort(this.monsterFamilyId);
    };
    ObjectEffectCreature.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectEffectCreature(param1);
    };
    ObjectEffectCreature.prototype.deserializeAs_ObjectEffectCreature = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.monsterFamilyId = param1.readVarUhShort();
        if (this.monsterFamilyId < 0) {
            throw new Error('Forbidden value (' + this.monsterFamilyId + ') on element of ObjectEffectCreature.monsterFamilyId.');
        }
    };
    ObjectEffectCreature.ID = 71;
    return ObjectEffectCreature;
})(ObjectEffect);
module.exports = ObjectEffectCreature;
