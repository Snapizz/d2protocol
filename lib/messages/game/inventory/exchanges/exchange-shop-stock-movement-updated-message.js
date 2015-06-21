var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItemToSell = require('../../../../types/game/data/items/object-item-to-sell.js').ObjectItemToSell;

var ExchangeShopStockMovementUpdatedMessage = function() {
    this.objectInfo = new ObjectItemToSell();
};

require('util').inherits(ExchangeShopStockMovementUpdatedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeShopStockMovementUpdatedMessage();
};

ExchangeShopStockMovementUpdatedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeShopStockMovementUpdatedMessage(output);
};

ExchangeShopStockMovementUpdatedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeShopStockMovementUpdatedMessage(input);
};

ExchangeShopStockMovementUpdatedMessage.prototype.serializeAs_ExchangeShopStockMovementUpdatedMessage = function(param1) {
    this.objectInfo.serializeAs_ObjectItemToSell(param1);
};

ExchangeShopStockMovementUpdatedMessage.prototype.deserializeAs_ExchangeShopStockMovementUpdatedMessage = function(param1) {
    this.objectInfo = new ObjectItemToSell();
    this.objectInfo.deserialize(param1);
};

ExchangeShopStockMovementUpdatedMessage.prototype.getMessageId = function() {
    return 5909;
};

ExchangeShopStockMovementUpdatedMessage.prototype.getClassName = function() {
    return 'ExchangeShopStockMovementUpdatedMessage';
};

module.exports.id = 5909;
module.exports.ExchangeShopStockMovementUpdatedMessage = ExchangeShopStockMovementUpdatedMessage;