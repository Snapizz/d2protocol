var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeBidHouseGenericItemRemovedMessage = module.exports = function() {
    this.objGenericId = 0;

    return this;
};

require('util').inherits(ExchangeBidHouseGenericItemRemovedMessage, d2com.NetworkMessage.class);

ExchangeBidHouseGenericItemRemovedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeBidHouseGenericItemRemovedMessage(output);
};

ExchangeBidHouseGenericItemRemovedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeBidHouseGenericItemRemovedMessage(input);
};

ExchangeBidHouseGenericItemRemovedMessage.prototype.serializeAs_ExchangeBidHouseGenericItemRemovedMessage = function(param1) {
    if (this.objGenericId < 0) {
        throw new Error("Forbidden value (" + this.objGenericId + ") on element objGenericId.");
    } else {
        param1.writeVarShort(this.objGenericId);
        return;
    }
};

ExchangeBidHouseGenericItemRemovedMessage.prototype.deserializeAs_ExchangeBidHouseGenericItemRemovedMessage = function(param1) {
    this.objGenericId = param1.readVarUhShort();
    if (this.objGenericId < 0) {
        throw new Error("Forbidden value (" + this.objGenericId + ") on element of ExchangeBidHouseGenericItemRemovedMessage.objGenericId.");
    } else {
        return;
    }
};

ExchangeBidHouseGenericItemRemovedMessage.prototype.getMessageId = function() {
    return 5948;
};

ExchangeBidHouseGenericItemRemovedMessage.prototype.getClassName = function() {
    return 'ExchangeBidHouseGenericItemRemovedMessage';
};

module.exports.id = 5948;