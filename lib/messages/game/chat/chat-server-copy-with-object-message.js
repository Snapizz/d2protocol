var d2com = require('d2com'),
  BaseMessage = require('./chat-server-copy-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChatServerCopyWithObjectMessage = function() {
  this.objects = [];
};

util.inherits(ChatServerCopyWithObjectMessage, BaseMessage);

ChatServerCopyWithObjectMessage.prototype.serialize = function(output) {
  this.serializeAs_ChatServerCopyWithObjectMessage(output);
};

ChatServerCopyWithObjectMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChatServerCopyWithObjectMessage(input);
};

ChatServerCopyWithObjectMessage.prototype.serializeAs_ChatServerCopyWithObjectMessage = function(output) {
  this.serializeAs_ChatServerCopyMessage(output);
  output.writeShort(this.objects.length);
  var _i1 = 0;
  while (_i1 < this.objects.length) {
    (this.objects[_i1]).serializeAs_ObjectItem(output);
    _i1++;
  };
};

ChatServerCopyWithObjectMessage.prototype.deserializeAs_ChatServerCopyWithObjectMessage = function(input) {
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

ChatServerCopyWithObjectMessage.prototype.getMessageId = function() {
  return 884;
};

ChatServerCopyWithObjectMessage.prototype.getClassName = function() {
  return 'ChatServerCopyWithObjectMessage';
};

module.exports.id = 884;
module.exports.class = ChatServerCopyWithObjectMessage;