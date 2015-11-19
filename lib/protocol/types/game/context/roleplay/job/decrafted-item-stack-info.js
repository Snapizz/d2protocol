/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var DecraftedItemStackInfo = (function () {
    function DecraftedItemStackInfo() {
        this.objectUID = 0;
        this.bonusMin = 0;
        this.bonusMax = 0;
        this.runesId = [];
        this.runesQty = [];
    }
    DecraftedItemStackInfo.prototype.getTypeId = function () {
        return DecraftedItemStackInfo.ID;
    };
    DecraftedItemStackInfo.prototype.reset = function () {
        this.objectUID = 0;
        this.bonusMin = 0;
        this.bonusMax = 0;
        this.runesId = [];
        this.runesQty = [];
    };
    DecraftedItemStackInfo.prototype.serialize = function (param1) {
        this.serializeAs_DecraftedItemStackInfo(param1);
    };
    DecraftedItemStackInfo.prototype.serializeAs_DecraftedItemStackInfo = function (param1) {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        param1.writeFloat(this.bonusMin);
        param1.writeFloat(this.bonusMax);
        param1.writeShort(this.runesId.length);
        var _loc2_ = 0;
        while (_loc2_ < this.runesId.length) {
            if (this.runesId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.runesId[_loc2_] + ') on element 4 (starting at 1) of runesId.');
            }
            param1.writeVarShort(this.runesId[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.runesQty.length);
        var _loc3_ = 0;
        while (_loc3_ < this.runesQty.length) {
            if (this.runesQty[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.runesQty[_loc3_] + ') on element 5 (starting at 1) of runesQty.');
            }
            param1.writeVarInt(this.runesQty[_loc3_]);
            _loc3_++;
        }
    };
    DecraftedItemStackInfo.prototype.deserialize = function (param1) {
        this.deserializeAs_DecraftedItemStackInfo(param1);
    };
    DecraftedItemStackInfo.prototype.deserializeAs_DecraftedItemStackInfo = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = 0;
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of DecraftedItemStackInfo.objectUID.');
        }
        this.bonusMin = param1.readFloat();
        this.bonusMax = param1.readFloat();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of runesId.');
            }
            this.runesId.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readVarUhInt();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of runesQty.');
            }
            this.runesQty.push(_loc7_);
            _loc5_++;
        }
    };
    DecraftedItemStackInfo.ID = 481;
    return DecraftedItemStackInfo;
})();
module.exports = DecraftedItemStackInfo;
