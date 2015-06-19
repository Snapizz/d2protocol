var d2com = require('d2com'),
  BaseMessage = require('./exchange-bid-price-message.js').class,
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
  this.serializeAs_ExchangeBidPriceMessage(output);
  output.writeBoolean(this.allIdentical);
  output.writeShort(this.minimalPrices.length);
  var _i2;
  while (_i2 < this.minimalPrices.length) {
    if (this.minimalPrices[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.minimalPrices[_i2]) + ") on element 2 (starting at 1) of minimalPrices.")));
    };
    output.writeVarInt(this.minimalPrices[_i2]);
    _i2++;
  };
};

ExchangeBidPriceForSellerMessage.prototype.deserializeAs_ExchangeBidPriceForSellerMessage = function(input) {
  var _val2;
  this.deserialize(input);
  this.allIdentical = input.readBoolean();
  var _minimalPricesLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _minimalPricesLen) {
    _val2 = input.readVarUhInt();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of minimalPrices.")));
    };
    this.minimalPrices.push(_val2);
    _i2++;
  };
};

ExchangeBidPriceForSellerMessage.prototype.getMessageId = function() {
  return 6464;
};

ExchangeBidPriceForSellerMessage.prototype.getClassName = function() {
  return 'ExchangeBidPriceForSellerMessage';
};

module.exports.id = 6464;
module.exports.class = ExchangeBidPriceForSellerMessage;