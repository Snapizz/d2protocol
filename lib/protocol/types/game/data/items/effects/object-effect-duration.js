/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObjectEffect = require('./object-effect');
var ObjectEffectDuration = (function (_super) {
    __extends(ObjectEffectDuration, _super);
    function ObjectEffectDuration() {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        _super.call(this);
    }
    ObjectEffectDuration.prototype.getTypeId = function () {
        return ObjectEffectDuration.ID;
    };
    ObjectEffectDuration.prototype.reset = function () {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
    };
    ObjectEffectDuration.prototype.serialize = function (param1) {
        this.serializeAs_ObjectEffectDuration(param1);
    };
    ObjectEffectDuration.prototype.serializeAs_ObjectEffectDuration = function (param1) {
        _super.prototype.serializeAs_ObjectEffect.call(this, param1);
        if (this.days < 0) {
            throw new Error('Forbidden value (' + this.days + ') on element days.');
        }
        param1.writeVarShort(this.days);
        if (this.hours < 0) {
            throw new Error('Forbidden value (' + this.hours + ') on element hours.');
        }
        param1.writeByte(this.hours);
        if (this.minutes < 0) {
            throw new Error('Forbidden value (' + this.minutes + ') on element minutes.');
        }
        param1.writeByte(this.minutes);
    };
    ObjectEffectDuration.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectEffectDuration(param1);
    };
    ObjectEffectDuration.prototype.deserializeAs_ObjectEffectDuration = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.days = param1.readVarUhShort();
        if (this.days < 0) {
            throw new Error('Forbidden value (' + this.days + ') on element of ObjectEffectDuration.days.');
        }
        this.hours = param1.readByte();
        if (this.hours < 0) {
            throw new Error('Forbidden value (' + this.hours + ') on element of ObjectEffectDuration.hours.');
        }
        this.minutes = param1.readByte();
        if (this.minutes < 0) {
            throw new Error('Forbidden value (' + this.minutes + ') on element of ObjectEffectDuration.minutes.');
        }
    };
    ObjectEffectDuration.ID = 75;
    return ObjectEffectDuration;
})(ObjectEffect);
module.exports = ObjectEffectDuration;
