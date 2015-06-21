var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeObjectModifyPricedMessage = function() {

};

require('util').inherits(ExchangeObjectModifyPricedMessage, require('./exchange-object-move-priced-message.js').ExchangeObjectMovePricedMessage);

module.exports = function() {
    return new ExchangeObjectModifyPricedMessage();
};

ExchangeObjectModifyPricedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectModifyPricedMessage(output);
};

ExchangeObjectModifyPricedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectModifyPricedMessage(input);
};

ExchangeObjectModifyPricedMessage.prototype.serializeAs_ExchangeObjectModifyPricedMessage = function(param1) {
    this.serializeAs_ExchangeObjectMovePricedMessage(param1);
};

ExchangeObjectModifyPricedMessage.prototype.deserializeAs_ExchangeObjectModifyPricedMessage = function(param1) {
    this.deserializeAs_ExchangeObjectMovePricedMessage(param1);
};

ExchangeObjectModifyPricedMessage.prototype.getMessageId = function() {
    return 6238;
};

ExchangeObjectModifyPricedMessage.prototype.getClassName = function() {
    return 'ExchangeObjectModifyPricedMessage';
};

module.exports.id = 6238;
module.exports.ExchangeObjectModifyPricedMessage = ExchangeObjectModifyPricedMessage;