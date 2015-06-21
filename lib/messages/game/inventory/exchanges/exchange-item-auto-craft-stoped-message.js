var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeItemAutoCraftStopedMessage = function() {
    this.reason = 0;
};

require('util').inherits(ExchangeItemAutoCraftStopedMessage, d2com.NetworkMessage.class);

ExchangeItemAutoCraftStopedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeItemAutoCraftStopedMessage(output);
};

ExchangeItemAutoCraftStopedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeItemAutoCraftStopedMessage(input);
};

ExchangeItemAutoCraftStopedMessage.prototype.serializeAs_ExchangeItemAutoCraftStopedMessage = function(param1) {
    param1.writeByte(this.reason);
};

ExchangeItemAutoCraftStopedMessage.prototype.deserializeAs_ExchangeItemAutoCraftStopedMessage = function(param1) {
    this.reason = param1.readByte();
};

ExchangeItemAutoCraftStopedMessage.prototype.getMessageId = function() {
    return 5810;
};

ExchangeItemAutoCraftStopedMessage.prototype.getClassName = function() {
    return 'ExchangeItemAutoCraftStopedMessage';
};

module.exports.id = 5810;
module.exports.class = ExchangeItemAutoCraftStopedMessage;
module.exports.getInstance = function() {
    return new ExchangeItemAutoCraftStopedMessage;
};