var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var NicknameRefusedMessage = function() {
  this.reason = 99;
};

util.inherits(NicknameRefusedMessage, BaseMessage);

NicknameRefusedMessage.prototype.serialize = function(output) {
  this.serializeAs_NicknameRefusedMessage(output);
};

NicknameRefusedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NicknameRefusedMessage(input);
};

NicknameRefusedMessage.prototype.serializeAs_NicknameRefusedMessage = function(param1) {
  param1.writeByte(this.reason);
};

NicknameRefusedMessage.prototype.deserializeAs_NicknameRefusedMessage = function(param1) {
  this.reason = param1.readByte();
  if (this.reason < 0) {
    throw new Error("Forbidden value (" + this.reason + ") on element of NicknameRefusedMessage.reason.");
  } else {
    return;
  }
};

NicknameRefusedMessage.prototype.getMessageId = function() {
  return 5638;
};

NicknameRefusedMessage.prototype.getClassName = function() {
  return 'NicknameRefusedMessage';
};

module.exports.id = 5638;
module.exports.class = NicknameRefusedMessage;
module.exports.getInstance = function() {
  return new NicknameRefusedMessage();
};