var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

PaddockBuyResultMessage.prototype.serializeAs_PaddockBuyResultMessage = function(output) {
  output.writeInt(this.paddockId);
  output.writeBoolean(this.bought);
  if (this.realPrice < 0) {
    throw (new Error((("Forbidden value (" + this.realPrice) + ") on element realPrice.")));
  };
  output.writeVarInt(this.realPrice);
};

PaddockBuyResultMessage.prototype.deserializeAs_PaddockBuyResultMessage = function(input) {
  this.paddockId = input.readInt();
  this.bought = input.readBoolean();
  this.realPrice = input.readVarUhInt();
  if (this.realPrice < 0) {
    throw (new Error((("Forbidden value (" + this.realPrice) + ") on element of PaddockBuyResultMessage.realPrice.")));
  };
};

PaddockBuyResultMessage.prototype.getMessageId = function() {
  return 6516;
};

PaddockBuyResultMessage.prototype.getClassName = function() {
  return 'PaddockBuyResultMessage';
};

module.exports.id = 6516;
module.exports.class = PaddockBuyResultMessage;