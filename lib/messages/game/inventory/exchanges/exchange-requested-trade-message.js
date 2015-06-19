var d2com = require('d2com'),
  BaseMessage = require('./exchange-requested-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeRequestedTradeMessage = function() {
  this.source = 0;
  this.target = 0;
};

util.inherits(ExchangeRequestedTradeMessage, BaseMessage);

ExchangeRequestedTradeMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeRequestedTradeMessage(output);
};

ExchangeRequestedTradeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeRequestedTradeMessage(input);
};

ExchangeRequestedTradeMessage.prototype.serializeAs_ExchangeRequestedTradeMessage = function(output) {
  this.serializeAs_ExchangeRequestedMessage(output);
  if (this.source < 0) {
    throw (new Error((("Forbidden value (" + this.source) + ") on element source.")));
  };
  output.writeVarInt(this.source);
  if (this.target < 0) {
    throw (new Error((("Forbidden value (" + this.target) + ") on element target.")));
  };
  output.writeVarInt(this.target);
};

ExchangeRequestedTradeMessage.prototype.deserializeAs_ExchangeRequestedTradeMessage = function(input) {
  this.deserialize(input);
  this.source = input.readVarUhInt();
  if (this.source < 0) {
    throw (new Error((("Forbidden value (" + this.source) + ") on element of ExchangeRequestedTradeMessage.source.")));
  };
  this.target = input.readVarUhInt();
  if (this.target < 0) {
    throw (new Error((("Forbidden value (" + this.target) + ") on element of ExchangeRequestedTradeMessage.target.")));
  };
};

ExchangeRequestedTradeMessage.prototype.getMessageId = function() {
  return 5523;
};

ExchangeRequestedTradeMessage.prototype.getClassName = function() {
  return 'ExchangeRequestedTradeMessage';
};

module.exports.id = 5523;
module.exports.class = ExchangeRequestedTradeMessage;