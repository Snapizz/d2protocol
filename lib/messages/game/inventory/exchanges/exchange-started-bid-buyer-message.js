var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var SellerBuyerDescriptor = require('../../../../types/game/data/items/seller-buyer-descriptor.js').class;

var ExchangeStartedBidBuyerMessage = function() {
  this.buyerDescriptor = new SellerBuyerDescriptor();
};

util.inherits(ExchangeStartedBidBuyerMessage, BaseMessage);

ExchangeStartedBidBuyerMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartedBidBuyerMessage(output);
};

ExchangeStartedBidBuyerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartedBidBuyerMessage(input);
};

ExchangeStartedBidBuyerMessage.prototype.serializeAs_ExchangeStartedBidBuyerMessage = function(param1) {
  this.buyerDescriptor.serializeAs_SellerBuyerDescriptor(param1);
};

ExchangeStartedBidBuyerMessage.prototype.deserializeAs_ExchangeStartedBidBuyerMessage = function(param1) {
  this.buyerDescriptor = new SellerBuyerDescriptor();
  this.buyerDescriptor.deserialize(param1);
};

ExchangeStartedBidBuyerMessage.prototype.getMessageId = function() {
  return 5904;
};

ExchangeStartedBidBuyerMessage.prototype.getClassName = function() {
  return 'ExchangeStartedBidBuyerMessage';
};

module.exports.id = 5904;
module.exports.class = ExchangeStartedBidBuyerMessage;
module.exports.getInstance = function() {
  return new ExchangeStartedBidBuyerMessage();
};