var d2com = require('d2com'),
  BaseMessage = require('./relogin-token-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ReloginTokenRequestMessage = function() {

};

util.inherits(ReloginTokenRequestMessage, BaseMessage);

ReloginTokenRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_ReloginTokenRequestMessage(output);
};

ReloginTokenRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ReloginTokenRequestMessage(input);
};

ReloginTokenRequestMessage.prototype.serializeAs_ReloginTokenRequestMessage = function(param1) {

};

ReloginTokenRequestMessage.prototype.deserializeAs_ReloginTokenRequestMessage = function(param1) {

};

ReloginTokenRequestMessage.prototype.getMessageId = function() {
  return 6540;
};

ReloginTokenRequestMessage.prototype.getClassName = function() {
  return 'ReloginTokenRequestMessage';
};

module.exports.id = 6540;
module.exports.class = ReloginTokenRequestMessage;
module.exports.getInstance = function() {
  return new ReloginTokenRequestMessage();
};