var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ChatClientMultiWithObjectMessage = function() {
  this.objects = [];
};

util.inherits(ChatClientMultiWithObjectMessage, BaseMessage);

ChatClientMultiWithObjectMessage.prototype.serialize = function(output) {
  this.serializeAs_ChatClientMultiWithObjectMessage(output);
};

ChatClientMultiWithObjectMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChatClientMultiWithObjectMessage(input);
};

ChatClientMultiWithObjectMessage.prototype.serializeAs_ChatClientMultiWithObjectMessage = function(param1) {
  this.serializeAs_ChatClientMultiMessage(param1);
  param1.writeShort(this.objects.length);
  var _loc2_ = 0;
  while (_loc2_ < this.objects.length) {
    (this.objects[_loc2_]).serializeAs_ObjectItem(param1);
    _loc2_++;
  }
};

ChatClientMultiWithObjectMessage.prototype.deserializeAs_ChatClientMultiWithObjectMessage = function(param1) {
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

ChatClientMultiWithObjectMessage.prototype.getMessageId = function() {
  return 862;
};

ChatClientMultiWithObjectMessage.prototype.getClassName = function() {
  return 'ChatClientMultiWithObjectMessage';
};

module.exports.id = 862;
module.exports.class = ChatClientMultiWithObjectMessage;
module.exports.getInstance = function() {
  return new ChatClientMultiWithObjectMessage();
};