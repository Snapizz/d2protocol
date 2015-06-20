var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ReloginTokenRequestMessage.prototype.serializeAs_ReloginTokenRequestMessage = function(output) {

};

ReloginTokenRequestMessage.prototype.deserializeAs_ReloginTokenRequestMessage = function(input) {

};

ReloginTokenRequestMessage.prototype.getMessageId = function() {
  return 6540;
};

ReloginTokenRequestMessage.prototype.getClassName = function() {
  return 'ReloginTokenRequestMessage';
};

module.exports.id = 6540;
module.exports.class = ReloginTokenRequestMessage;