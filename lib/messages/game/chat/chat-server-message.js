var d2com = require('d2com'),
  BaseMessage = require('./chat-abstract-server-message.js').class,
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

ChatServerMessage.prototype.serializeAs_ChatServerMessage = function(output) {
  this.serializeAs_ChatAbstractServerMessage(output);
  output.writeInt(this.senderId);
  output.writeUTF(this.senderName);
  if (this.senderAccountId < 0) {
    throw (new Error((("Forbidden value (" + this.senderAccountId) + ") on element senderAccountId.")));
  };
  output.writeInt(this.senderAccountId);
};

ChatServerMessage.prototype.deserializeAs_ChatServerMessage = function(input) {
  this.deserialize(input);
  this.senderId = input.readInt();
  this.senderName = input.readUTF();
  this.senderAccountId = input.readInt();
  if (this.senderAccountId < 0) {
    throw (new Error((("Forbidden value (" + this.senderAccountId) + ") on element of ChatServerMessage.senderAccountId.")));
  };
};

ChatServerMessage.prototype.getMessageId = function() {
  return 881;
};

ChatServerMessage.prototype.getClassName = function() {
  return 'ChatServerMessage';
};

module.exports.id = 881;
module.exports.class = ChatServerMessage;