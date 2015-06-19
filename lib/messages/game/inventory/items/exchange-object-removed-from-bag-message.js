var d2com = require('d2com'),
  BaseMessage = require('../exchanges/exchange-object-message.js').class,
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

ExchangeObjectRemovedFromBagMessage.prototype.serializeAs_ExchangeObjectRemovedFromBagMessage = function(output) {
  this.serializeAs_ExchangeObjectMessage(output);
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
};

ExchangeObjectRemovedFromBagMessage.prototype.deserializeAs_ExchangeObjectRemovedFromBagMessage = function(input) {
  this.deserialize(input);
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ExchangeObjectRemovedFromBagMessage.objectUID.")));
  };
};

ExchangeObjectRemovedFromBagMessage.prototype.getMessageId = function() {
  return 6010;
};

ExchangeObjectRemovedFromBagMessage.prototype.getClassName = function() {
  return 'ExchangeObjectRemovedFromBagMessage';
};

module.exports.id = 6010;
module.exports.class = ExchangeObjectRemovedFromBagMessage;