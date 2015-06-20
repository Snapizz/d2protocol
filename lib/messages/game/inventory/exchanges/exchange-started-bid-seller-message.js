var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');

var SellerBuyerDescriptor = require('../../../../types/game/data/items/seller-buyer-descriptor.js').class;

var ExchangeStartedBidSellerMessage = function() {
  this.sellerDescriptor = new SellerBuyerDescriptor();
  this.objectsInfos = [];
};

util.inherits(ExchangeStartedBidSellerMessage, BaseMessage);

ExchangeStartedBidSellerMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartedBidSellerMessage(output);
};

ExchangeStartedBidSellerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartedBidSellerMessage(input);
};

ExchangeStartedBidSellerMessage.prototype.serializeAs_ExchangeStartedBidSellerMessage = function(param1) {
  this.sellerDescriptor.serializeAs_SellerBuyerDescriptor(param1);
  param1.writeShort(this.objectsInfos.length);
  var _loc2_ = 0;
  while (_loc2_ < this.objectsInfos.length) {
    (this.objectsInfos[_loc2_]).serializeAs_ObjectItemToSellInBid(param1);
    _loc2_++;
  }
};

ExchangeStartedBidSellerMessage.prototype.deserializeAs_ExchangeStartedBidSellerMessage = function(param1) {
  var _loc4_ = null;
  this.sellerDescriptor = new SellerBuyerDescriptor();
  this.sellerDescriptor.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new ObjectItemToSellInBid();
    _loc4_.deserialize(param1);
    this.objectsInfos.push(_loc4_);
    _loc3_++;
  }
};

ExchangeStartedBidSellerMessage.prototype.getMessageId = function() {
  return 5905;
};

ExchangeStartedBidSellerMessage.prototype.getClassName = function() {
  return 'ExchangeStartedBidSellerMessage';
};

module.exports.id = 5905;
module.exports.class = ExchangeStartedBidSellerMessage;
module.exports.getInstance = function() {
  return new ExchangeStartedBidSellerMessage();
};