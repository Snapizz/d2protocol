var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectsQuantityMessage = function() {
  this.objectsUIDAndQty = [];
};

util.inherits(ObjectsQuantityMessage, BaseMessage);

ObjectsQuantityMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectsQuantityMessage(output);
};

ObjectsQuantityMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectsQuantityMessage(input);
};

ObjectsQuantityMessage.prototype.serializeAs_ObjectsQuantityMessage = function(output) {
  output.writeShort(this.objectsUIDAndQty.length);
  var _i1;
  while (_i1 < this.objectsUIDAndQty.length) {
    (this.objectsUIDAndQty[_i1]).serializeAs_ObjectItemQuantity(output);
    _i1++;
  };
};

ObjectsQuantityMessage.prototype.deserializeAs_ObjectsQuantityMessage = function(input) {
  var _item1;
  var _objectsUIDAndQtyLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _objectsUIDAndQtyLen) {
    _item1 = new ObjectItemQuantity();
    _item1.deserialize(input);
    this.objectsUIDAndQty.push(_item1);
    _i1++;
  };
};

ObjectsQuantityMessage.prototype.getMessageId = function() {
  return 6206;
};

ObjectsQuantityMessage.prototype.getClassName = function() {
  return 'ObjectsQuantityMessage';
};

module.exports.id = 6206;
module.exports.class = ObjectsQuantityMessage;