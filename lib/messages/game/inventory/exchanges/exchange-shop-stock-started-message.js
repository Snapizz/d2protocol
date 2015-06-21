var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItemToSell = require('../../../../types/game/data/items/object-item-to-sell.js').class;

var ExchangeShopStockStartedMessage = module.exports = function() {
    this.objectsInfos = [];

    return this;
};

require('util').inherits(ExchangeShopStockStartedMessage, d2com.NetworkMessage.class);

ExchangeShopStockStartedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeShopStockStartedMessage(output);
};

ExchangeShopStockStartedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeShopStockStartedMessage(input);
};

ExchangeShopStockStartedMessage.prototype.serializeAs_ExchangeShopStockStartedMessage = function(param1) {
    param1.writeShort(this.objectsInfos.length);
    var _loc2_ = 0;
    while (_loc2_ < this.objectsInfos.length) {
        (this.objectsInfos[_loc2_]).serializeAs_ObjectItemToSell(param1);
        _loc2_++;
    }
};

ExchangeShopStockStartedMessage.prototype.deserializeAs_ExchangeShopStockStartedMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new ObjectItemToSell();
        _loc4_.deserialize(param1);
        this.objectsInfos.push(_loc4_);
        _loc3_++;
    }
};

ExchangeShopStockStartedMessage.prototype.getMessageId = function() {
    return 5910;
};

ExchangeShopStockStartedMessage.prototype.getClassName = function() {
    return 'ExchangeShopStockStartedMessage';
};

module.exports.id = 5910;