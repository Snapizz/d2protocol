var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeMountStableRemoveMessage = function() {
  this.mountId = 0;
};

util.inherits(ExchangeMountStableRemoveMessage, BaseMessage);

ExchangeMountStableRemoveMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeMountStableRemoveMessage(output);
};

ExchangeMountStableRemoveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeMountStableRemoveMessage(input);
};

ExchangeMountStableRemoveMessage.prototype.serializeAs_ExchangeMountStableRemoveMessage = function(output) {
  if ((((this.mountId < -9007199254740992)) || ((this.mountId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.mountId) + ") on element mountId.")));
  };
  output.writeDouble(this.mountId);
};

ExchangeMountStableRemoveMessage.prototype.deserializeAs_ExchangeMountStableRemoveMessage = function(input) {
  this.mountId = input.readDouble();
  if ((((this.mountId < -9007199254740992)) || ((this.mountId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.mountId) + ") on element of ExchangeMountStableRemoveMessage.mountId.")));
  };
};

ExchangeMountStableRemoveMessage.prototype.getMessageId = function() {
  return 5964;
};

ExchangeMountStableRemoveMessage.prototype.getClassName = function() {
  return 'ExchangeMountStableRemoveMessage';
};

module.exports.id = 5964;
module.exports.class = ExchangeMountStableRemoveMessage;