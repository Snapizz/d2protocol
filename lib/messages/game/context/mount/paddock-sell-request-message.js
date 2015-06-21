var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PaddockSellRequestMessage = function() {
    this.price = 0;
};

require('util').inherits(PaddockSellRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new PaddockSellRequestMessage();
};

PaddockSellRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PaddockSellRequestMessage(output);
};

PaddockSellRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PaddockSellRequestMessage(input);
};

PaddockSellRequestMessage.prototype.serializeAs_PaddockSellRequestMessage = function(param1) {
    if (this.price < 0) {
        throw new Error("Forbidden value (" + this.price + ") on element price.");
    } else {
        param1.writeVarInt(this.price);
        return;
    }
};

PaddockSellRequestMessage.prototype.deserializeAs_PaddockSellRequestMessage = function(param1) {
    this.price = param1.readVarUhInt();
    if (this.price < 0) {
        throw new Error("Forbidden value (" + this.price + ") on element of PaddockSellRequestMessage.price.");
    } else {
        return;
    }
};

PaddockSellRequestMessage.prototype.getMessageId = function() {
    return 5953;
};

PaddockSellRequestMessage.prototype.getClassName = function() {
    return 'PaddockSellRequestMessage';
};

module.exports.id = 5953;
module.exports.PaddockSellRequestMessage = PaddockSellRequestMessage;