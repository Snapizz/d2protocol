var d2com = require('d2com'),
  BaseMessage = require('./chat-abstract-client-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChatClientMultiMessage = function() {
  this.channel = 0;
};

util.inherits(ChatClientMultiMessage, BaseMessage);

ChatClientMultiMessage.prototype.serialize = function(output) {
  this.serializeAs_ChatClientMultiMessage(output);
};

ChatClientMultiMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChatClientMultiMessage(input);
};

ChatClientMultiMessage.prototype.serializeAs_ChatClientMultiMessage = function(output) {
  this.serializeAs_ChatAbstractClientMessage(output);
  output.writeByte(this.channel);
};

ChatClientMultiMessage.prototype.deserializeAs_ChatClientMultiMessage = function(input) {
  this.deserialize(input);
  this.channel = input.readByte();
  if (this.channel < 0) {
    throw (new Error((("Forbidden value (" + this.channel) + ") on element of ChatClientMultiMessage.channel.")));
  };
};

ChatClientMultiMessage.prototype.getMessageId = function() {
  return 861;
};

ChatClientMultiMessage.prototype.getClassName = function() {
  return 'ChatClientMultiMessage';
};

module.exports.id = 861;
module.exports.class = ChatClientMultiMessage;