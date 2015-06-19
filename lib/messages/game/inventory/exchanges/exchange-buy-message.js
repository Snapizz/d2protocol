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

ExchangeBuyMessage.prototype.serializeAs_ExchangeBuyMessage = function(output) {
  if (this.objectToBuyId < 0) {
    throw (new Error((("Forbidden value (" + this.objectToBuyId) + ") on element objectToBuyId.")));
  };
  output.writeVarInt(this.objectToBuyId);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
};

ExchangeBuyMessage.prototype.deserializeAs_ExchangeBuyMessage = function(input) {
  this.objectToBuyId = input.readVarUhInt();
  if (this.objectToBuyId < 0) {
    throw (new Error((("Forbidden value (" + this.objectToBuyId) + ") on element of ExchangeBuyMessage.objectToBuyId.")));
  };
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ExchangeBuyMessage.quantity.")));
  };
};

ExchangeBuyMessage.prototype.getMessageId = function() {
  return 5774;
};

ExchangeBuyMessage.prototype.getClassName = function() {
  return 'ExchangeBuyMessage';
};

module.exports.id = 5774;
module.exports.class = ExchangeBuyMessage;