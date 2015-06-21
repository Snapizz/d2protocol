var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeStartAsVendorMessage = function() {

};

require('util').inherits(ExchangeStartAsVendorMessage, d2com.NetworkMessage.class);

ExchangeStartAsVendorMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeStartAsVendorMessage(output);
};

ExchangeStartAsVendorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeStartAsVendorMessage(input);
};

ExchangeStartAsVendorMessage.prototype.serializeAs_ExchangeStartAsVendorMessage = function(param1) {

};

ExchangeStartAsVendorMessage.prototype.deserializeAs_ExchangeStartAsVendorMessage = function(param1) {

};

ExchangeStartAsVendorMessage.prototype.getMessageId = function() {
    return 5775;
};

ExchangeStartAsVendorMessage.prototype.getClassName = function() {
    return 'ExchangeStartAsVendorMessage';
};

module.exports.id = 5775;
module.exports.class = ExchangeStartAsVendorMessage;
module.exports.getInstance = function() {
    return new ExchangeStartAsVendorMessage;
};