var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PaddockSellBuyDialogMessage = function() {
  this.bsell = false;
  this.ownerId = 0;
  this.price = 0;
};

util.inherits(PaddockSellBuyDialogMessage, BaseMessage);

PaddockSellBuyDialogMessage.prototype.serialize = function(output) {
  this.serializeAs_PaddockSellBuyDialogMessage(output);
};

PaddockSellBuyDialogMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockSellBuyDialogMessage(input);
};

PaddockSellBuyDialogMessage.prototype.serializeAs_PaddockSellBuyDialogMessage = function(output) {
  output.writeBoolean(this.bsell);
  if (this.ownerId < 0) {
    throw (new Error((("Forbidden value (" + this.ownerId) + ") on element ownerId.")));
  };
  output.writeVarInt(this.ownerId);
  if (this.price < 0) {
    throw (new Error((("Forbidden value (" + this.price) + ") on element price.")));
  };
  output.writeVarInt(this.price);
};

PaddockSellBuyDialogMessage.prototype.deserializeAs_PaddockSellBuyDialogMessage = function(input) {
  this.bsell = input.readBoolean();
  this.ownerId = input.readVarUhInt();
  if (this.ownerId < 0) {
    throw (new Error((("Forbidden value (" + this.ownerId) + ") on element of PaddockSellBuyDialogMessage.ownerId.")));
  };
  this.price = input.readVarUhInt();
  if (this.price < 0) {
    throw (new Error((("Forbidden value (" + this.price) + ") on element of PaddockSellBuyDialogMessage.price.")));
  };
};

PaddockSellBuyDialogMessage.prototype.getMessageId = function() {
  return 6018;
};

PaddockSellBuyDialogMessage.prototype.getClassName = function() {
  return 'PaddockSellBuyDialogMessage';
};

module.exports.id = 6018;
module.exports.class = PaddockSellBuyDialogMessage;