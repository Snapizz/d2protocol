var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeBidSearchOkMessage = function() {

};

util.inherits(ExchangeBidSearchOkMessage, BaseMessage);

ExchangeBidSearchOkMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBidSearchOkMessage(output);
};

ExchangeBidSearchOkMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBidSearchOkMessage(input);
};

ExchangeBidSearchOkMessage.prototype.serializeAs_ExchangeBidSearchOkMessage = function(param1) {

};

ExchangeBidSearchOkMessage.prototype.deserializeAs_ExchangeBidSearchOkMessage = function(param1) {

};

ExchangeBidSearchOkMessage.prototype.getMessageId = function() {
  return 5802;
};

ExchangeBidSearchOkMessage.prototype.getClassName = function() {
  return 'ExchangeBidSearchOkMessage';
};

module.exports.id = 5802;
module.exports.class = ExchangeBidSearchOkMessage;