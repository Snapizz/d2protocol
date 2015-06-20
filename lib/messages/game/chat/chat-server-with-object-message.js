var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChatServerWithObjectMessage = function() {
  this.objects = [];
};

util.inherits(ChatServerWithObjectMessage, BaseMessage);

ChatServerWithObjectMessage.prototype.serialize = function(output) {
  this.serializeAs_ChatServerWithObjectMessage(output);
};

ChatServerWithObjectMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChatServerWithObjectMessage(input);
};

ChatServerWithObjectMessage.prototype.serializeAs_ChatServerWithObjectMessage = function(param1) {
  this.serializeAs_ChatServerMessage(param1);
  param1.writeShort(this.objects.length);
  var _loc2_ = 0;
  while (_loc2_ < this.objects.length) {
    (this.objects[_loc2_]).serializeAs_ObjectItem(param1);
    _loc2_++;
  }
};

ChatServerWithObjectMessage.prototype.deserializeAs_ChatServerWithObjectMessage = function(param1) {
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

ChatServerWithObjectMessage.prototype.getMessageId = function() {
  return 883;
};

ChatServerWithObjectMessage.prototype.getClassName = function() {
  return 'ChatServerWithObjectMessage';
};

module.exports.id = 883;
module.exports.class = ChatServerWithObjectMessage;