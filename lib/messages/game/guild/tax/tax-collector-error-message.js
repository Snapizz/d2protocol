var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var TaxCollectorErrorMessage = function() {
  this.reason = 0;
};

util.inherits(TaxCollectorErrorMessage, BaseMessage);

TaxCollectorErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorErrorMessage(output);
};

TaxCollectorErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorErrorMessage(input);
};

TaxCollectorErrorMessage.prototype.serializeAs_TaxCollectorErrorMessage = function(param1) {
  param1.writeByte(this.reason);
};

TaxCollectorErrorMessage.prototype.deserializeAs_TaxCollectorErrorMessage = function(param1) {
  this.reason = param1.readByte();
};

TaxCollectorErrorMessage.prototype.getMessageId = function() {
  return 5634;
};

TaxCollectorErrorMessage.prototype.getClassName = function() {
  return 'TaxCollectorErrorMessage';
};

module.exports.id = 5634;
module.exports.class = TaxCollectorErrorMessage;
module.exports.getInstance = function() {
  return new TaxCollectorErrorMessage();
};