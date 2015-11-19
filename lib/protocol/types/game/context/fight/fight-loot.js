/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var FightLoot = (function () {
    function FightLoot() {
        this.objects = [];
        this.kamas = 0;
    }
    FightLoot.prototype.getTypeId = function () {
        return FightLoot.ID;
    };
    FightLoot.prototype.reset = function () {
        this.objects = [];
        this.kamas = 0;
    };
    FightLoot.prototype.serialize = function (param1) {
        this.serializeAs_FightLoot(param1);
    };
    FightLoot.prototype.serializeAs_FightLoot = function (param1) {
        param1.writeShort(this.objects.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objects.length) {
            if (this.objects[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.objects[_loc2_] + ') on element 1 (starting at 1) of objects.');
            }
            param1.writeVarShort(this.objects[_loc2_]);
            _loc2_++;
        }
        if (this.kamas < 0) {
            throw new Error('Forbidden value (' + this.kamas + ') on element kamas.');
        }
        param1.writeVarInt(this.kamas);
    };
    FightLoot.prototype.deserialize = function (param1) {
        this.deserializeAs_FightLoot(param1);
    };
    FightLoot.prototype.deserializeAs_FightLoot = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of objects.');
            }
            this.objects.push(_loc4_);
            _loc3_++;
        }
        this.kamas = param1.readVarUhInt();
        if (this.kamas < 0) {
            throw new Error('Forbidden value (' + this.kamas + ') on element of FightLoot.kamas.');
        }
    };
    FightLoot.ID = 41;
    return FightLoot;
})();
module.exports = FightLoot;
