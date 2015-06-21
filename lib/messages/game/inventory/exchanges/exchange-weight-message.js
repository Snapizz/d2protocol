var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeWeightMessage = function() {
    this.currentWeight = 0;
    this.maxWeight = 0;
};

require('util').inherits(ExchangeWeightMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeWeightMessage();
};

ExchangeWeightMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeWeightMessage(output);
};

ExchangeWeightMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeWeightMessage(input);
};

ExchangeWeightMessage.prototype.serializeAs_ExchangeWeightMessage = function(param1) {
    if (this.currentWeight < 0) {
        throw new Error("Forbidden value (" + this.currentWeight + ") on element currentWeight.");
    } else {
        param1.writeVarInt(this.currentWeight);
        if (this.maxWeight < 0) {
            throw new Error("Forbidden value (" + this.maxWeight + ") on element maxWeight.");
        } else {
            param1.writeVarInt(this.maxWeight);
            return;
        }
    }
};

ExchangeWeightMessage.prototype.deserializeAs_ExchangeWeightMessage = function(param1) {
    this.currentWeight = param1.readVarUhInt();
    if (this.currentWeight < 0) {
        throw new Error("Forbidden value (" + this.currentWeight + ") on element of ExchangeWeightMessage.currentWeight.");
    } else {
        this.maxWeight = param1.readVarUhInt();
        if (this.maxWeight < 0) {
            throw new Error("Forbidden value (" + this.maxWeight + ") on element of ExchangeWeightMessage.maxWeight.");
        } else {
            return;
        }
    }
};

ExchangeWeightMessage.prototype.getMessageId = function() {
    return 5793;
};

ExchangeWeightMessage.prototype.getClassName = function() {
    return 'ExchangeWeightMessage';
};

module.exports.id = 5793;
module.exports.ExchangeWeightMessage = ExchangeWeightMessage;