var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ExchangeBidHouseItemRemoveOkMessage = function() {
  this.sellerId = 0;
};

util.inherits(ExchangeBidHouseItemRemoveOkMessage, BaseMessage);

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
module.exports.class = ExchangeBidHouseItemRemoveOkMessage;