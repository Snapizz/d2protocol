var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeStartOkCraftMessage = function() {

};

require('util').inherits(ExchangeStartOkCraftMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeStartOkCraftMessage();
};

ExchangeStartOkCraftMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeStartOkCraftMessage(output);
};

ExchangeStartOkCraftMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeStartOkCraftMessage(input);
};

ExchangeStartOkCraftMessage.prototype.serializeAs_ExchangeStartOkCraftMessage = function(param1) {

};

ExchangeStartOkCraftMessage.prototype.deserializeAs_ExchangeStartOkCraftMessage = function(param1) {

};

ExchangeStartOkCraftMessage.prototype.getMessageId = function() {
    return 5813;
};

ExchangeStartOkCraftMessage.prototype.getClassName = function() {
    return 'ExchangeStartOkCraftMessage';
};

module.exports.id = 5813;
module.exports.ExchangeStartOkCraftMessage = ExchangeStartOkCraftMessage;