var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ExchangeBuyMessage = function() {
  this.objectToBuyId = 0;
  this.quantity = 0;
};

util.inherits(ExchangeBuyMessage, BaseMessage);

ExchangeBuyMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBuyMessage(output);
};

ExchangeBuyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBuyMessage(input);
};

ExchangeBuyMessage.prototype.serializeAs_ExchangeBuyMessage = function(param1) {
  if (this.objectToBuyId < 0) {
    throw new Error("Forbidden value (" + this.objectToBuyId + ") on element objectToBuyId.");
  } else {
    param1.writeVarInt(this.objectToBuyId);
    if (this.quantity < 0) {
      throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
    } else {
      param1.writeVarInt(this.quantity);
      return;
    }
  }
};

ExchangeBuyMessage.prototype.deserializeAs_ExchangeBuyMessage = function(param1) {
  this.objectToBuyId = param1.readVarUhInt();
  if (this.objectToBuyId < 0) {
    throw new Error("Forbidden value (" + this.objectToBuyId + ") on element of ExchangeBuyMessage.objectToBuyId.");
  } else {
    this.quantity = param1.readVarUhInt();
    if (this.quantity < 0) {
      throw new Error("Forbidden value (" + this.quantity + ") on element of ExchangeBuyMessage.quantity.");
    } else {
      return;
    }
  }
};

ExchangeBuyMessage.prototype.getMessageId = function() {
  return 5774;
};

ExchangeBuyMessage.prototype.getClassName = function() {
  return 'ExchangeBuyMessage';
};

module.exports.id = 5774;
module.exports.class = ExchangeBuyMessage;
module.exports.getInstance = function() {
  return new ExchangeBuyMessage();
};