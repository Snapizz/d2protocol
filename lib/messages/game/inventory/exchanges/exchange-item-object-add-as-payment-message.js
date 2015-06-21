var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeItemObjectAddAsPaymentMessage = module.exports = function() {
    this.paymentType = 0;
    this.bAdd = false;
    this.objectToMoveId = 0;
    this.quantity = 0;

    return this;
};

require('util').inherits(ExchangeItemObjectAddAsPaymentMessage, d2com.NetworkMessage.class);

ExchangeItemObjectAddAsPaymentMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeItemObjectAddAsPaymentMessage(output);
};

ExchangeItemObjectAddAsPaymentMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeItemObjectAddAsPaymentMessage(input);
};

ExchangeItemObjectAddAsPaymentMessage.prototype.serializeAs_ExchangeItemObjectAddAsPaymentMessage = function(param1) {
    param1.writeByte(this.paymentType);
    param1.writeBoolean(this.bAdd);
    if (this.objectToMoveId < 0) {
        throw new Error("Forbidden value (" + this.objectToMoveId + ") on element objectToMoveId.");
    } else {
        param1.writeVarInt(this.objectToMoveId);
        if (this.quantity < 0) {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        } else {
            param1.writeVarInt(this.quantity);
            return;
        }
    }
};

ExchangeItemObjectAddAsPaymentMessage.prototype.deserializeAs_ExchangeItemObjectAddAsPaymentMessage = function(param1) {
    this.paymentType = param1.readByte();
    if (this.paymentType < 0) {
        throw new Error("Forbidden value (" + this.paymentType + ") on element of ExchangeItemObjectAddAsPaymentMessage.paymentType.");
    } else {
        this.bAdd = param1.readBoolean();
        this.objectToMoveId = param1.readVarUhInt();
        if (this.objectToMoveId < 0) {
            throw new Error("Forbidden value (" + this.objectToMoveId + ") on element of ExchangeItemObjectAddAsPaymentMessage.objectToMoveId.");
        } else {
            this.quantity = param1.readVarUhInt();
            if (this.quantity < 0) {
                throw new Error("Forbidden value (" + this.quantity + ") on element of ExchangeItemObjectAddAsPaymentMessage.quantity.");
            } else {
                return;
            }
        }
    }
};

ExchangeItemObjectAddAsPaymentMessage.prototype.getMessageId = function() {
    return 5766;
};

ExchangeItemObjectAddAsPaymentMessage.prototype.getClassName = function() {
    return 'ExchangeItemObjectAddAsPaymentMessage';
};

module.exports.id = 5766;