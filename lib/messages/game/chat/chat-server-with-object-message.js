var d2com = require('d2com'),
  BaseMessage = require('./chat-server-message.js').class,
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

ChatServerWithObjectMessage.prototype.serializeAs_ChatServerWithObjectMessage = function(output) {
  this.serializeAs_ChatServerMessage(output);
  output.writeShort(this.objects.length);
  var _i1;
  while (_i1 < this.objects.length) {
    (this.objects[_i1]).serializeAs_ObjectItem(output);
    _i1++;
  };
};

ChatServerWithObjectMessage.prototype.deserializeAs_ChatServerWithObjectMessage = function(input) {
  var _item1;
  this.deserialize(input);
  var _objectsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _objectsLen) {
    _item1 = new ObjectItem();
    _item1.deserialize(input);
    this.objects.push(_item1);
    _i1++;
  };
};

ChatServerWithObjectMessage.prototype.getMessageId = function() {
  return 883;
};

ChatServerWithObjectMessage.prototype.getClassName = function() {
  return 'ChatServerWithObjectMessage';
};

module.exports.id = 883;
module.exports.class = ChatServerWithObjectMessage;