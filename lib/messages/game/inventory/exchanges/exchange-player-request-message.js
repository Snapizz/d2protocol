var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

ExchangePlayerRequestMessage.prototype.serializeAs_ExchangePlayerRequestMessage = function(param1) {
  this.serializeAs_ExchangeRequestMessage(param1);
  if (this.target < 0) {
    throw new Error("Forbidden value (" + this.target + ") on element target.");
  } else {
    param1.writeVarInt(this.target);
    return;
  }
};

ExchangePlayerRequestMessage.prototype.deserializeAs_ExchangePlayerRequestMessage = function(param1) {
  this.deserialize(param1);
  this.target = param1.readVarUhInt();
  if (this.target < 0) {
    throw new Error("Forbidden value (" + this.target + ") on element of ExchangePlayerRequestMessage.target.");
  } else {
    return;
  }
};

ExchangePlayerRequestMessage.prototype.getMessageId = function() {
  return 5773;
};

ExchangePlayerRequestMessage.prototype.getClassName = function() {
  return 'ExchangePlayerRequestMessage';
};

module.exports.id = 5773;
module.exports.class = ExchangePlayerRequestMessage;
module.exports.getInstance = function() {
  return new ExchangePlayerRequestMessage();
};