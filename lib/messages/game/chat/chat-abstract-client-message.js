var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

ChatAbstractClientMessage.prototype.serializeAs_ChatAbstractClientMessage = function(param1) {
  param1.writeUTF(this.content);
};

ChatAbstractClientMessage.prototype.deserializeAs_ChatAbstractClientMessage = function(param1) {
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
module.exports.getInstance = function() {
  return new ChatAbstractClientMessage();
};