/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var ObjectEffect = require('./effects/object-effect');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var BidExchangerObjectInfo = (function () {
    function BidExchangerObjectInfo() {
        this.objectUID = 0;
        this.effects = [];
        this.prices = [];
    }
    BidExchangerObjectInfo.prototype.getTypeId = function () {
        return BidExchangerObjectInfo.ID;
    };
    BidExchangerObjectInfo.prototype.reset = function () {
        this.objectUID = 0;
        this.effects = [];
        this.prices = [];
    };
    BidExchangerObjectInfo.prototype.serialize = function (param1) {
        this.serializeAs_BidExchangerObjectInfo(param1);
    };
    BidExchangerObjectInfo.prototype.serializeAs_BidExchangerObjectInfo = function (param1) {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        param1.writeShort(this.effects.length);
        var _loc2_ = 0;
        while (_loc2_ < this.effects.length) {
            param1.writeShort((this.effects[_loc2_]).getTypeId());
            (this.effects[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.prices.length);
        var _loc3_ = 0;
        while (_loc3_ < this.prices.length) {
            if (this.prices[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.prices[_loc3_] + ') on element 3 (starting at 1) of prices.');
            }
            param1.writeInt(this.prices[_loc3_]);
            _loc3_++;
        }
    };
    BidExchangerObjectInfo.prototype.deserialize = function (param1) {
        this.deserializeAs_BidExchangerObjectInfo(param1);
    };
    BidExchangerObjectInfo.prototype.deserializeAs_BidExchangerObjectInfo = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = null;
        var _loc8_ = 0;
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of BidExchangerObjectInfo.objectUID.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readUnsignedShort();
            _loc7_ = ProtocolTypeManager.getInstance(ObjectEffect, _loc6_);
            _loc7_.deserialize(param1);
            this.effects.push(_loc7_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc8_ = param1.readInt();
            if (_loc8_ < 0) {
                throw new Error('Forbidden value (' + _loc8_ + ') on elements of prices.');
            }
            this.prices.push(_loc8_);
            _loc5_++;
        }
    };
    BidExchangerObjectInfo.ID = 122;
    return BidExchangerObjectInfo;
})();
module.exports = BidExchangerObjectInfo;
