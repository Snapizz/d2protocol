var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeRequestOnTaxCollectorMessage = function() {
    this.taxCollectorId = 0;
};

require('util').inherits(ExchangeRequestOnTaxCollectorMessage, d2com.NetworkMessage.class);

ExchangeRequestOnTaxCollectorMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeRequestOnTaxCollectorMessage(output);
};

ExchangeRequestOnTaxCollectorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeRequestOnTaxCollectorMessage(input);
};

ExchangeRequestOnTaxCollectorMessage.prototype.serializeAs_ExchangeRequestOnTaxCollectorMessage = function(param1) {
    param1.writeInt(this.taxCollectorId);
};

ExchangeRequestOnTaxCollectorMessage.prototype.deserializeAs_ExchangeRequestOnTaxCollectorMessage = function(param1) {
    this.taxCollectorId = param1.readInt();
};

ExchangeRequestOnTaxCollectorMessage.prototype.getMessageId = function() {
    return 5779;
};

ExchangeRequestOnTaxCollectorMessage.prototype.getClassName = function() {
    return 'ExchangeRequestOnTaxCollectorMessage';
};

module.exports.id = 5779;
module.exports.class = ExchangeRequestOnTaxCollectorMessage;
module.exports.getInstance = function() {
    return new ExchangeRequestOnTaxCollectorMessage;
};