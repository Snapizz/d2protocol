var d2com = require('d2com'),
  BaseMessage = require('./chat-client-multi-message.js').class,
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

ChatClientMultiWithObjectMessage.prototype.serializeAs_ChatClientMultiWithObjectMessage = function(output) {
  this.serializeAs_ChatClientMultiMessage(output);
  output.writeShort(this.objects.length);
  var _i1 = 0;
  while (_i1 < this.objects.length) {
    (this.objects[_i1]).serializeAs_ObjectItem(output);
    _i1++;
  };
};

ChatClientMultiWithObjectMessage.prototype.deserializeAs_ChatClientMultiWithObjectMessage = function(input) {
  var _item1;
  this.deserialize(input);
  var _objectsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _objectsLen) {
    _item1 = new ObjectItem();
    _item1.deserialize(input);
    this.objects.push(_item1);
    _i1++;
  };
};

ChatClientMultiWithObjectMessage.prototype.getMessageId = function() {
  return 862;
};

ChatClientMultiWithObjectMessage.prototype.getClassName = function() {
  return 'ChatClientMultiWithObjectMessage';
};

module.exports.id = 862;
module.exports.class = ChatClientMultiWithObjectMessage;