var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var HouseBuyRequestMessage = module.exports = function() {
    this.proposedPrice = 0;

    return this;
};

require('util').inherits(HouseBuyRequestMessage, d2com.NetworkMessage.class);

HouseBuyRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_HouseBuyRequestMessage(output);
};

HouseBuyRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_HouseBuyRequestMessage(input);
};

HouseBuyRequestMessage.prototype.serializeAs_HouseBuyRequestMessage = function(param1) {
    if (this.proposedPrice < 0) {
        throw new Error("Forbidden value (" + this.proposedPrice + ") on element proposedPrice.");
    } else {
        param1.writeVarInt(this.proposedPrice);
        return;
    }
};

HouseBuyRequestMessage.prototype.deserializeAs_HouseBuyRequestMessage = function(param1) {
    this.proposedPrice = param1.readVarUhInt();
    if (this.proposedPrice < 0) {
        throw new Error("Forbidden value (" + this.proposedPrice + ") on element of HouseBuyRequestMessage.proposedPrice.");
    } else {
        return;
    }
};

HouseBuyRequestMessage.prototype.getMessageId = function() {
    return 5738;
};

HouseBuyRequestMessage.prototype.getClassName = function() {
    return 'HouseBuyRequestMessage';
};

module.exports.id = 5738;