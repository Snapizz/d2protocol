var d2com = require('d2com'),
  BaseMessage = require('./nickname-choice-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var NicknameChoiceRequestMessage = function() {
  this.nickname = "";
};

util.inherits(NicknameChoiceRequestMessage, BaseMessage);

NicknameChoiceRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_NicknameChoiceRequestMessage(output);
};

NicknameChoiceRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NicknameChoiceRequestMessage(input);
};

NicknameChoiceRequestMessage.prototype.serializeAs_NicknameChoiceRequestMessage = function(param1) {
  param1.writeUTF(this.nickname);
};

NicknameChoiceRequestMessage.prototype.deserializeAs_NicknameChoiceRequestMessage = function(param1) {
  this.nickname = param1.readUTF();
};

NicknameChoiceRequestMessage.prototype.getMessageId = function() {
  return 5639;
};

NicknameChoiceRequestMessage.prototype.getClassName = function() {
  return 'NicknameChoiceRequestMessage';
};

module.exports.id = 5639;
module.exports.class = NicknameChoiceRequestMessage;
module.exports.getInstance = function() {
  return new NicknameChoiceRequestMessage();
};