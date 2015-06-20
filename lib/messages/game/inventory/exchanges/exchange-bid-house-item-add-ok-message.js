var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var ObjectItemToSellInBid = require('../../../../types/game/data/items/object-item-to-sell-in-bid.js').class;

var ExchangeBidHouseItemAddOkMessage = function() {
  this.itemInfo = new ObjectItemToSellInBid();
};

util.inherits(ExchangeBidHouseItemAddOkMessage, BaseMessage);

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
module.exports.class = ExchangeBidHouseItemAddOkMessage;
module.exports.getInstance = function() {
  return new ExchangeBidHouseItemAddOkMessage();
};