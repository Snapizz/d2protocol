var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeRequestedTradeMessage = function() {
    this.source = 0;
    this.target = 0;
};

require('util').inherits(ExchangeRequestedTradeMessage, require('./exchange-requested-message.js').class);

ExchangeRequestedTradeMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeRequestedTradeMessage(output);
};

ExchangeRequestedTradeMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeRequestedTradeMessage(input);
};

ExchangeRequestedTradeMessage.prototype.serializeAs_ExchangeRequestedTradeMessage = function(param1) {
    this.serializeAs_ExchangeRequestedMessage(param1);
    if (this.source < 0) {
        throw new Error("Forbidden value (" + this.source + ") on element source.");
    } else {
        param1.writeVarInt(this.source);
        if (this.target < 0) {
            throw new Error("Forbidden value (" + this.target + ") on element target.");
        } else {
            param1.writeVarInt(this.target);
            return;
        }
    }
};

ExchangeRequestedTradeMessage.prototype.deserializeAs_ExchangeRequestedTradeMessage = function(param1) {
    this.deserializeAs_ExchangeRequestedMessage(param1);
    this.source = param1.readVarUhInt();
    if (this.source < 0) {
        throw new Error("Forbidden value (" + this.source + ") on element of ExchangeRequestedTradeMessage.source.");
    } else {
        this.target = param1.readVarUhInt();
        if (this.target < 0) {
            throw new Error("Forbidden value (" + this.target + ") on element of ExchangeRequestedTradeMessage.target.");
        } else {
            return;
        }
    }
};

ExchangeRequestedTradeMessage.prototype.getMessageId = function() {
    return 5523;
};

ExchangeRequestedTradeMessage.prototype.getClassName = function() {
    return 'ExchangeRequestedTradeMessage';
};

module.exports.id = 5523;
module.exports.class = ExchangeRequestedTradeMessage;
module.exports.getInstance = function() {
    return new ExchangeRequestedTradeMessage;
};