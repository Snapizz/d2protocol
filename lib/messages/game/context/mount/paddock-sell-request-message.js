var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var PaddockSellRequestMessage = function() {
  this.price = 0;
};

util.inherits(PaddockSellRequestMessage, BaseMessage);

PaddockSellRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PaddockSellRequestMessage(output);
};

PaddockSellRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockSellRequestMessage(input);
};

PaddockSellRequestMessage.prototype.serializeAs_PaddockSellRequestMessage = function(param1) {
  if (this.price < 0) {
    throw new Error("Forbidden value (" + this.price + ") on element price.");
  } else {
    param1.writeVarInt(this.price);
    return;
  }
};

PaddockSellRequestMessage.prototype.deserializeAs_PaddockSellRequestMessage = function(param1) {
  this.price = param1.readVarUhInt();
  if (this.price < 0) {
    throw new Error("Forbidden value (" + this.price + ") on element of PaddockSellRequestMessage.price.");
  } else {
    return;
  }
};

PaddockSellRequestMessage.prototype.getMessageId = function() {
  return 5953;
};

PaddockSellRequestMessage.prototype.getClassName = function() {
  return 'PaddockSellRequestMessage';
};

module.exports.id = 5953;
module.exports.class = PaddockSellRequestMessage;