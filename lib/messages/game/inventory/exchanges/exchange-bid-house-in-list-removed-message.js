var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeBidHouseInListRemovedMessage = function() {
  this.itemUID = 0;
};

util.inherits(ExchangeBidHouseInListRemovedMessage, BaseMessage);

ExchangeBidHouseInListRemovedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBidHouseInListRemovedMessage(output);
};

ExchangeBidHouseInListRemovedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBidHouseInListRemovedMessage(input);
};

ExchangeBidHouseInListRemovedMessage.prototype.serializeAs_ExchangeBidHouseInListRemovedMessage = function(output) {
  param1.writeInt(this.itemUID);
};

ExchangeBidHouseInListRemovedMessage.prototype.deserializeAs_ExchangeBidHouseInListRemovedMessage = function(input) {
  this.itemUID = param1.readInt();
};

ExchangeBidHouseInListRemovedMessage.prototype.getMessageId = function() {
  return 5950;
};

ExchangeBidHouseInListRemovedMessage.prototype.getClassName = function() {
  return 'ExchangeBidHouseInListRemovedMessage';
};

module.exports.id = 5950;
module.exports.class = ExchangeBidHouseInListRemovedMessage;