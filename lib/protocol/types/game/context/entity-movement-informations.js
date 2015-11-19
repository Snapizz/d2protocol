/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var EntityMovementInformations = (function () {
    function EntityMovementInformations() {
        this.id = 0;
        this.steps = [];
    }
    EntityMovementInformations.prototype.getTypeId = function () {
        return EntityMovementInformations.ID;
    };
    EntityMovementInformations.prototype.reset = function () {
        this.id = 0;
        this.steps = [];
    };
    EntityMovementInformations.prototype.serialize = function (param1) {
        this.serializeAs_EntityMovementInformations(param1);
    };
    EntityMovementInformations.prototype.serializeAs_EntityMovementInformations = function (param1) {
        param1.writeInt(this.id);
        param1.writeShort(this.steps.length);
        var _loc2_ = 0;
        while (_loc2_ < this.steps.length) {
            param1.writeByte(this.steps[_loc2_]);
            _loc2_++;
        }
    };
    EntityMovementInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_EntityMovementInformations(param1);
    };
    EntityMovementInformations.prototype.deserializeAs_EntityMovementInformations = function (param1) {
        var _loc4_ = 0;
        this.id = param1.readInt();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readByte();
            this.steps.push(_loc4_);
            _loc3_++;
        }
    };
    EntityMovementInformations.ID = 63;
    return EntityMovementInformations;
})();
module.exports = EntityMovementInformations;
