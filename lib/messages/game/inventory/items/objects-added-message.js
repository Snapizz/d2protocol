var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectsAddedMessage = function() {
  this.object = [];
};

util.inherits(ObjectsAddedMessage, BaseMessage);

ObjectsAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectsAddedMessage(output);
};

ObjectsAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectsAddedMessage(input);
};

ObjectsAddedMessage.prototype.serializeAs_ObjectsAddedMessage = function(output) {
  output.writeShort(this.object.length);
  var _i1 = 0;
  while (_i1 < this.object.length) {
    (this.object[_i1]).serializeAs_ObjectItem(output);
    _i1++;
  };
};

ObjectsAddedMessage.prototype.deserializeAs_ObjectsAddedMessage = function(input) {
  var _item1;
  var _objectLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _objectLen) {
    _item1 = new ObjectItem();
    _item1.deserialize(input);
    this.object.push(_item1);
    _i1++;
  };
};

ObjectsAddedMessage.prototype.getMessageId = function() {
  return 6033;
};

ObjectsAddedMessage.prototype.getClassName = function() {
  return 'ObjectsAddedMessage';
};

module.exports.id = 6033;
module.exports.class = ObjectsAddedMessage;