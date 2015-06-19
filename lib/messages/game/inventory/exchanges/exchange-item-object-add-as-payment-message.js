var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeItemObjectAddAsPaymentMessage = function() {
  this.paymentType = 0;
  this.bAdd = false;
  this.objectToMoveId = 0;
  this.quantity = 0;
};

util.inherits(ExchangeItemObjectAddAsPaymentMessage, BaseMessage);

ExchangeItemObjectAddAsPaymentMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeItemObjectAddAsPaymentMessage(output);
};

ExchangeItemObjectAddAsPaymentMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeItemObjectAddAsPaymentMessage(input);
};

ExchangeItemObjectAddAsPaymentMessage.prototype.serializeAs_ExchangeItemObjectAddAsPaymentMessage = function(output) {
  output.writeByte(this.paymentType);
  output.writeBoolean(this.bAdd);
  if (this.objectToMoveId < 0) {
    throw (new Error((("Forbidden value (" + this.objectToMoveId) + ") on element objectToMoveId.")));
  };
  output.writeVarInt(this.objectToMoveId);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
};

ExchangeItemObjectAddAsPaymentMessage.prototype.deserializeAs_ExchangeItemObjectAddAsPaymentMessage = function(input) {
  this.paymentType = input.readByte();
  if (this.paymentType < 0) {
    throw (new Error((("Forbidden value (" + this.paymentType) + ") on element of ExchangeItemObjectAddAsPaymentMessage.paymentType.")));
  };
  this.bAdd = input.readBoolean();
  this.objectToMoveId = input.readVarUhInt();
  if (this.objectToMoveId < 0) {
    throw (new Error((("Forbidden value (" + this.objectToMoveId) + ") on element of ExchangeItemObjectAddAsPaymentMessage.objectToMoveId.")));
  };
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ExchangeItemObjectAddAsPaymentMessage.quantity.")));
  };
};

ExchangeItemObjectAddAsPaymentMessage.prototype.getMessageId = function() {
  return 5766;
};

ExchangeItemObjectAddAsPaymentMessage.prototype.getClassName = function() {
  return 'ExchangeItemObjectAddAsPaymentMessage';
};

module.exports.id = 5766;
module.exports.class = ExchangeItemObjectAddAsPaymentMessage;