var d2com = require('d2com'),
  BaseMessage = require('./chat-server-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChatAdminServerMessage = function() {

};

util.inherits(ChatAdminServerMessage, BaseMessage);

ChatAdminServerMessage.prototype.serialize = function(output) {
  this.serializeAs_ChatAdminServerMessage(output);
};

ChatAdminServerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChatAdminServerMessage(input);
};

ChatAdminServerMessage.prototype.serializeAs_ChatAdminServerMessage = function(output) {
  this.serializeAs_ChatServerMessage(output);
};

ChatAdminServerMessage.prototype.deserializeAs_ChatAdminServerMessage = function(input) {
  this.deserialize(input);
};

ChatAdminServerMessage.prototype.getMessageId = function() {
  return 6135;
};

ChatAdminServerMessage.prototype.getClassName = function() {
  return 'ChatAdminServerMessage';
};

module.exports.id = 6135;
module.exports.class = ChatAdminServerMessage;