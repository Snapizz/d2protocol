var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartedBidSellerMessage = function() {
  this.sellerDescriptor;
  this.objectsInfos = [];
};

util.inherits(ExchangeStartedBidSellerMessage, BaseMessage);

ExchangeStartedBidSellerMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartedBidSellerMessage(output);
};

ExchangeStartedBidSellerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartedBidSellerMessage(input);
};

ExchangeStartedBidSellerMessage.prototype.serializeAs_ExchangeStartedBidSellerMessage = function(output) {
  this.sellerDescriptor.serializeAs_SellerBuyerDescriptor(output);
  output.writeShort(this.objectsInfos.length);
  var _i2;
  while (_i2 < this.objectsInfos.length) {
    (this.objectsInfos[_i2]).serializeAs_ObjectItemToSellInBid(output);
    _i2++;
  };
};

ExchangeStartedBidSellerMessage.prototype.deserializeAs_ExchangeStartedBidSellerMessage = function(input) {
  var _item2;
  this.sellerDescriptor = new SellerBuyerDescriptor();
  this.sellerDescriptor.deserialize(input);
  var _objectsInfosLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _objectsInfosLen) {
    _item2 = new ObjectItemToSellInBid();
    _item2.deserialize(input);
    this.objectsInfos.push(_item2);
    _i2++;
  };
};

ExchangeStartedBidSellerMessage.prototype.getMessageId = function() {
  return 5905;
};

ExchangeStartedBidSellerMessage.prototype.getClassName = function() {
  return 'ExchangeStartedBidSellerMessage';
};

module.exports.id = 5905;
module.exports.class = ExchangeStartedBidSellerMessage;