var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ExchangeAcceptMessage = function() {

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
module.exports.class = ExchangeAcceptMessage;
module.exports.getInstance = function() {
    return new ExchangeAcceptMessage;
};