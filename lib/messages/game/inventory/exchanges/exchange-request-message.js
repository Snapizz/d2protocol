var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeRequestMessage = function() {
    this.exchangeType = 0;
};

require('util').inherits(ExchangeRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeRequestMessage();
};

ExchangeRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeRequestMessage(output);
};

ExchangeRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeRequestMessage(input);
};

ExchangeRequestMessage.prototype.serializeAs_ExchangeRequestMessage = function(param1) {
    param1.writeByte(this.exchangeType);
};

ExchangeRequestMessage.prototype.deserializeAs_ExchangeRequestMessage = function(param1) {
    this.exchangeType = param1.readByte();
};

ExchangeRequestMessage.prototype.getMessageId = function() {
    return 5505;
};

ExchangeRequestMessage.prototype.getClassName = function() {
    return 'ExchangeRequestMessage';
};

module.exports.id = 5505;
module.exports.ExchangeRequestMessage = ExchangeRequestMessage;