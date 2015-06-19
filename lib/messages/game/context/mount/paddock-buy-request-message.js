var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

PaddockBuyRequestMessage.prototype.serializeAs_PaddockBuyRequestMessage = function(output) {
  if (this.proposedPrice < 0) {
    throw (new Error((("Forbidden value (" + this.proposedPrice) + ") on element proposedPrice.")));
  };
  output.writeVarInt(this.proposedPrice);
};

PaddockBuyRequestMessage.prototype.deserializeAs_PaddockBuyRequestMessage = function(input) {
  this.proposedPrice = input.readVarUhInt();
  if (this.proposedPrice < 0) {
    throw (new Error((("Forbidden value (" + this.proposedPrice) + ") on element of PaddockBuyRequestMessage.proposedPrice.")));
  };
};

PaddockBuyRequestMessage.prototype.getMessageId = function() {
  return 5951;
};

PaddockBuyRequestMessage.prototype.getClassName = function() {
  return 'PaddockBuyRequestMessage';
};

module.exports.id = 5951;
module.exports.class = PaddockBuyRequestMessage;