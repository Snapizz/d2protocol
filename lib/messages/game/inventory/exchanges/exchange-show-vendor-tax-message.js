var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeShowVendorTaxMessage = function() {

};

require('util').inherits(ExchangeShowVendorTaxMessage, d2com.NetworkMessage.class);

ExchangeShowVendorTaxMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeShowVendorTaxMessage(output);
};

ExchangeShowVendorTaxMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeShowVendorTaxMessage(input);
};

ExchangeShowVendorTaxMessage.prototype.serializeAs_ExchangeShowVendorTaxMessage = function(param1) {

};

ExchangeShowVendorTaxMessage.prototype.deserializeAs_ExchangeShowVendorTaxMessage = function(param1) {

};

ExchangeShowVendorTaxMessage.prototype.getMessageId = function() {
    return 5783;
};

ExchangeShowVendorTaxMessage.prototype.getClassName = function() {
    return 'ExchangeShowVendorTaxMessage';
};

module.exports.id = 5783;
module.exports.class = ExchangeShowVendorTaxMessage;
module.exports.getInstance = function() {
    return new ExchangeShowVendorTaxMessage;
};