var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

ChatAdminServerMessage.prototype.serializeAs_ChatAdminServerMessage = function(param1) {
  this.serializeAs_ChatServerMessage(param1);
};

ChatAdminServerMessage.prototype.deserializeAs_ChatAdminServerMessage = function(param1) {
  this.deserialize(param1);
};

ChatAdminServerMessage.prototype.getMessageId = function() {
  return 6135;
};

ChatAdminServerMessage.prototype.getClassName = function() {
  return 'ChatAdminServerMessage';
};

module.exports.id = 6135;
module.exports.class = ChatAdminServerMessage;
module.exports.getInstance = function() {
  return new ChatAdminServerMessage();
};