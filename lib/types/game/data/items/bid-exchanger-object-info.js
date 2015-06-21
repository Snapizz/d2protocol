var BidExchangerObjectInfo = module.exports = function() {
    this.objectUID = 0;
    this.effects = [];
    this.prices = [];

    return this;
};

BidExchangerObjectInfo.prototype.serialize = function(output) {
    this.serializeAs_BidExchangerObjectInfo(output);
};

BidExchangerObjectInfo.prototype.deserialize = function(input) {
    this.deserializeAs_BidExchangerObjectInfo(input);
};

BidExchangerObjectInfo.prototype.serializeAs_BidExchangerObjectInfo = function(param1) {
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
    } else {
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
                throw new Error("Forbidden value (" + this.prices[_loc3_] + ") on element 3 (starting at 1) of prices.");
            } else {
                param1.writeInt(this.prices[_loc3_]);
                _loc3_++;
                continue;
            }
        }
        return;
    }
};

BidExchangerObjectInfo.prototype.deserializeAs_BidExchangerObjectInfo = function(param1) {
    var _loc6_ = 0;
    var _loc7_ = null;
    var _loc8_ = 0;
    this.objectUID = param1.readVarUhInt();
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element of BidExchangerObjectInfo.objectUID.");
    } else {
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
                throw new Error("Forbidden value (" + _loc8_ + ") on elements of prices.");
            } else {
                this.prices.push(_loc8_);
                _loc5_++;
                continue;
            }
        }
        return;
    }
};

BidExchangerObjectInfo.prototype.getTypeId = function() {
    return 122;
};

BidExchangerObjectInfo.prototype.getClassName = function() {
    return 'BidExchangerObjectInfo';
};

module.exports.id = 122;