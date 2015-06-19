var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartedBidBuyerMessage = function() {
  this.buyerDescriptor;
};

util.inherits(ExchangeStartedBidBuyerMessage, BaseMessage);

ExchangeStartedBidBuyerMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartedBidBuyerMessage(output);
};

ExchangeStartedBidBuyerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartedBidBuyerMessage(input);
};

ExchangeStartedBidBuyerMessage.prototype.serializeAs_ExchangeStartedBidBuyerMessage = function(output) {
  this.buyerDescriptor.serializeAs_SellerBuyerDescriptor(output);
};

ExchangeStartedBidBuyerMessage.prototype.deserializeAs_ExchangeStartedBidBuyerMessage = function(input) {
  this.buyerDescriptor = new SellerBuyerDescriptor();
  this.buyerDescriptor.deserialize(input);
};

ExchangeStartedBidBuyerMessage.prototype.getMessageId = function() {
  return 5904;
};

ExchangeStartedBidBuyerMessage.prototype.getClassName = function() {
  return 'ExchangeStartedBidBuyerMessage';
};

module.exports.id = 5904;
module.exports.class = ExchangeStartedBidBuyerMessage;