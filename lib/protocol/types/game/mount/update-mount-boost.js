/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var UpdateMountBoost = (function () {
    function UpdateMountBoost() {
        this.type = 0;
    }
    UpdateMountBoost.prototype.getTypeId = function () {
        return UpdateMountBoost.ID;
    };
    UpdateMountBoost.prototype.reset = function () {
        this.type = 0;
    };
    UpdateMountBoost.prototype.serialize = function (param1) {
        this.serializeAs_UpdateMountBoost(param1);
    };
    UpdateMountBoost.prototype.serializeAs_UpdateMountBoost = function (param1) {
        param1.writeByte(this.type);
    };
    UpdateMountBoost.prototype.deserialize = function (param1) {
        this.deserializeAs_UpdateMountBoost(param1);
    };
    UpdateMountBoost.prototype.deserializeAs_UpdateMountBoost = function (param1) {
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of UpdateMountBoost.type.');
        }
    };
    UpdateMountBoost.ID = 356;
    return UpdateMountBoost;
})();
module.exports = UpdateMountBoost;
