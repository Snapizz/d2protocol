/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObjectEffect = require('./object-effect');
var ObjectEffectString = (function (_super) {
    __extends(ObjectEffectString, _super);
    function ObjectEffectString() {
        this.value = '';
        _super.call(this);
    }
    ObjectEffectString.prototype.getTypeId = function () {
        return ObjectEffectString.ID;
    };
    ObjectEffectString.prototype.reset = function () {
        this.value = '';
    };
    ObjectEffectString.prototype.serialize = function (param1) {
        this.serializeAs_ObjectEffectString(param1);
    };
    ObjectEffectString.prototype.serializeAs_ObjectEffectString = function (param1) {
        _super.prototype.serializeAs_ObjectEffect.call(this, param1);
        param1.writeUTF(this.value);
    };
    ObjectEffectString.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectEffectString(param1);
    };
    ObjectEffectString.prototype.deserializeAs_ObjectEffectString = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.value = param1.readUTF();
    };
    ObjectEffectString.ID = 74;
    return ObjectEffectString;
})(ObjectEffect);
module.exports = ObjectEffectString;
