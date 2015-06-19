var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectMoveMessage = function() {
  this.objectUID = 0;
  this.quantity = 0;
};

util.inherits(ExchangeObjectMoveMessage, BaseMessage);

ExchangeObjectMoveMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectMoveMessage(output);
};

ExchangeObjectMoveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectMoveMessage(input);
};

ExchangeObjectMoveMessage.prototype.serializeAs_ExchangeObjectMoveMessage = function(output) {
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
  output.writeVarInt(this.quantity);
};

ExchangeObjectMoveMessage.prototype.deserializeAs_ExchangeObjectMoveMessage = function(input) {
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ExchangeObjectMoveMessage.objectUID.")));
  };
  this.quantity = input.readVarInt();
};

ExchangeObjectMoveMessage.prototype.getMessageId = function() {
  return 5518;
};

ExchangeObjectMoveMessage.prototype.getClassName = function() {
  return 'ExchangeObjectMoveMessage';
};

module.exports.id = 5518;
module.exports.class = ExchangeObjectMoveMessage;