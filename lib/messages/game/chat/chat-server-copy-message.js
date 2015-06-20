var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

ChatServerCopyMessage.prototype.serializeAs_ChatServerCopyMessage = function(param1) {
  this.serializeAs_ChatAbstractServerMessage(param1);
  if (this.receiverId < 0) {
    throw new Error("Forbidden value (" + this.receiverId + ") on element receiverId.");
  } else {
    param1.writeVarInt(this.receiverId);
    param1.writeUTF(this.receiverName);
    return;
  }
};

ChatServerCopyMessage.prototype.deserializeAs_ChatServerCopyMessage = function(param1) {
  this.deserialize(param1);
  this.receiverId = param1.readVarUhInt();
  if (this.receiverId < 0) {
    throw new Error("Forbidden value (" + this.receiverId + ") on element of ChatServerCopyMessage.receiverId.");
  } else {
    this.receiverName = param1.readUTF();
    return;
  }
};

ChatServerCopyMessage.prototype.getMessageId = function() {
  return 882;
};

ChatServerCopyMessage.prototype.getClassName = function() {
  return 'ChatServerCopyMessage';
};

module.exports.id = 882;
module.exports.class = ChatServerCopyMessage;