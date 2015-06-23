var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeStoppedMessage = function() {
    this.id = 0;
};

require('util').inherits(ExchangeStoppedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeStoppedMessage();
};

ExchangeStoppedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeStoppedMessage(output);
};

ExchangeStoppedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeStoppedMessage(input);
};

ExchangeStoppedMessage.prototype.serializeAs_ExchangeStoppedMessage = function(param1) {
    if (this.id < 0) {
        throw new Error("Forbidden value (" + this.id + ") on element id.");
    } else {
        param1.writeVarInt(this.id);
        return;
    }
};

ExchangeStoppedMessage.prototype.deserializeAs_ExchangeStoppedMessage = function(param1) {
    this.id = param1.readVarUhInt();
    if (this.id < 0) {
        throw new Error("Forbidden value (" + this.id + ") on element of ExchangeStoppedMessage.id.");
    } else {
        return;
    }
};

ExchangeStoppedMessage.prototype.getMessageId = function() {
    return 6589;
};

ExchangeStoppedMessage.prototype.getClassName = function() {
    return 'ExchangeStoppedMessage';
};

module.exports.id = 6589;
module.exports.ExchangeStoppedMessage = ExchangeStoppedMessage;