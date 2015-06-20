var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeBuyOkMessage = function() {

};

util.inherits(ExchangeBuyOkMessage, BaseMessage);

ExchangeBuyOkMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBuyOkMessage(output);
};

ExchangeBuyOkMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBuyOkMessage(input);
};

ExchangeBuyOkMessage.prototype.serializeAs_ExchangeBuyOkMessage = function(param1) {

};

ExchangeBuyOkMessage.prototype.deserializeAs_ExchangeBuyOkMessage = function(param1) {

};

ExchangeBuyOkMessage.prototype.getMessageId = function() {
  return 5759;
};

ExchangeBuyOkMessage.prototype.getClassName = function() {
  return 'ExchangeBuyOkMessage';
};

module.exports.id = 5759;
module.exports.class = ExchangeBuyOkMessage;