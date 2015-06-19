var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeIsReadyMessage = function() {
  this.id = 0;
  this.ready = false;
};

util.inherits(ExchangeIsReadyMessage, BaseMessage);

ExchangeIsReadyMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeIsReadyMessage(output);
};

ExchangeIsReadyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeIsReadyMessage(input);
};

ExchangeIsReadyMessage.prototype.serializeAs_ExchangeIsReadyMessage = function(output) {
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeVarInt(this.id);
  output.writeBoolean(this.ready);
};

ExchangeIsReadyMessage.prototype.deserializeAs_ExchangeIsReadyMessage = function(input) {
  this.id = input.readVarUhInt();
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of ExchangeIsReadyMessage.id.")));
  };
  this.ready = input.readBoolean();
};

ExchangeIsReadyMessage.prototype.getMessageId = function() {
  return 5509;
};

ExchangeIsReadyMessage.prototype.getClassName = function() {
  return 'ExchangeIsReadyMessage';
};

module.exports.id = 5509;
module.exports.class = ExchangeIsReadyMessage;