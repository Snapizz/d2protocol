var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeReadyMessage = function() {
  this.ready = false;
  this.step = 0;
};

util.inherits(ExchangeReadyMessage, BaseMessage);

ExchangeReadyMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeReadyMessage(output);
};

ExchangeReadyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeReadyMessage(input);
};

ExchangeReadyMessage.prototype.serializeAs_ExchangeReadyMessage = function(output) {
  output.writeBoolean(this.ready);
  if (this.step < 0) {
    throw (new Error((("Forbidden value (" + this.step) + ") on element step.")));
  };
  output.writeVarShort(this.step);
};

ExchangeReadyMessage.prototype.deserializeAs_ExchangeReadyMessage = function(input) {
  this.ready = input.readBoolean();
  this.step = input.readVarUhShort();
  if (this.step < 0) {
    throw (new Error((("Forbidden value (" + this.step) + ") on element of ExchangeReadyMessage.step.")));
  };
};

ExchangeReadyMessage.prototype.getMessageId = function() {
  return 5511;
};

ExchangeReadyMessage.prototype.getClassName = function() {
  return 'ExchangeReadyMessage';
};

module.exports.id = 5511;
module.exports.class = ExchangeReadyMessage;