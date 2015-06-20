var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeBidHouseInListUpdatedMessage = function() {

};

util.inherits(ExchangeBidHouseInListUpdatedMessage, BaseMessage);

ExchangeBidHouseInListUpdatedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBidHouseInListUpdatedMessage(output);
};

ExchangeBidHouseInListUpdatedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBidHouseInListUpdatedMessage(input);
};

ExchangeBidHouseInListUpdatedMessage.prototype.serializeAs_ExchangeBidHouseInListUpdatedMessage = function(output) {
  this.serializeAs_ExchangeBidHouseInListAddedMessage(param1);
};

ExchangeBidHouseInListUpdatedMessage.prototype.deserializeAs_ExchangeBidHouseInListUpdatedMessage = function(input) {
  this.deserialize(param1);
};

ExchangeBidHouseInListUpdatedMessage.prototype.getMessageId = function() {
  return 6337;
};

ExchangeBidHouseInListUpdatedMessage.prototype.getClassName = function() {
  return 'ExchangeBidHouseInListUpdatedMessage';
};

module.exports.id = 6337;
module.exports.class = ExchangeBidHouseInListUpdatedMessage;