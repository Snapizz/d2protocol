var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var KrosmasterAuthTokenRequestMessage = function() {

};

util.inherits(KrosmasterAuthTokenRequestMessage, BaseMessage);

KrosmasterAuthTokenRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_KrosmasterAuthTokenRequestMessage(output);
};

KrosmasterAuthTokenRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_KrosmasterAuthTokenRequestMessage(input);
};

KrosmasterAuthTokenRequestMessage.prototype.serializeAs_KrosmasterAuthTokenRequestMessage = function(output) {

};

KrosmasterAuthTokenRequestMessage.prototype.deserializeAs_KrosmasterAuthTokenRequestMessage = function(input) {

};

KrosmasterAuthTokenRequestMessage.prototype.getMessageId = function() {
  return 6346;
};

KrosmasterAuthTokenRequestMessage.prototype.getClassName = function() {
  return 'KrosmasterAuthTokenRequestMessage';
};

module.exports.id = 6346;
module.exports.class = KrosmasterAuthTokenRequestMessage;