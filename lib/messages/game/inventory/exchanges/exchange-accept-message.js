var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeAcceptMessage = module.exports = function() {


    return this;
};

require('util').inherits(ExchangeAcceptMessage, d2com.NetworkMessage.class);

ExchangeAcceptMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeAcceptMessage(output);
};

ExchangeAcceptMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeAcceptMessage(input);
};

ExchangeAcceptMessage.prototype.serializeAs_ExchangeAcceptMessage = function(param1) {

};

ExchangeAcceptMessage.prototype.deserializeAs_ExchangeAcceptMessage = function(param1) {

};

ExchangeAcceptMessage.prototype.getMessageId = function() {
    return 5508;
};

ExchangeAcceptMessage.prototype.getClassName = function() {
    return 'ExchangeAcceptMessage';
};

module.exports.id = 5508;