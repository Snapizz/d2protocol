/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UpdateMountBoost = require('./update-mount-boost');
var UpdateMountIntBoost = (function (_super) {
    __extends(UpdateMountIntBoost, _super);
    function UpdateMountIntBoost() {
        this.value = 0;
        _super.call(this);
    }
    UpdateMountIntBoost.prototype.getTypeId = function () {
        return UpdateMountIntBoost.ID;
    };
    UpdateMountIntBoost.prototype.reset = function () {
        this.value = 0;
    };
    UpdateMountIntBoost.prototype.serialize = function (param1) {
        this.serializeAs_UpdateMountIntBoost(param1);
    };
    UpdateMountIntBoost.prototype.serializeAs_UpdateMountIntBoost = function (param1) {
        _super.prototype.serializeAs_UpdateMountBoost.call(this, param1);
        param1.writeInt(this.value);
    };
    UpdateMountIntBoost.prototype.deserialize = function (param1) {
        this.deserializeAs_UpdateMountIntBoost(param1);
    };
    UpdateMountIntBoost.prototype.deserializeAs_UpdateMountIntBoost = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.value = param1.readInt();
    };
    UpdateMountIntBoost.ID = 357;
    return UpdateMountIntBoost;
})(UpdateMountBoost);
module.exports = UpdateMountIntBoost;
