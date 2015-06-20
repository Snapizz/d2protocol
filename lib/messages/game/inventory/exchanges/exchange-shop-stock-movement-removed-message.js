var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeShopStockMovementRemovedMessage = function() {
  this.objectId = 0;
};

util.inherits(ExchangeShopStockMovementRemovedMessage, BaseMessage);

ExchangeShopStockMovementRemovedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeShopStockMovementRemovedMessage(output);
};

ExchangeShopStockMovementRemovedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeShopStockMovementRemovedMessage(input);
};

ExchangeShopStockMovementRemovedMessage.prototype.serializeAs_ExchangeShopStockMovementRemovedMessage = function(param1) {
  if (this.objectId < 0) {
    throw new Error("Forbidden value (" + this.objectId + ") on element objectId.");
  } else {
    param1.writeVarInt(this.objectId);
    return;
  }
};

ExchangeShopStockMovementRemovedMessage.prototype.deserializeAs_ExchangeShopStockMovementRemovedMessage = function(param1) {
  this.objectId = param1.readVarUhInt();
  if (this.objectId < 0) {
    throw new Error("Forbidden value (" + this.objectId + ") on element of ExchangeShopStockMovementRemovedMessage.objectId.");
  } else {
    return;
  }
};

ExchangeShopStockMovementRemovedMessage.prototype.getMessageId = function() {
  return 5907;
};

ExchangeShopStockMovementRemovedMessage.prototype.getClassName = function() {
  return 'ExchangeShopStockMovementRemovedMessage';
};

module.exports.id = 5907;
module.exports.class = ExchangeShopStockMovementRemovedMessage;
module.exports.getInstance = function() {
  return new ExchangeShopStockMovementRemovedMessage();
};