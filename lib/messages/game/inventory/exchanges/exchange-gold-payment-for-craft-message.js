var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeGoldPaymentForCraftMessage = module.exports = function() {
    this.onlySuccess = false;
    this.goldSum = 0;

    return this;
};

require('util').inherits(ExchangeGoldPaymentForCraftMessage, d2com.NetworkMessage.class);

ExchangeGoldPaymentForCraftMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeGoldPaymentForCraftMessage(output);
};

ExchangeGoldPaymentForCraftMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeGoldPaymentForCraftMessage(input);
};

ExchangeGoldPaymentForCraftMessage.prototype.serializeAs_ExchangeGoldPaymentForCraftMessage = function(param1) {
    param1.writeBoolean(this.onlySuccess);
    if (this.goldSum < 0) {
        throw new Error("Forbidden value (" + this.goldSum + ") on element goldSum.");
    } else {
        param1.writeVarInt(this.goldSum);
        return;
    }
};

ExchangeGoldPaymentForCraftMessage.prototype.deserializeAs_ExchangeGoldPaymentForCraftMessage = function(param1) {
    this.onlySuccess = param1.readBoolean();
    this.goldSum = param1.readVarUhInt();
    if (this.goldSum < 0) {
        throw new Error("Forbidden value (" + this.goldSum + ") on element of ExchangeGoldPaymentForCraftMessage.goldSum.");
    } else {
        return;
    }
};

ExchangeGoldPaymentForCraftMessage.prototype.getMessageId = function() {
    return 5833;
};

ExchangeGoldPaymentForCraftMessage.prototype.getClassName = function() {
    return 'ExchangeGoldPaymentForCraftMessage';
};

module.exports.id = 5833;