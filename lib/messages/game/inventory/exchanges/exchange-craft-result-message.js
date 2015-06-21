var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeCraftResultMessage = module.exports = function() {
    this.craftResult = 0;

    return this;
};

require('util').inherits(ExchangeCraftResultMessage, d2com.NetworkMessage.class);

ExchangeCraftResultMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeCraftResultMessage(output);
};

ExchangeCraftResultMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeCraftResultMessage(input);
};

ExchangeCraftResultMessage.prototype.serializeAs_ExchangeCraftResultMessage = function(param1) {
    param1.writeByte(this.craftResult);
};

ExchangeCraftResultMessage.prototype.deserializeAs_ExchangeCraftResultMessage = function(param1) {
    this.craftResult = param1.readByte();
    if (this.craftResult < 0) {
        throw new Error("Forbidden value (" + this.craftResult + ") on element of ExchangeCraftResultMessage.craftResult.");
    } else {
        return;
    }
};

ExchangeCraftResultMessage.prototype.getMessageId = function() {
    return 5790;
};

ExchangeCraftResultMessage.prototype.getClassName = function() {
    return 'ExchangeCraftResultMessage';
};

module.exports.id = 5790;