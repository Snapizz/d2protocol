var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeRemovedPaymentForCraftMessage = module.exports = function() {
    this.onlySuccess = false;
    this.objectUID = 0;

    return this;
};

require('util').inherits(ExchangeRemovedPaymentForCraftMessage, d2com.NetworkMessage.class);

ExchangeRemovedPaymentForCraftMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeRemovedPaymentForCraftMessage(output);
};

ExchangeRemovedPaymentForCraftMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeRemovedPaymentForCraftMessage(input);
};

ExchangeRemovedPaymentForCraftMessage.prototype.serializeAs_ExchangeRemovedPaymentForCraftMessage = function(param1) {
    param1.writeBoolean(this.onlySuccess);
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
    } else {
        param1.writeVarInt(this.objectUID);
        return;
    }
};

ExchangeRemovedPaymentForCraftMessage.prototype.deserializeAs_ExchangeRemovedPaymentForCraftMessage = function(param1) {
    this.onlySuccess = param1.readBoolean();
    this.objectUID = param1.readVarUhInt();
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element of ExchangeRemovedPaymentForCraftMessage.objectUID.");
    } else {
        return;
    }
};

ExchangeRemovedPaymentForCraftMessage.prototype.getMessageId = function() {
    return 6031;
};

ExchangeRemovedPaymentForCraftMessage.prototype.getClassName = function() {
    return 'ExchangeRemovedPaymentForCraftMessage';
};

module.exports.id = 6031;