var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeBidHouseItemRemoveOkMessage = module.exports = function() {
    this.sellerId = 0;

    return this;
};

require('util').inherits(ExchangeBidHouseItemRemoveOkMessage, d2com.NetworkMessage.class);

ExchangeBidHouseItemRemoveOkMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeBidHouseItemRemoveOkMessage(output);
};

ExchangeBidHouseItemRemoveOkMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeBidHouseItemRemoveOkMessage(input);
};

ExchangeBidHouseItemRemoveOkMessage.prototype.serializeAs_ExchangeBidHouseItemRemoveOkMessage = function(param1) {
    param1.writeInt(this.sellerId);
};

ExchangeBidHouseItemRemoveOkMessage.prototype.deserializeAs_ExchangeBidHouseItemRemoveOkMessage = function(param1) {
    this.sellerId = param1.readInt();
};

ExchangeBidHouseItemRemoveOkMessage.prototype.getMessageId = function() {
    return 5946;
};

ExchangeBidHouseItemRemoveOkMessage.prototype.getClassName = function() {
    return 'ExchangeBidHouseItemRemoveOkMessage';
};

module.exports.id = 5946;