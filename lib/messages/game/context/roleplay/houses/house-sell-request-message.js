var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var HouseSellRequestMessage = function() {
    this.amount = 0;
};

require('util').inherits(HouseSellRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new HouseSellRequestMessage();
};

HouseSellRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_HouseSellRequestMessage(output);
};

HouseSellRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_HouseSellRequestMessage(input);
};

HouseSellRequestMessage.prototype.serializeAs_HouseSellRequestMessage = function(param1) {
    if (this.amount < 0) {
        throw new Error("Forbidden value (" + this.amount + ") on element amount.");
    } else {
        param1.writeVarInt(this.amount);
        return;
    }
};

HouseSellRequestMessage.prototype.deserializeAs_HouseSellRequestMessage = function(param1) {
    this.amount = param1.readVarUhInt();
    if (this.amount < 0) {
        throw new Error("Forbidden value (" + this.amount + ") on element of HouseSellRequestMessage.amount.");
    } else {
        return;
    }
};

HouseSellRequestMessage.prototype.getMessageId = function() {
    return 5697;
};

HouseSellRequestMessage.prototype.getClassName = function() {
    return 'HouseSellRequestMessage';
};

module.exports.id = 5697;
module.exports.HouseSellRequestMessage = HouseSellRequestMessage;