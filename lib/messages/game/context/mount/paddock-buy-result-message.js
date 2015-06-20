var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var PaddockBuyResultMessage = function() {
  this.paddockId = 0;
  this.bought = false;
  this.realPrice = 0;
};

util.inherits(PaddockBuyResultMessage, BaseMessage);

PaddockBuyResultMessage.prototype.serialize = function(output) {
  this.serializeAs_PaddockBuyResultMessage(output);
};

PaddockBuyResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockBuyResultMessage(input);
};

PaddockBuyResultMessage.prototype.serializeAs_PaddockBuyResultMessage = function(param1) {
  param1.writeInt(this.paddockId);
  param1.writeBoolean(this.bought);
  if (this.realPrice < 0) {
    throw new Error("Forbidden value (" + this.realPrice + ") on element realPrice.");
  } else {
    param1.writeVarInt(this.realPrice);
    return;
  }
};

PaddockBuyResultMessage.prototype.deserializeAs_PaddockBuyResultMessage = function(param1) {
  this.paddockId = param1.readInt();
  this.bought = param1.readBoolean();
  this.realPrice = param1.readVarUhInt();
  if (this.realPrice < 0) {
    throw new Error("Forbidden value (" + this.realPrice + ") on element of PaddockBuyResultMessage.realPrice.");
  } else {
    return;
  }
};

PaddockBuyResultMessage.prototype.getMessageId = function() {
  return 6516;
};

PaddockBuyResultMessage.prototype.getClassName = function() {
  return 'PaddockBuyResultMessage';
};

module.exports.id = 6516;
module.exports.class = PaddockBuyResultMessage;
module.exports.getInstance = function() {
  return new PaddockBuyResultMessage();
};