var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeItemGoldAddAsPaymentMessage = module.exports = function() {
    this.paymentType = 0;
    this.quantity = 0;

    return this;
};

require('util').inherits(ExchangeItemGoldAddAsPaymentMessage, d2com.NetworkMessage.class);

ExchangeItemGoldAddAsPaymentMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeItemGoldAddAsPaymentMessage(output);
};

ExchangeItemGoldAddAsPaymentMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeItemGoldAddAsPaymentMessage(input);
};

ExchangeItemGoldAddAsPaymentMessage.prototype.serializeAs_ExchangeItemGoldAddAsPaymentMessage = function(param1) {
    param1.writeByte(this.paymentType);
    if (this.quantity < 0) {
        throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
    } else {
        param1.writeVarInt(this.quantity);
        return;
    }
};

ExchangeItemGoldAddAsPaymentMessage.prototype.deserializeAs_ExchangeItemGoldAddAsPaymentMessage = function(param1) {
    this.paymentType = param1.readByte();
    if (this.paymentType < 0) {
        throw new Error("Forbidden value (" + this.paymentType + ") on element of ExchangeItemGoldAddAsPaymentMessage.paymentType.");
    } else {
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ExchangeItemGoldAddAsPaymentMessage.quantity.");
        } else {
            return;
        }
    }
};

ExchangeItemGoldAddAsPaymentMessage.prototype.getMessageId = function() {
    return 5770;
};

ExchangeItemGoldAddAsPaymentMessage.prototype.getClassName = function() {
    return 'ExchangeItemGoldAddAsPaymentMessage';
};

module.exports.id = 5770;