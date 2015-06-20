var d2com = require('d2com'),
  BaseMessage = require('./chat-client-private-with-object-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ChatClientPrivateWithObjectMessage = function() {
  this.objects = [];
};

util.inherits(ChatClientPrivateWithObjectMessage, BaseMessage);

ChatClientPrivateWithObjectMessage.prototype.serialize = function(output) {
  this.serializeAs_ChatClientPrivateWithObjectMessage(output);
};

ChatClientPrivateWithObjectMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChatClientPrivateWithObjectMessage(input);
};

ChatClientPrivateWithObjectMessage.prototype.serializeAs_ChatClientPrivateWithObjectMessage = function(param1) {
  this.serializeAs_ChatClientPrivateMessage(param1);
  param1.writeShort(this.objects.length);
  var _loc2_ = 0;
  while (_loc2_ < this.objects.length) {
    (this.objects[_loc2_]).serializeAs_ObjectItem(param1);
    _loc2_++;
  }
};

ChatClientPrivateWithObjectMessage.prototype.deserializeAs_ChatClientPrivateWithObjectMessage = function(param1) {
  var _loc4_ = null;
  this.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new ObjectItem();
    _loc4_.deserialize(param1);
    this.objects.push(_loc4_);
    _loc3_++;
  }
};

ChatClientPrivateWithObjectMessage.prototype.getMessageId = function() {
  return 852;
};

ChatClientPrivateWithObjectMessage.prototype.getClassName = function() {
  return 'ChatClientPrivateWithObjectMessage';
};

module.exports.id = 852;
module.exports.class = ChatClientPrivateWithObjectMessage;
module.exports.getInstance = function() {
  return new ChatClientPrivateWithObjectMessage();
};