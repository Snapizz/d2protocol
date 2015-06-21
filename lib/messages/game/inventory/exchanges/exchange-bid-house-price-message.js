var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ExchangeBidHousePriceMessage = function() {
    this.genId = 0;
};

require('util').inherits(ExchangeBidHousePriceMessage, d2com.NetworkMessage.class);

ExchangeBidHousePriceMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeBidHousePriceMessage(output);
};

ExchangeBidHousePriceMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeBidHousePriceMessage(input);
};

ExchangeBidHousePriceMessage.prototype.serializeAs_ExchangeBidHousePriceMessage = function(param1) {
    if (this.genId < 0) {
        throw new Error("Forbidden value (" + this.genId + ") on element genId.");
    } else {
        param1.writeVarShort(this.genId);
        return;
    }
};

ExchangeBidHousePriceMessage.prototype.deserializeAs_ExchangeBidHousePriceMessage = function(param1) {
    this.genId = param1.readVarUhShort();
    if (this.genId < 0) {
        throw new Error("Forbidden value (" + this.genId + ") on element of ExchangeBidHousePriceMessage.genId.");
    } else {
        return;
    }
};

ExchangeBidHousePriceMessage.prototype.getMessageId = function() {
    return 5805;
};

ExchangeBidHousePriceMessage.prototype.getClassName = function() {
    return 'ExchangeBidHousePriceMessage';
};

module.exports.id = 5805;
module.exports.class = ExchangeBidHousePriceMessage;
module.exports.getInstance = function() {
    return new ExchangeBidHousePriceMessage;
};