var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChatAbstractClientMessage = function() {
  this.content = "";
};

util.inherits(ChatAbstractClientMessage, BaseMessage);

ChatAbstractClientMessage.prototype.serialize = function(output) {
  this.serializeAs_ChatAbstractClientMessage(output);
};

ChatAbstractClientMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChatAbstractClientMessage(input);
};

ChatAbstractClientMessage.prototype.serializeAs_ChatAbstractClientMessage = function(output) {
  param1.writeUTF(this.content);
};

ChatAbstractClientMessage.prototype.deserializeAs_ChatAbstractClientMessage = function(input) {
  this.content = param1.readUTF();
};

ChatAbstractClientMessage.prototype.getMessageId = function() {
  return 850;
};

ChatAbstractClientMessage.prototype.getClassName = function() {
  return 'ChatAbstractClientMessage';
};

module.exports.id = 850;
module.exports.class = ChatAbstractClientMessage;