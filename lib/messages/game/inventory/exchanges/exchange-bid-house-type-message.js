var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ExchangeBidHouseTypeMessage = function() {
    this.type = 0;
};

require('util').inherits(ExchangeBidHouseTypeMessage, d2com.NetworkMessage.class);

ExchangeBidHouseTypeMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeBidHouseTypeMessage(output);
};

ExchangeBidHouseTypeMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeBidHouseTypeMessage(input);
};

ExchangeBidHouseTypeMessage.prototype.serializeAs_ExchangeBidHouseTypeMessage = function(param1) {
    if (this.type < 0) {
        throw new Error("Forbidden value (" + this.type + ") on element type.");
    } else {
        param1.writeVarInt(this.type);
        return;
    }
};

ExchangeBidHouseTypeMessage.prototype.deserializeAs_ExchangeBidHouseTypeMessage = function(param1) {
    this.type = param1.readVarUhInt();
    if (this.type < 0) {
        throw new Error("Forbidden value (" + this.type + ") on element of ExchangeBidHouseTypeMessage.type.");
    } else {
        return;
    }
};

ExchangeBidHouseTypeMessage.prototype.getMessageId = function() {
    return 5803;
};

ExchangeBidHouseTypeMessage.prototype.getClassName = function() {
    return 'ExchangeBidHouseTypeMessage';
};

module.exports.id = 5803;
module.exports.class = ExchangeBidHouseTypeMessage;
module.exports.getInstance = function() {
    return new ExchangeBidHouseTypeMessage;
};