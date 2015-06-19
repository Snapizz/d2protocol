var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeMountPaddockRemoveMessage = function() {
  this.mountId = 0;
};

util.inherits(ExchangeMountPaddockRemoveMessage, BaseMessage);

ExchangeMountPaddockRemoveMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeMountPaddockRemoveMessage(output);
};

ExchangeMountPaddockRemoveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeMountPaddockRemoveMessage(input);
};

ExchangeMountPaddockRemoveMessage.prototype.serializeAs_ExchangeMountPaddockRemoveMessage = function(output) {
  if ((((this.mountId < -9007199254740992)) || ((this.mountId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.mountId) + ") on element mountId.")));
  };
  output.writeDouble(this.mountId);
};

ExchangeMountPaddockRemoveMessage.prototype.deserializeAs_ExchangeMountPaddockRemoveMessage = function(input) {
  this.mountId = input.readDouble();
  if ((((this.mountId < -9007199254740992)) || ((this.mountId > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.mountId) + ") on element of ExchangeMountPaddockRemoveMessage.mountId.")));
  };
};

ExchangeMountPaddockRemoveMessage.prototype.getMessageId = function() {
  return 6050;
};

ExchangeMountPaddockRemoveMessage.prototype.getClassName = function() {
  return 'ExchangeMountPaddockRemoveMessage';
};

module.exports.id = 6050;
module.exports.class = ExchangeMountPaddockRemoveMessage;