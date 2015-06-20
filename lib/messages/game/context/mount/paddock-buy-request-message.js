var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PaddockBuyRequestMessage = function() {
  this.proposedPrice = 0;
};

util.inherits(PaddockBuyRequestMessage, BaseMessage);

PaddockBuyRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PaddockBuyRequestMessage(output);
};

PaddockBuyRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockBuyRequestMessage(input);
};

PaddockBuyRequestMessage.prototype.serializeAs_PaddockBuyRequestMessage = function(param1) {
  if (this.proposedPrice < 0) {
    throw new Error("Forbidden value (" + this.proposedPrice + ") on element proposedPrice.");
  } else {
    param1.writeVarInt(this.proposedPrice);
    return;
  }
};

PaddockBuyRequestMessage.prototype.deserializeAs_PaddockBuyRequestMessage = function(param1) {
  this.proposedPrice = param1.readVarUhInt();
  if (this.proposedPrice < 0) {
    throw new Error("Forbidden value (" + this.proposedPrice + ") on element of PaddockBuyRequestMessage.proposedPrice.");
  } else {
    return;
  }
};

PaddockBuyRequestMessage.prototype.getMessageId = function() {
  return 5951;
};

PaddockBuyRequestMessage.prototype.getClassName = function() {
  return 'PaddockBuyRequestMessage';
};

module.exports.id = 5951;
module.exports.class = PaddockBuyRequestMessage;
module.exports.getInstance = function() {
  return new PaddockBuyRequestMessage();
};