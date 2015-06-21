var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeObjectMovePricedMessage = function() {
    this.price = 0;
};

require('util').inherits(ExchangeObjectMovePricedMessage, require('./exchange-object-move-message.js').class);

ExchangeObjectMovePricedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectMovePricedMessage(output);
};

ExchangeObjectMovePricedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectMovePricedMessage(input);
};

ExchangeObjectMovePricedMessage.prototype.serializeAs_ExchangeObjectMovePricedMessage = function(param1) {
    this.serializeAs_ExchangeObjectMoveMessageAs_ExchangeObjectMoveMessage(param1);
    if (this.price < 0) {
        throw new Error("Forbidden value (" + this.price + ") on element price.");
    } else {
        param1.writeVarInt(this.price);
        return;
    }
};

ExchangeObjectMovePricedMessage.prototype.deserializeAs_ExchangeObjectMovePricedMessage = function(param1) {
    this.deserializeAs_ExchangeObjectMoveMessage(param1);
    this.price = param1.readVarUhInt();
    if (this.price < 0) {
        throw new Error("Forbidden value (" + this.price + ") on element of ExchangeObjectMovePricedMessage.price.");
    } else {
        return;
    }
};

ExchangeObjectMovePricedMessage.prototype.getMessageId = function() {
    return 5514;
};

ExchangeObjectMovePricedMessage.prototype.getClassName = function() {
    return 'ExchangeObjectMovePricedMessage';
};

module.exports.id = 5514;
module.exports.class = ExchangeObjectMovePricedMessage;
module.exports.getInstance = function() {
    return new ExchangeObjectMovePricedMessage;
};