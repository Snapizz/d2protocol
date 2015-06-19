var d2com = require('d2com'),
  BaseMessage = require('../exchanges/exchange-object-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ExchangeObjectRemovedMessage.prototype.serializeAs_ExchangeObjectRemovedMessage = function(output) {
  this.serializeAs_ExchangeObjectMessage(output);
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
};

ExchangeObjectRemovedMessage.prototype.deserializeAs_ExchangeObjectRemovedMessage = function(input) {
  this.deserialize(input);
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ExchangeObjectRemovedMessage.objectUID.")));
  };
};

ExchangeObjectRemovedMessage.prototype.getMessageId = function() {
  return 5517;
};

ExchangeObjectRemovedMessage.prototype.getClassName = function() {
  return 'ExchangeObjectRemovedMessage';
};

module.exports.id = 5517;
module.exports.class = ExchangeObjectRemovedMessage;