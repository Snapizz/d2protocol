/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObjectEffect = require('./object-effect');
var ObjectEffectMount = (function (_super) {
    __extends(ObjectEffectMount, _super);
    function ObjectEffectMount() {
        this.mountId = 0;
        this.date = 0;
        this.modelId = 0;
        _super.call(this);
    }
    ObjectEffectMount.prototype.getTypeId = function () {
        return ObjectEffectMount.ID;
    };
    ObjectEffectMount.prototype.reset = function () {
        this.mountId = 0;
        this.date = 0;
        this.modelId = 0;
    };
    ObjectEffectMount.prototype.serialize = function (param1) {
        this.serializeAs_ObjectEffectMount(param1);
    };
    ObjectEffectMount.prototype.serializeAs_ObjectEffectMount = function (param1) {
        _super.prototype.serializeAs_ObjectEffect.call(this, param1);
        if (this.mountId < 0) {
            throw new Error('Forbidden value (' + this.mountId + ') on element mountId.');
        }
        param1.writeInt(this.mountId);
        if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.date + ') on element date.');
        }
        param1.writeDouble(this.date);
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
        }
        param1.writeVarShort(this.modelId);
    };
    ObjectEffectMount.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectEffectMount(param1);
    };
    ObjectEffectMount.prototype.deserializeAs_ObjectEffectMount = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.mountId = param1.readInt();
        if (this.mountId < 0) {
            throw new Error('Forbidden value (' + this.mountId + ') on element of ObjectEffectMount.mountId.');
        }
        this.date = param1.readDouble();
        if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.date + ') on element of ObjectEffectMount.date.');
        }
        this.modelId = param1.readVarUhShort();
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element of ObjectEffectMount.modelId.');
        }
    };
    ObjectEffectMount.ID = 179;
    return ObjectEffectMount;
})(ObjectEffect);
module.exports = ObjectEffectMount;
