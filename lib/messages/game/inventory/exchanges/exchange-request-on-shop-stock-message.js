var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeRequestOnShopStockMessage = function() {

};

require('util').inherits(ExchangeRequestOnShopStockMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeRequestOnShopStockMessage();
};

ExchangeRequestOnShopStockMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeRequestOnShopStockMessage(output);
};

ExchangeRequestOnShopStockMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeRequestOnShopStockMessage(input);
};

ExchangeRequestOnShopStockMessage.prototype.serializeAs_ExchangeRequestOnShopStockMessage = function(param1) {

};

ExchangeRequestOnShopStockMessage.prototype.deserializeAs_ExchangeRequestOnShopStockMessage = function(param1) {

};

ExchangeRequestOnShopStockMessage.prototype.getMessageId = function() {
    return 5753;
};

ExchangeRequestOnShopStockMessage.prototype.getClassName = function() {
    return 'ExchangeRequestOnShopStockMessage';
};

module.exports.id = 5753;
module.exports.ExchangeRequestOnShopStockMessage = ExchangeRequestOnShopStockMessage;