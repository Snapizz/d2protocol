var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ExchangeBidHouseGenericItemAddedMessage = function() {
    this.objGenericId = 0;
};

require('util').inherits(ExchangeBidHouseGenericItemAddedMessage, d2com.NetworkMessage.class);

ExchangeBidHouseGenericItemAddedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeBidHouseGenericItemAddedMessage(output);
};

ExchangeBidHouseGenericItemAddedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeBidHouseGenericItemAddedMessage(input);
};

ExchangeBidHouseGenericItemAddedMessage.prototype.serializeAs_ExchangeBidHouseGenericItemAddedMessage = function(param1) {
    if (this.objGenericId < 0) {
        throw new Error("Forbidden value (" + this.objGenericId + ") on element objGenericId.");
    } else {
        param1.writeVarShort(this.objGenericId);
        return;
    }
};

ExchangeBidHouseGenericItemAddedMessage.prototype.deserializeAs_ExchangeBidHouseGenericItemAddedMessage = function(param1) {
    this.objGenericId = param1.readVarUhShort();
    if (this.objGenericId < 0) {
        throw new Error("Forbidden value (" + this.objGenericId + ") on element of ExchangeBidHouseGenericItemAddedMessage.objGenericId.");
    } else {
        return;
    }
};

ExchangeBidHouseGenericItemAddedMessage.prototype.getMessageId = function() {
    return 5947;
};

ExchangeBidHouseGenericItemAddedMessage.prototype.getClassName = function() {
    return 'ExchangeBidHouseGenericItemAddedMessage';
};

module.exports.id = 5947;
module.exports.class = ExchangeBidHouseGenericItemAddedMessage;
module.exports.getInstance = function() {
    return new ExchangeBidHouseGenericItemAddedMessage;
};