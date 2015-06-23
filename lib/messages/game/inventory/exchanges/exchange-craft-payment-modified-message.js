var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeCraftPaymentModifiedMessage = function() {
    this.goldSum = 0;
};

require('util').inherits(ExchangeCraftPaymentModifiedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeCraftPaymentModifiedMessage();
};

ExchangeCraftPaymentModifiedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeCraftPaymentModifiedMessage(output);
};

ExchangeCraftPaymentModifiedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeCraftPaymentModifiedMessage(input);
};

ExchangeCraftPaymentModifiedMessage.prototype.serializeAs_ExchangeCraftPaymentModifiedMessage = function(param1) {
    if (this.goldSum < 0) {
        throw new Error("Forbidden value (" + this.goldSum + ") on element goldSum.");
    } else {
        param1.writeVarInt(this.goldSum);
        return;
    }
};

ExchangeCraftPaymentModifiedMessage.prototype.deserializeAs_ExchangeCraftPaymentModifiedMessage = function(param1) {
    this.goldSum = param1.readVarUhInt();
    if (this.goldSum < 0) {
        throw new Error("Forbidden value (" + this.goldSum + ") on element of ExchangeCraftPaymentModifiedMessage.goldSum.");
    } else {
        return;
    }
};

ExchangeCraftPaymentModifiedMessage.prototype.getMessageId = function() {
    return 6578;
};

ExchangeCraftPaymentModifiedMessage.prototype.getClassName = function() {
    return 'ExchangeCraftPaymentModifiedMessage';
};

module.exports.id = 6578;
module.exports.ExchangeCraftPaymentModifiedMessage = ExchangeCraftPaymentModifiedMessage;