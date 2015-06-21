var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeStartedMessage = module.exports = function() {
    this.exchangeType = 0;

    return this;
};

require('util').inherits(ExchangeStartedMessage, d2com.NetworkMessage.class);

ExchangeStartedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeStartedMessage(output);
};

ExchangeStartedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeStartedMessage(input);
};

ExchangeStartedMessage.prototype.serializeAs_ExchangeStartedMessage = function(param1) {
    param1.writeByte(this.exchangeType);
};

ExchangeStartedMessage.prototype.deserializeAs_ExchangeStartedMessage = function(param1) {
    this.exchangeType = param1.readByte();
};

ExchangeStartedMessage.prototype.getMessageId = function() {
    return 5512;
};

ExchangeStartedMessage.prototype.getClassName = function() {
    return 'ExchangeStartedMessage';
};

module.exports.id = 5512;