var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeStartOkNpcShopMessage = function() {
  this.npcSellerId = 0;
  this.tokenId = 0;
  this.objectsInfos = [];
};

util.inherits(ExchangeStartOkNpcShopMessage, BaseMessage);

ExchangeStartOkNpcShopMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartOkNpcShopMessage(output);
};

ExchangeStartOkNpcShopMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartOkNpcShopMessage(input);
};

ExchangeStartOkNpcShopMessage.prototype.serializeAs_ExchangeStartOkNpcShopMessage = function(param1) {
  param1.writeInt(this.npcSellerId);
  if (this.tokenId < 0) {
    throw new Error("Forbidden value (" + this.tokenId + ") on element tokenId.");
  } else {
    param1.writeVarShort(this.tokenId);
    param1.writeShort(this.objectsInfos.length);
    var _loc2_ = 0;
    while (_loc2_ < this.objectsInfos.length) {
      (this.objectsInfos[_loc2_]).serializeAs_ObjectItemToSellInNpcShop(param1);
      _loc2_++;
    }
    return;
  }
};

ExchangeStartOkNpcShopMessage.prototype.deserializeAs_ExchangeStartOkNpcShopMessage = function(param1) {
  var _loc4_ = null;
  this.npcSellerId = param1.readInt();
  this.tokenId = param1.readVarUhShort();
  if (this.tokenId < 0) {
    throw new Error("Forbidden value (" + this.tokenId + ") on element of ExchangeStartOkNpcShopMessage.tokenId.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = new ObjectItemToSellInNpcShop();
      _loc4_.deserialize(param1);
      this.objectsInfos.push(_loc4_);
      _loc3_++;
    }
    return;
  }
};

ExchangeStartOkNpcShopMessage.prototype.getMessageId = function() {
  return 5761;
};

ExchangeStartOkNpcShopMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkNpcShopMessage';
};

module.exports.id = 5761;
module.exports.class = ExchangeStartOkNpcShopMessage;
module.exports.getInstance = function() {
  return new ExchangeStartOkNpcShopMessage();
};