var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ChatClientPrivateMessage = function() {
  this.receiver = "";
};

util.inherits(ChatClientPrivateMessage, BaseMessage);

ChatClientPrivateMessage.prototype.serialize = function(output) {
  this.serializeAs_ChatClientPrivateMessage(output);
};

ChatClientPrivateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChatClientPrivateMessage(input);
};

ChatClientPrivateMessage.prototype.serializeAs_ChatClientPrivateMessage = function(param1) {
  this.serializeAs_ChatAbstractClientMessage(param1);
  param1.writeUTF(this.receiver);
};

ChatClientPrivateMessage.prototype.deserializeAs_ChatClientPrivateMessage = function(param1) {
  this.deserialize(param1);
  this.receiver = param1.readUTF();
};

ChatClientPrivateMessage.prototype.getMessageId = function() {
  return 851;
};

ChatClientPrivateMessage.prototype.getClassName = function() {
  return 'ChatClientPrivateMessage';
};

module.exports.id = 851;
module.exports.class = ChatClientPrivateMessage;
module.exports.getInstance = function() {
  return new ChatClientPrivateMessage();
};