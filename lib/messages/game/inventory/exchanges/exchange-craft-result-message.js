var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeCraftResultMessage = function() {
  this.craftResult = 0;
};

util.inherits(ExchangeCraftResultMessage, BaseMessage);

ExchangeCraftResultMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeCraftResultMessage(output);
};

ExchangeCraftResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeCraftResultMessage(input);
};

ExchangeCraftResultMessage.prototype.serializeAs_ExchangeCraftResultMessage = function(output) {
  output.writeByte(this.craftResult);
};

ExchangeCraftResultMessage.prototype.deserializeAs_ExchangeCraftResultMessage = function(input) {
  this.craftResult = input.readByte();
  if (this.craftResult < 0) {
    throw (new Error((("Forbidden value (" + this.craftResult) + ") on element of ExchangeCraftResultMessage.craftResult.")));
  };
};

ExchangeCraftResultMessage.prototype.getMessageId = function() {
  return 5790;
};

ExchangeCraftResultMessage.prototype.getClassName = function() {
  return 'ExchangeCraftResultMessage';
};

module.exports.id = 5790;
module.exports.class = ExchangeCraftResultMessage;