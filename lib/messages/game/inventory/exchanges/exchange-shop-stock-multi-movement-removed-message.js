var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeShopStockMultiMovementRemovedMessage = module.exports = function() {
    this.objectIdList = [];

    return this;
};

require('util').inherits(ExchangeShopStockMultiMovementRemovedMessage, d2com.NetworkMessage.class);

ExchangeShopStockMultiMovementRemovedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeShopStockMultiMovementRemovedMessage(output);
};

ExchangeShopStockMultiMovementRemovedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeShopStockMultiMovementRemovedMessage(input);
};

ExchangeShopStockMultiMovementRemovedMessage.prototype.serializeAs_ExchangeShopStockMultiMovementRemovedMessage = function(param1) {
    param1.writeShort(this.objectIdList.length);
    var _loc2_ = 0;
    while (_loc2_ < this.objectIdList.length) {
        if (this.objectIdList[_loc2_] < 0) {
            throw new Error("Forbidden value (" + this.objectIdList[_loc2_] + ") on element 1 (starting at 1) of objectIdList.");
        } else {
            param1.writeVarInt(this.objectIdList[_loc2_]);
            _loc2_++;
            continue;
        }
    }
};

ExchangeShopStockMultiMovementRemovedMessage.prototype.deserializeAs_ExchangeShopStockMultiMovementRemovedMessage = function(param1) {
    var _loc4_ = 0;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhInt();
        if (_loc4_ < 0) {
            throw new Error("Forbidden value (" + _loc4_ + ") on elements of objectIdList.");
        } else {
            this.objectIdList.push(_loc4_);
            _loc3_++;
            continue;
        }
    }
};

ExchangeShopStockMultiMovementRemovedMessage.prototype.getMessageId = function() {
    return 6037;
};

ExchangeShopStockMultiMovementRemovedMessage.prototype.getClassName = function() {
    return 'ExchangeShopStockMultiMovementRemovedMessage';
};

module.exports.id = 6037;