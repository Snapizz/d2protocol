var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeStartOkRunesTradeMessage = function() {

};

require('util').inherits(ExchangeStartOkRunesTradeMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeStartOkRunesTradeMessage();
};

ExchangeStartOkRunesTradeMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeStartOkRunesTradeMessage(output);
};

ExchangeStartOkRunesTradeMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeStartOkRunesTradeMessage(input);
};

ExchangeStartOkRunesTradeMessage.prototype.serializeAs_ExchangeStartOkRunesTradeMessage = function(param1) {

};

ExchangeStartOkRunesTradeMessage.prototype.deserializeAs_ExchangeStartOkRunesTradeMessage = function(param1) {

};

ExchangeStartOkRunesTradeMessage.prototype.getMessageId = function() {
    return 6567;
};

ExchangeStartOkRunesTradeMessage.prototype.getClassName = function() {
    return 'ExchangeStartOkRunesTradeMessage';
};

module.exports.id = 6567;
module.exports.ExchangeStartOkRunesTradeMessage = ExchangeStartOkRunesTradeMessage;