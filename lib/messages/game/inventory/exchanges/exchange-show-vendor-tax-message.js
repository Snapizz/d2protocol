var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeShowVendorTaxMessage = module.exports = function() {


    return this;
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