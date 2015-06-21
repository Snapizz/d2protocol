var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PrismModuleExchangeRequestMessage = module.exports = function() {


    return this;
};

require('util').inherits(PrismModuleExchangeRequestMessage, d2com.NetworkMessage.class);

PrismModuleExchangeRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismModuleExchangeRequestMessage(output);
};

PrismModuleExchangeRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismModuleExchangeRequestMessage(input);
};

PrismModuleExchangeRequestMessage.prototype.serializeAs_PrismModuleExchangeRequestMessage = function(param1) {

};

PrismModuleExchangeRequestMessage.prototype.deserializeAs_PrismModuleExchangeRequestMessage = function(param1) {

};

PrismModuleExchangeRequestMessage.prototype.getMessageId = function() {
    return 6531;
};

PrismModuleExchangeRequestMessage.prototype.getClassName = function() {
    return 'PrismModuleExchangeRequestMessage';
};

module.exports.id = 6531;