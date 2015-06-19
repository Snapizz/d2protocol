var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartOkHumanVendorMessage = function() {
  this.sellerId = 0;
  this.objectsInfos = [];
};

util.inherits(ExchangeStartOkHumanVendorMessage, BaseMessage);

ExchangeStartOkHumanVendorMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartOkHumanVendorMessage(output);
};

ExchangeStartOkHumanVendorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartOkHumanVendorMessage(input);
};

ExchangeStartOkHumanVendorMessage.prototype.serializeAs_ExchangeStartOkHumanVendorMessage = function(output) {
  if (this.sellerId < 0) {
    throw (new Error((("Forbidden value (" + this.sellerId) + ") on element sellerId.")));
  };
  output.writeVarInt(this.sellerId);
  output.writeShort(this.objectsInfos.length);
  var _i2;
  while (_i2 < this.objectsInfos.length) {
    (this.objectsInfos[_i2]).serializeAs_ObjectItemToSellInHumanVendorShop(output);
    _i2++;
  };
};

ExchangeStartOkHumanVendorMessage.prototype.deserializeAs_ExchangeStartOkHumanVendorMessage = function(input) {
  var _item2;
  this.sellerId = input.readVarUhInt();
  if (this.sellerId < 0) {
    throw (new Error((("Forbidden value (" + this.sellerId) + ") on element of ExchangeStartOkHumanVendorMessage.sellerId.")));
  };
  var _objectsInfosLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _objectsInfosLen) {
    _item2 = new ObjectItemToSellInHumanVendorShop();
    _item2.deserialize(input);
    this.objectsInfos.push(_item2);
    _i2++;
  };
};

ExchangeStartOkHumanVendorMessage.prototype.getMessageId = function() {
  return 5767;
};

ExchangeStartOkHumanVendorMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkHumanVendorMessage';
};

module.exports.id = 5767;
module.exports.class = ExchangeStartOkHumanVendorMessage;