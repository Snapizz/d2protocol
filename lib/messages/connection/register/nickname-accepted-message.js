var d2com = require('d2com'),
  BaseMessage = require('./nickname-accepted-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var NicknameAcceptedMessage = function() {

};

util.inherits(NicknameAcceptedMessage, BaseMessage);

NicknameAcceptedMessage.prototype.serialize = function(output) {
  this.serializeAs_NicknameAcceptedMessage(output);
};

NicknameAcceptedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NicknameAcceptedMessage(input);
};

NicknameAcceptedMessage.prototype.serializeAs_NicknameAcceptedMessage = function(param1) {

};

NicknameAcceptedMessage.prototype.deserializeAs_NicknameAcceptedMessage = function(param1) {

};

NicknameAcceptedMessage.prototype.getMessageId = function() {
  return 5641;
};

NicknameAcceptedMessage.prototype.getClassName = function() {
  return 'NicknameAcceptedMessage';
};

module.exports.id = 5641;
module.exports.class = NicknameAcceptedMessage;
module.exports.getInstance = function() {
  return new NicknameAcceptedMessage();
};