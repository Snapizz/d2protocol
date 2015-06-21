var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeObjectModifyPricedMessage = function() {

};

require('util').inherits(ExchangeObjectModifyPricedMessage, require('./exchange-object-move-priced-message.js').class);

ExchangeObjectModifyPricedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectModifyPricedMessage(output);
};

ExchangeObjectModifyPricedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectModifyPricedMessage(input);
};

ExchangeObjectModifyPricedMessage.prototype.serializeAs_ExchangeObjectModifyPricedMessage = function(param1) {
    this.serializeAs_ExchangeObjectMovePricedMessageAs_ExchangeObjectMovePricedMessage(param1);
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
module.exports.class = ExchangeObjectModifyPricedMessage;
module.exports.getInstance = function() {
    return new ExchangeObjectModifyPricedMessage;
};