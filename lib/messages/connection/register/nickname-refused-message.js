var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

NicknameRefusedMessage.prototype.serializeAs_NicknameRefusedMessage = function(output) {
  output.writeByte(this.reason);
};

NicknameRefusedMessage.prototype.deserializeAs_NicknameRefusedMessage = function(input) {
  this.reason = input.readByte();
  if (this.reason < 0) {
    throw (new Error((("Forbidden value (" + this.reason) + ") on element of NicknameRefusedMessage.reason.")));
  };
};

NicknameRefusedMessage.prototype.getMessageId = function() {
  return 5638;
};

NicknameRefusedMessage.prototype.getClassName = function() {
  return 'NicknameRefusedMessage';
};

module.exports.id = 5638;
module.exports.class = NicknameRefusedMessage;