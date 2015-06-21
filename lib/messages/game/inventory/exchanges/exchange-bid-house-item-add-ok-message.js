var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ObjectItemToSellInBid = require('../../../../types/game/data/items/object-item-to-sell-in-bid.js').class;

var ExchangeBidHouseItemAddOkMessage = module.exports = function() {
    this.itemInfo = new ObjectItemToSellInBid();

    return this;
};

require('util').inherits(ExchangeBidHouseItemAddOkMessage, d2com.NetworkMessage.class);

ExchangeBidHouseItemAddOkMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeBidHouseItemAddOkMessage(output);
};

ExchangeBidHouseItemAddOkMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeBidHouseItemAddOkMessage(input);
};

ExchangeBidHouseItemAddOkMessage.prototype.serializeAs_ExchangeBidHouseItemAddOkMessage = function(param1) {
    this.itemInfo.serializeAs_ObjectItemToSellInBid(param1);
};

ExchangeBidHouseItemAddOkMessage.prototype.deserializeAs_ExchangeBidHouseItemAddOkMessage = function(param1) {
    this.itemInfo = new ObjectItemToSellInBid();
    this.itemInfo.deserialize(param1);
};

ExchangeBidHouseItemAddOkMessage.prototype.getMessageId = function() {
    return 5945;
};

ExchangeBidHouseItemAddOkMessage.prototype.getClassName = function() {
    return 'ExchangeBidHouseItemAddOkMessage';
};

module.exports.id = 5945;