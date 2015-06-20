var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ExchangeObjectRemovedMessage = function() {
  this.objectUID = 0;
};

util.inherits(ExchangeObjectRemovedMessage, BaseMessage);

ExchangeObjectRemovedMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectRemovedMessage(output);
};

ExchangeObjectRemovedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectRemovedMessage(input);
};

ExchangeObjectRemovedMessage.prototype.serializeAs_ExchangeObjectRemovedMessage = function(param1) {
  this.serializeAs_ExchangeObjectMessage(param1);
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
  } else {
    param1.writeVarInt(this.objectUID);
    return;
  }
};

ExchangeObjectRemovedMessage.prototype.deserializeAs_ExchangeObjectRemovedMessage = function(param1) {
  this.deserialize(param1);
  this.objectUID = param1.readVarUhInt();
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element of ExchangeObjectRemovedMessage.objectUID.");
  } else {
    return;
  }
};

ExchangeObjectRemovedMessage.prototype.getMessageId = function() {
  return 5517;
};

ExchangeObjectRemovedMessage.prototype.getClassName = function() {
  return 'ExchangeObjectRemovedMessage';
};

module.exports.id = 5517;
module.exports.class = ExchangeObjectRemovedMessage;
module.exports.getInstance = function() {
  return new ExchangeObjectRemovedMessage();
};