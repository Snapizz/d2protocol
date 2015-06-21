var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeRequestOnMountStockMessage = module.exports = function() {


    return this;
};

require('util').inherits(ExchangeRequestOnMountStockMessage, d2com.NetworkMessage.class);

ExchangeRequestOnMountStockMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeRequestOnMountStockMessage(output);
};

ExchangeRequestOnMountStockMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeRequestOnMountStockMessage(input);
};

ExchangeRequestOnMountStockMessage.prototype.serializeAs_ExchangeRequestOnMountStockMessage = function(param1) {

};

ExchangeRequestOnMountStockMessage.prototype.deserializeAs_ExchangeRequestOnMountStockMessage = function(param1) {

};

ExchangeRequestOnMountStockMessage.prototype.getMessageId = function() {
    return 5986;
};

ExchangeRequestOnMountStockMessage.prototype.getClassName = function() {
    return 'ExchangeRequestOnMountStockMessage';
};

module.exports.id = 5986;