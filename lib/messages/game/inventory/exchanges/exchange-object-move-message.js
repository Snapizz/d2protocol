var d2com = require('d2com'),
  BaseMessage = require('./exchange-object-move-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

ExchangeObjectMoveMessage.prototype.serializeAs_ExchangeObjectMoveMessage = function(param1) {
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
  } else {
    param1.writeVarInt(this.objectUID);
    param1.writeVarInt(this.quantity);
    return;
  }
};

ExchangeObjectMoveMessage.prototype.deserializeAs_ExchangeObjectMoveMessage = function(param1) {
  this.objectUID = param1.readVarUhInt();
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element of ExchangeObjectMoveMessage.objectUID.");
  } else {
    this.quantity = param1.readVarInt();
    return;
  }
};

ExchangeObjectMoveMessage.prototype.getMessageId = function() {
  return 5518;
};

ExchangeObjectMoveMessage.prototype.getClassName = function() {
  return 'ExchangeObjectMoveMessage';
};

module.exports.id = 5518;
module.exports.class = ExchangeObjectMoveMessage;
module.exports.getInstance = function() {
  return new ExchangeObjectMoveMessage();
};