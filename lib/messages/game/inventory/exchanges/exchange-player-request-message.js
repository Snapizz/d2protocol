var d2com = require('d2com'),
  BaseMessage = require('./exchange-request-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangePlayerRequestMessage = function() {
  this.target = 0;
};

util.inherits(ExchangePlayerRequestMessage, BaseMessage);

ExchangePlayerRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangePlayerRequestMessage(output);
};

ExchangePlayerRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangePlayerRequestMessage(input);
};

ExchangePlayerRequestMessage.prototype.serializeAs_ExchangePlayerRequestMessage = function(output) {
  this.serializeAs_ExchangeRequestMessage(output);
  if (this.target < 0) {
    throw (new Error((("Forbidden value (" + this.target) + ") on element target.")));
  };
  output.writeVarInt(this.target);
};

ExchangePlayerRequestMessage.prototype.deserializeAs_ExchangePlayerRequestMessage = function(input) {
  this.deserialize(input);
  this.target = input.readVarUhInt();
  if (this.target < 0) {
    throw (new Error((("Forbidden value (" + this.target) + ") on element of ExchangePlayerRequestMessage.target.")));
  };
};

ExchangePlayerRequestMessage.prototype.getMessageId = function() {
  return 5773;
};

ExchangePlayerRequestMessage.prototype.getClassName = function() {
  return 'ExchangePlayerRequestMessage';
};

module.exports.id = 5773;
module.exports.class = ExchangePlayerRequestMessage;