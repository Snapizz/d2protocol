var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

TaxCollectorErrorMessage.prototype.serializeAs_TaxCollectorErrorMessage = function(output) {
  output.writeByte(this.reason);
};

TaxCollectorErrorMessage.prototype.deserializeAs_TaxCollectorErrorMessage = function(input) {
  this.reason = input.readByte();
};

TaxCollectorErrorMessage.prototype.getMessageId = function() {
  return 5634;
};

TaxCollectorErrorMessage.prototype.getClassName = function() {
  return 'TaxCollectorErrorMessage';
};

module.exports.id = 5634;
module.exports.class = TaxCollectorErrorMessage;