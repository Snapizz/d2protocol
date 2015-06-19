var d2com = require('d2com'),
  BaseMessage = require('./chat-abstract-client-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ChatClientPrivateMessage.prototype.serializeAs_ChatClientPrivateMessage = function(output) {
  this.serializeAs_ChatAbstractClientMessage(output);
  output.writeUTF(this.receiver);
};

ChatClientPrivateMessage.prototype.deserializeAs_ChatClientPrivateMessage = function(input) {
  this.deserialize(input);
  this.receiver = input.readUTF();
};

ChatClientPrivateMessage.prototype.getMessageId = function() {
  return 851;
};

ChatClientPrivateMessage.prototype.getClassName = function() {
  return 'ChatClientPrivateMessage';
};

module.exports.id = 851;
module.exports.class = ChatClientPrivateMessage;