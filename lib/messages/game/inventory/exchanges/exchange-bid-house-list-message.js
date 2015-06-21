var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ExchangeBidHouseListMessage = function() {
    this.id = 0;
};

require('util').inherits(ExchangeBidHouseListMessage, d2com.NetworkMessage.class);

ExchangeBidHouseListMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeBidHouseListMessage(output);
};

ExchangeBidHouseListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeBidHouseListMessage(input);
};

ExchangeBidHouseListMessage.prototype.serializeAs_ExchangeBidHouseListMessage = function(param1) {
    if (this.id < 0) {
        throw new Error("Forbidden value (" + this.id + ") on element id.");
    } else {
        param1.writeVarShort(this.id);
        return;
    }
};

ExchangeBidHouseListMessage.prototype.deserializeAs_ExchangeBidHouseListMessage = function(param1) {
    this.id = param1.readVarUhShort();
    if (this.id < 0) {
        throw new Error("Forbidden value (" + this.id + ") on element of ExchangeBidHouseListMessage.id.");
    } else {
        return;
    }
};

ExchangeBidHouseListMessage.prototype.getMessageId = function() {
    return 5807;
};

ExchangeBidHouseListMessage.prototype.getClassName = function() {
    return 'ExchangeBidHouseListMessage';
};

module.exports.id = 5807;
module.exports.class = ExchangeBidHouseListMessage;
module.exports.getInstance = function() {
    return new ExchangeBidHouseListMessage;
};