var d2com = require('d2com'),
  BaseMessage = require('./chat-abstract-server-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChatServerCopyMessage = function() {
  this.receiverId = 0;
  this.receiverName = "";
};

util.inherits(ChatServerCopyMessage, BaseMessage);

ChatServerCopyMessage.prototype.serialize = function(output) {
  this.serializeAs_ChatServerCopyMessage(output);
};

ChatServerCopyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChatServerCopyMessage(input);
};

ChatServerCopyMessage.prototype.serializeAs_ChatServerCopyMessage = function(output) {
  this.serializeAs_ChatAbstractServerMessage(output);
  if (this.receiverId < 0) {
    throw (new Error((("Forbidden value (" + this.receiverId) + ") on element receiverId.")));
  };
  output.writeVarInt(this.receiverId);
  output.writeUTF(this.receiverName);
};

ChatServerCopyMessage.prototype.deserializeAs_ChatServerCopyMessage = function(input) {
  this.deserialize(input);
  this.receiverId = input.readVarUhInt();
  if (this.receiverId < 0) {
    throw (new Error((("Forbidden value (" + this.receiverId) + ") on element of ChatServerCopyMessage.receiverId.")));
  };
  this.receiverName = input.readUTF();
};

ChatServerCopyMessage.prototype.getMessageId = function() {
  return 882;
};

ChatServerCopyMessage.prototype.getClassName = function() {
  return 'ChatServerCopyMessage';
};

module.exports.id = 882;
module.exports.class = ChatServerCopyMessage;