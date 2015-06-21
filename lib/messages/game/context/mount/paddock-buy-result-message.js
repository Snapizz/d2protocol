var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PaddockBuyResultMessage = module.exports = function() {
    this.paddockId = 0;
    this.bought = false;
    this.realPrice = 0;

    return this;
};

require('util').inherits(PaddockBuyResultMessage, d2com.NetworkMessage.class);

PaddockBuyResultMessage.prototype.serialize = function(output) {
    this.serializeAs_PaddockBuyResultMessage(output);
};

PaddockBuyResultMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PaddockBuyResultMessage(input);
};

PaddockBuyResultMessage.prototype.serializeAs_PaddockBuyResultMessage = function(param1) {
    param1.writeInt(this.paddockId);
    param1.writeBoolean(this.bought);
    if (this.realPrice < 0) {
        throw new Error("Forbidden value (" + this.realPrice + ") on element realPrice.");
    } else {
        param1.writeVarInt(this.realPrice);
        return;
    }
};

PaddockBuyResultMessage.prototype.deserializeAs_PaddockBuyResultMessage = function(param1) {
    this.paddockId = param1.readInt();
    this.bought = param1.readBoolean();
    this.realPrice = param1.readVarUhInt();
    if (this.realPrice < 0) {
        throw new Error("Forbidden value (" + this.realPrice + ") on element of PaddockBuyResultMessage.realPrice.");
    } else {
        return;
    }
};

PaddockBuyResultMessage.prototype.getMessageId = function() {
    return 6516;
};

PaddockBuyResultMessage.prototype.getClassName = function() {
    return 'PaddockBuyResultMessage';
};

module.exports.id = 6516;