var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeObjectRemovedFromBagMessage = function() {
  this.objectUID = 0;
};

util.inherits(ExchangeObjectRemovedFromBagMessage, BaseMessage);

ExchangeObjectRemovedFromBagMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeObjectRemovedFromBagMessage(output);
};

ExchangeObjectRemovedFromBagMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeObjectRemovedFromBagMessage(input);
};

ExchangeObjectRemovedFromBagMessage.prototype.serializeAs_ExchangeObjectRemovedFromBagMessage = function(param1) {
  this.serializeAs_ExchangeObjectMessage(param1);
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
  } else {
    param1.writeVarInt(this.objectUID);
    return;
  }
};

ExchangeObjectRemovedFromBagMessage.prototype.deserializeAs_ExchangeObjectRemovedFromBagMessage = function(param1) {
  this.deserialize(param1);
  this.objectUID = param1.readVarUhInt();
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element of ExchangeObjectRemovedFromBagMessage.objectUID.");
  } else {
    return;
  }
};

ExchangeObjectRemovedFromBagMessage.prototype.getMessageId = function() {
  return 6010;
};

ExchangeObjectRemovedFromBagMessage.prototype.getClassName = function() {
  return 'ExchangeObjectRemovedFromBagMessage';
};

module.exports.id = 6010;
module.exports.class = ExchangeObjectRemovedFromBagMessage;