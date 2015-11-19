/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObjectEffect = require('./object-effect');
var ObjectEffectDate = (function (_super) {
    __extends(ObjectEffectDate, _super);
    function ObjectEffectDate() {
        this.year = 0;
        this.month = 0;
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
        _super.call(this);
    }
    ObjectEffectDate.prototype.getTypeId = function () {
        return ObjectEffectDate.ID;
    };
    ObjectEffectDate.prototype.reset = function () {
        this.year = 0;
        this.month = 0;
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
    };
    ObjectEffectDate.prototype.serialize = function (param1) {
        this.serializeAs_ObjectEffectDate(param1);
    };
    ObjectEffectDate.prototype.serializeAs_ObjectEffectDate = function (param1) {
        _super.prototype.serializeAs_ObjectEffect.call(this, param1);
        if (this.year < 0) {
            throw new Error('Forbidden value (' + this.year + ') on element year.');
        }
        param1.writeVarShort(this.year);
        if (this.month < 0) {
            throw new Error('Forbidden value (' + this.month + ') on element month.');
        }
        param1.writeByte(this.month);
        if (this.day < 0) {
            throw new Error('Forbidden value (' + this.day + ') on element day.');
        }
        param1.writeByte(this.day);
        if (this.hour < 0) {
            throw new Error('Forbidden value (' + this.hour + ') on element hour.');
        }
        param1.writeByte(this.hour);
        if (this.minute < 0) {
            throw new Error('Forbidden value (' + this.minute + ') on element minute.');
        }
        param1.writeByte(this.minute);
    };
    ObjectEffectDate.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectEffectDate(param1);
    };
    ObjectEffectDate.prototype.deserializeAs_ObjectEffectDate = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.year = param1.readVarUhShort();
        if (this.year < 0) {
            throw new Error('Forbidden value (' + this.year + ') on element of ObjectEffectDate.year.');
        }
        this.month = param1.readByte();
        if (this.month < 0) {
            throw new Error('Forbidden value (' + this.month + ') on element of ObjectEffectDate.month.');
        }
        this.day = param1.readByte();
        if (this.day < 0) {
            throw new Error('Forbidden value (' + this.day + ') on element of ObjectEffectDate.day.');
        }
        this.hour = param1.readByte();
        if (this.hour < 0) {
            throw new Error('Forbidden value (' + this.hour + ') on element of ObjectEffectDate.hour.');
        }
        this.minute = param1.readByte();
        if (this.minute < 0) {
            throw new Error('Forbidden value (' + this.minute + ') on element of ObjectEffectDate.minute.');
        }
    };
    ObjectEffectDate.ID = 72;
    return ObjectEffectDate;
})(ObjectEffect);
module.exports = ObjectEffectDate;
