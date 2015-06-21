var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeItemAutoCraftRemainingMessage = module.exports = function() {
    this.count = 0;

    return this;
};

require('util').inherits(ExchangeItemAutoCraftRemainingMessage, d2com.NetworkMessage.class);

ExchangeItemAutoCraftRemainingMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeItemAutoCraftRemainingMessage(output);
};

ExchangeItemAutoCraftRemainingMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeItemAutoCraftRemainingMessage(input);
};

ExchangeItemAutoCraftRemainingMessage.prototype.serializeAs_ExchangeItemAutoCraftRemainingMessage = function(param1) {
    if (this.count < 0) {
        throw new Error("Forbidden value (" + this.count + ") on element count.");
    } else {
        param1.writeVarInt(this.count);
        return;
    }
};

ExchangeItemAutoCraftRemainingMessage.prototype.deserializeAs_ExchangeItemAutoCraftRemainingMessage = function(param1) {
    this.count = param1.readVarUhInt();
    if (this.count < 0) {
        throw new Error("Forbidden value (" + this.count + ") on element of ExchangeItemAutoCraftRemainingMessage.count.");
    } else {
        return;
    }
};

ExchangeItemAutoCraftRemainingMessage.prototype.getMessageId = function() {
    return 6015;
};

ExchangeItemAutoCraftRemainingMessage.prototype.getClassName = function() {
    return 'ExchangeItemAutoCraftRemainingMessage';
};

module.exports.id = 6015;