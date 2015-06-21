var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeWaitingResultMessage = module.exports = function() {
    this.bwait = false;

    return this;
};

require('util').inherits(ExchangeWaitingResultMessage, d2com.NetworkMessage.class);

ExchangeWaitingResultMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeWaitingResultMessage(output);
};

ExchangeWaitingResultMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeWaitingResultMessage(input);
};

ExchangeWaitingResultMessage.prototype.serializeAs_ExchangeWaitingResultMessage = function(param1) {
    param1.writeBoolean(this.bwait);
};

ExchangeWaitingResultMessage.prototype.deserializeAs_ExchangeWaitingResultMessage = function(param1) {
    this.bwait = param1.readBoolean();
};

ExchangeWaitingResultMessage.prototype.getMessageId = function() {
    return 5786;
};

ExchangeWaitingResultMessage.prototype.getClassName = function() {
    return 'ExchangeWaitingResultMessage';
};

module.exports.id = 5786;