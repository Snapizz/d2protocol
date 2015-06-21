var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeKamaModifiedMessage = module.exports = function() {
    this.quantity = 0;

    return this;
};

require('util').inherits(ExchangeKamaModifiedMessage, require('../exchanges/exchange-object-message.js'));

ExchangeKamaModifiedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeKamaModifiedMessage(output);
};

ExchangeKamaModifiedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeKamaModifiedMessage(input);
};

ExchangeKamaModifiedMessage.prototype.serializeAs_ExchangeKamaModifiedMessage = function(param1) {
    this.serializeAs_ExchangeObjectMessage(param1);
    if (this.quantity < 0) {
        throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
    } else {
        param1.writeVarInt(this.quantity);
        return;
    }
};

ExchangeKamaModifiedMessage.prototype.deserializeAs_ExchangeKamaModifiedMessage = function(param1) {
    this.deserializeAs_ExchangeObjectMessage(param1);
    this.quantity = param1.readVarUhInt();
    if (this.quantity < 0) {
        throw new Error("Forbidden value (" + this.quantity + ") on element of ExchangeKamaModifiedMessage.quantity.");
    } else {
        return;
    }
};

ExchangeKamaModifiedMessage.prototype.getMessageId = function() {
    return 5521;
};

ExchangeKamaModifiedMessage.prototype.getClassName = function() {
    return 'ExchangeKamaModifiedMessage';
};

module.exports.id = 5521;