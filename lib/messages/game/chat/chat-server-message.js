var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ChatServerMessage = function() {
  this.senderId = 0;
  this.senderName = "";
  this.senderAccountId = 0;
};

util.inherits(ChatServerMessage, BaseMessage);

ChatServerMessage.prototype.serialize = function(output) {
  this.serializeAs_ChatServerMessage(output);
};

ChatServerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChatServerMessage(input);
};

ChatServerMessage.prototype.serializeAs_ChatServerMessage = function(param1) {
  this.serializeAs_ChatAbstractServerMessage(param1);
  param1.writeInt(this.senderId);
  param1.writeUTF(this.senderName);
  if (this.senderAccountId < 0) {
    throw new Error("Forbidden value (" + this.senderAccountId + ") on element senderAccountId.");
  } else {
    param1.writeInt(this.senderAccountId);
    return;
  }
};

ChatServerMessage.prototype.deserializeAs_ChatServerMessage = function(param1) {
  this.deserialize(param1);
  this.senderId = param1.readInt();
  this.senderName = param1.readUTF();
  this.senderAccountId = param1.readInt();
  if (this.senderAccountId < 0) {
    throw new Error("Forbidden value (" + this.senderAccountId + ") on element of ChatServerMessage.senderAccountId.");
  } else {
    return;
  }
};

ChatServerMessage.prototype.getMessageId = function() {
  return 881;
};

ChatServerMessage.prototype.getClassName = function() {
  return 'ChatServerMessage';
};

module.exports.id = 881;
module.exports.class = ChatServerMessage;