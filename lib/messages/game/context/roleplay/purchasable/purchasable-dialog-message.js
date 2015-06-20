var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PurchasableDialogMessage = function() {
  this.buyOrSell = false;
  this.purchasableId = 0;
  this.price = 0;
};

util.inherits(PurchasableDialogMessage, BaseMessage);

PurchasableDialogMessage.prototype.serialize = function(output) {
  this.serializeAs_PurchasableDialogMessage(output);
};

PurchasableDialogMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PurchasableDialogMessage(input);
};

PurchasableDialogMessage.prototype.serializeAs_PurchasableDialogMessage = function(output) {
  param1.writeBoolean(this.buyOrSell);
  if (this.purchasableId < 0) {
    throw new Error("Forbidden value (" + this.purchasableId + ") on element purchasableId.");
  } else {
    param1.writeVarInt(this.purchasableId);
    if (this.price < 0) {
      throw new Error("Forbidden value (" + this.price + ") on element price.");
    } else {
      param1.writeVarInt(this.price);
      return;
    }
  }
};

PurchasableDialogMessage.prototype.deserializeAs_PurchasableDialogMessage = function(input) {
  this.buyOrSell = param1.readBoolean();
  this.purchasableId = param1.readVarUhInt();
  if (this.purchasableId < 0) {
    throw new Error("Forbidden value (" + this.purchasableId + ") on element of PurchasableDialogMessage.purchasableId.");
  } else {
    this.price = param1.readVarUhInt();
    if (this.price < 0) {
      throw new Error("Forbidden value (" + this.price + ") on element of PurchasableDialogMessage.price.");
    } else {
      return;
    }
  }
};

PurchasableDialogMessage.prototype.getMessageId = function() {
  return 5739;
};

PurchasableDialogMessage.prototype.getClassName = function() {
  return 'PurchasableDialogMessage';
};

module.exports.id = 5739;
module.exports.class = PurchasableDialogMessage;