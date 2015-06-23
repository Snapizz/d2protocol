var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeCraftPaymentModificationRequestMessage = function() {
    this.quantity = 0;
};

require('util').inherits(ExchangeCraftPaymentModificationRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeCraftPaymentModificationRequestMessage();
};

ExchangeCraftPaymentModificationRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeCraftPaymentModificationRequestMessage(output);
};

ExchangeCraftPaymentModificationRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeCraftPaymentModificationRequestMessage(input);
};

ExchangeCraftPaymentModificationRequestMessage.prototype.serializeAs_ExchangeCraftPaymentModificationRequestMessage = function(param1) {
    if (this.quantity < 0) {
        throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
    } else {
        param1.writeVarInt(this.quantity);
        return;
    }
};

ExchangeCraftPaymentModificationRequestMessage.prototype.deserializeAs_ExchangeCraftPaymentModificationRequestMessage = function(param1) {
    this.quantity = param1.readVarUhInt();
    if (this.quantity < 0) {
        throw new Error("Forbidden value (" + this.quantity + ") on element of ExchangeCraftPaymentModificationRequestMessage.quantity.");
    } else {
        return;
    }
};

ExchangeCraftPaymentModificationRequestMessage.prototype.getMessageId = function() {
    return 6579;
};

ExchangeCraftPaymentModificationRequestMessage.prototype.getClassName = function() {
    return 'ExchangeCraftPaymentModificationRequestMessage';
};

module.exports.id = 6579;
module.exports.ExchangeCraftPaymentModificationRequestMessage = ExchangeCraftPaymentModificationRequestMessage;