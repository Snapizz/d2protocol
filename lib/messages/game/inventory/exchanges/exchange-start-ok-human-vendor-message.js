var d2com = require('d2com'),
  BaseMessage = require('./exchange-start-ok-human-vendor-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

ExchangeStartOkHumanVendorMessage.prototype.serializeAs_ExchangeStartOkHumanVendorMessage = function(param1) {
  if (this.sellerId < 0) {
    throw new Error("Forbidden value (" + this.sellerId + ") on element sellerId.");
  } else {
    param1.writeVarInt(this.sellerId);
    param1.writeShort(this.objectsInfos.length);
    var _loc2_ = 0;
    while (_loc2_ < this.objectsInfos.length) {
      (this.objectsInfos[_loc2_]).serializeAs_ObjectItemToSellInHumanVendorShop(param1);
      _loc2_++;
    }
    return;
  }
};

ExchangeStartOkHumanVendorMessage.prototype.deserializeAs_ExchangeStartOkHumanVendorMessage = function(param1) {
  var _loc4_ = null;
  this.sellerId = param1.readVarUhInt();
  if (this.sellerId < 0) {
    throw new Error("Forbidden value (" + this.sellerId + ") on element of ExchangeStartOkHumanVendorMessage.sellerId.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = new ObjectItemToSellInHumanVendorShop();
      _loc4_.deserialize(param1);
      this.objectsInfos.push(_loc4_);
      _loc3_++;
    }
    return;
  }
};

ExchangeStartOkHumanVendorMessage.prototype.getMessageId = function() {
  return 5767;
};

ExchangeStartOkHumanVendorMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkHumanVendorMessage';
};

module.exports.id = 5767;
module.exports.class = ExchangeStartOkHumanVendorMessage;
module.exports.getInstance = function() {
  return new ExchangeStartOkHumanVendorMessage();
};