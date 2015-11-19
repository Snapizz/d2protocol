/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObjectEffect = require('./object-effect');
var ObjectEffectMinMax = (function (_super) {
    __extends(ObjectEffectMinMax, _super);
    function ObjectEffectMinMax() {
        this.min = 0;
        this.max = 0;
        _super.call(this);
    }
    ObjectEffectMinMax.prototype.getTypeId = function () {
        return ObjectEffectMinMax.ID;
    };
    ObjectEffectMinMax.prototype.reset = function () {
        this.min = 0;
        this.max = 0;
    };
    ObjectEffectMinMax.prototype.serialize = function (param1) {
        this.serializeAs_ObjectEffectMinMax(param1);
    };
    ObjectEffectMinMax.prototype.serializeAs_ObjectEffectMinMax = function (param1) {
        _super.prototype.serializeAs_ObjectEffect.call(this, param1);
        if (this.min < 0) {
            throw new Error('Forbidden value (' + this.min + ') on element min.');
        }
        param1.writeVarInt(this.min);
        if (this.max < 0) {
            throw new Error('Forbidden value (' + this.max + ') on element max.');
        }
        param1.writeVarInt(this.max);
    };
    ObjectEffectMinMax.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectEffectMinMax(param1);
    };
    ObjectEffectMinMax.prototype.deserializeAs_ObjectEffectMinMax = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.min = param1.readVarUhInt();
        if (this.min < 0) {
            throw new Error('Forbidden value (' + this.min + ') on element of ObjectEffectMinMax.min.');
        }
        this.max = param1.readVarUhInt();
        if (this.max < 0) {
            throw new Error('Forbidden value (' + this.max + ') on element of ObjectEffectMinMax.max.');
        }
    };
    ObjectEffectMinMax.ID = 82;
    return ObjectEffectMinMax;
})(ObjectEffect);
module.exports = ObjectEffectMinMax;
