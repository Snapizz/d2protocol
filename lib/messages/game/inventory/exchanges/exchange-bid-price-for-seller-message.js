var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeBidPriceForSellerMessage = function() {
  this.allIdentical = false;
  this.minimalPrices = [];
};

util.inherits(ExchangeBidPriceForSellerMessage, BaseMessage);

ExchangeBidPriceForSellerMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBidPriceForSellerMessage(output);
};

ExchangeBidPriceForSellerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBidPriceForSellerMessage(input);
};

ExchangeBidPriceForSellerMessage.prototype.serializeAs_ExchangeBidPriceForSellerMessage = function(output) {
  super.serializeAs_ExchangeBidPriceMessage(param1);
  param1.writeBoolean(this.allIdentical);
  param1.writeShort(this.minimalPrices.length);
  var _loc2_ = 0;
  while (_loc2_ < this.minimalPrices.length) {
    if (this.minimalPrices[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.minimalPrices[_loc2_] + ") on element 2 (starting at 1) of minimalPrices.");
    } else {
      param1.writeVarInt(this.minimalPrices[_loc2_]);
      _loc2_++;
      continue;
    }
  }
};

ExchangeBidPriceForSellerMessage.prototype.deserializeAs_ExchangeBidPriceForSellerMessage = function(input) {
  var _loc4_ = 0;
  super.deserialize(param1);
  this.allIdentical = param1.readBoolean();
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readVarUhInt();
    if (_loc4_ < 0) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of minimalPrices.");
    } else {
      this.minimalPrices.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
};

ExchangeBidPriceForSellerMessage.prototype.getMessageId = function() {
  return 6464;
};

ExchangeBidPriceForSellerMessage.prototype.getClassName = function() {
  return 'ExchangeBidPriceForSellerMessage';
};

module.exports.id = 6464;
module.exports.class = ExchangeBidPriceForSellerMessage;