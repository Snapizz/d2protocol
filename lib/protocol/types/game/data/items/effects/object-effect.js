/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var ObjectEffect = (function () {
    function ObjectEffect() {
        this.actionId = 0;
    }
    ObjectEffect.prototype.getTypeId = function () {
        return ObjectEffect.ID;
    };
    ObjectEffect.prototype.reset = function () {
        this.actionId = 0;
    };
    ObjectEffect.prototype.serialize = function (param1) {
        this.serializeAs_ObjectEffect(param1);
    };
    ObjectEffect.prototype.serializeAs_ObjectEffect = function (param1) {
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
        }
        param1.writeVarShort(this.actionId);
    };
    ObjectEffect.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectEffect(param1);
    };
    ObjectEffect.prototype.deserializeAs_ObjectEffect = function (param1) {
        this.actionId = param1.readVarUhShort();
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element of ObjectEffect.actionId.');
        }
    };
    ObjectEffect.ID = 76;
    return ObjectEffect;
})();
module.exports = ObjectEffect;
