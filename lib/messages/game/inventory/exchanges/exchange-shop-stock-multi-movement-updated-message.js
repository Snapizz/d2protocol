var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItemToSell = require('../../../../types/game/data/items/object-item-to-sell.js').class;

var ExchangeShopStockMultiMovementUpdatedMessage = module.exports = function() {
    this.objectInfoList = [];

    return this;
};

require('util').inherits(ExchangeShopStockMultiMovementUpdatedMessage, d2com.NetworkMessage.class);

ExchangeShopStockMultiMovementUpdatedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeShopStockMultiMovementUpdatedMessage(output);
};

ExchangeShopStockMultiMovementUpdatedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeShopStockMultiMovementUpdatedMessage(input);
};

ExchangeShopStockMultiMovementUpdatedMessage.prototype.serializeAs_ExchangeShopStockMultiMovementUpdatedMessage = function(param1) {
    param1.writeShort(this.objectInfoList.length);
    var _loc2_ = 0;
    while (_loc2_ < this.objectInfoList.length) {
        (this.objectInfoList[_loc2_]).serializeAs_ObjectItemToSell(param1);
        _loc2_++;
    }
};

ExchangeShopStockMultiMovementUpdatedMessage.prototype.deserializeAs_ExchangeShopStockMultiMovementUpdatedMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new ObjectItemToSell();
        _loc4_.deserialize(param1);
        this.objectInfoList.push(_loc4_);
        _loc3_++;
    }
};

ExchangeShopStockMultiMovementUpdatedMessage.prototype.getMessageId = function() {
    return 6038;
};

ExchangeShopStockMultiMovementUpdatedMessage.prototype.getClassName = function() {
    return 'ExchangeShopStockMultiMovementUpdatedMessage';
};

module.exports.id = 6038;