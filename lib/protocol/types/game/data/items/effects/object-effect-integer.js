/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObjectEffect = require('./object-effect');
var ObjectEffectInteger = (function (_super) {
    __extends(ObjectEffectInteger, _super);
    function ObjectEffectInteger() {
        this.value = 0;
        _super.call(this);
    }
    ObjectEffectInteger.prototype.getTypeId = function () {
        return ObjectEffectInteger.ID;
    };
    ObjectEffectInteger.prototype.reset = function () {
        this.value = 0;
    };
    ObjectEffectInteger.prototype.serialize = function (param1) {
        this.serializeAs_ObjectEffectInteger(param1);
    };
    ObjectEffectInteger.prototype.serializeAs_ObjectEffectInteger = function (param1) {
        _super.prototype.serializeAs_ObjectEffect.call(this, param1);
        if (this.value < 0) {
            throw new Error('Forbidden value (' + this.value + ') on element value.');
        }
        param1.writeVarShort(this.value);
    };
    ObjectEffectInteger.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectEffectInteger(param1);
    };
    ObjectEffectInteger.prototype.deserializeAs_ObjectEffectInteger = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.value = param1.readVarUhShort();
        if (this.value < 0) {
            throw new Error('Forbidden value (' + this.value + ') on element of ObjectEffectInteger.value.');
        }
    };
    ObjectEffectInteger.ID = 70;
    return ObjectEffectInteger;
})(ObjectEffect);
module.exports = ObjectEffectInteger;
