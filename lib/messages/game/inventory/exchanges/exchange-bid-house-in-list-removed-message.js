var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeBidHouseInListRemovedMessage = module.exports = function() {
    this.itemUID = 0;

    return this;
};

require('util').inherits(ExchangeBidHouseInListRemovedMessage, d2com.NetworkMessage.class);

ExchangeBidHouseInListRemovedMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeBidHouseInListRemovedMessage(output);
};

ExchangeBidHouseInListRemovedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeBidHouseInListRemovedMessage(input);
};

ExchangeBidHouseInListRemovedMessage.prototype.serializeAs_ExchangeBidHouseInListRemovedMessage = function(param1) {
    param1.writeInt(this.itemUID);
};

ExchangeBidHouseInListRemovedMessage.prototype.deserializeAs_ExchangeBidHouseInListRemovedMessage = function(param1) {
    this.itemUID = param1.readInt();
};

ExchangeBidHouseInListRemovedMessage.prototype.getMessageId = function() {
    return 5950;
};

ExchangeBidHouseInListRemovedMessage.prototype.getClassName = function() {
    return 'ExchangeBidHouseInListRemovedMessage';
};

module.exports.id = 5950;