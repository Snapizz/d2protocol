var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PaddockBuyRequestMessage = module.exports = function() {
    this.proposedPrice = 0;

    return this;
};

require('util').inherits(PaddockBuyRequestMessage, d2com.NetworkMessage.class);

PaddockBuyRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PaddockBuyRequestMessage(output);
};

PaddockBuyRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PaddockBuyRequestMessage(input);
};

PaddockBuyRequestMessage.prototype.serializeAs_PaddockBuyRequestMessage = function(param1) {
    if (this.proposedPrice < 0) {
        throw new Error("Forbidden value (" + this.proposedPrice + ") on element proposedPrice.");
    } else {
        param1.writeVarInt(this.proposedPrice);
        return;
    }
};

PaddockBuyRequestMessage.prototype.deserializeAs_PaddockBuyRequestMessage = function(param1) {
    this.proposedPrice = param1.readVarUhInt();
    if (this.proposedPrice < 0) {
        throw new Error("Forbidden value (" + this.proposedPrice + ") on element of PaddockBuyRequestMessage.proposedPrice.");
    } else {
        return;
    }
};

PaddockBuyRequestMessage.prototype.getMessageId = function() {
    return 5951;
};

PaddockBuyRequestMessage.prototype.getClassName = function() {
    return 'PaddockBuyRequestMessage';
};

module.exports.id = 5951;