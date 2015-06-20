var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ChatErrorMessage = function() {
  this.reason = 0;
};

util.inherits(ChatErrorMessage, BaseMessage);

ChatErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_ChatErrorMessage(output);
};

ChatErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChatErrorMessage(input);
};

ChatErrorMessage.prototype.serializeAs_ChatErrorMessage = function(param1) {
  param1.writeByte(this.reason);
};

ChatErrorMessage.prototype.deserializeAs_ChatErrorMessage = function(param1) {
  this.reason = param1.readByte();
  if (this.reason < 0) {
    throw new Error("Forbidden value (" + this.reason + ") on element of ChatErrorMessage.reason.");
  } else {
    return;
  }
};

ChatErrorMessage.prototype.getMessageId = function() {
  return 870;
};

ChatErrorMessage.prototype.getClassName = function() {
  return 'ChatErrorMessage';
};

module.exports.id = 870;
module.exports.class = ChatErrorMessage;
module.exports.getInstance = function() {
  return new ChatErrorMessage();
};