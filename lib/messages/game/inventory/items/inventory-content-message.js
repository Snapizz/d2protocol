var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InventoryContentMessage = function() {
  this.objects = [];
  this.kamas = 0;
};

util.inherits(InventoryContentMessage, BaseMessage);

InventoryContentMessage.prototype.serialize = function(output) {
  this.serializeAs_InventoryContentMessage(output);
};

InventoryContentMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InventoryContentMessage(input);
};

InventoryContentMessage.prototype.serializeAs_InventoryContentMessage = function(output) {
  output.writeShort(this.objects.length);
  var _i1 = 0;
  while (_i1 < this.objects.length) {
    (this.objects[_i1]).serializeAs_ObjectItem(output);
    _i1++;
  };
  if (this.kamas < 0) {
    throw (new Error((("Forbidden value (" + this.kamas) + ") on element kamas.")));
  };
  output.writeVarInt(this.kamas);
};

InventoryContentMessage.prototype.deserializeAs_InventoryContentMessage = function(input) {
  var _item1;
  var _objectsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _objectsLen) {
    _item1 = new ObjectItem();
    _item1.deserialize(input);
    this.objects.push(_item1);
    _i1++;
  };
  this.kamas = input.readVarUhInt();
  if (this.kamas < 0) {
    throw (new Error((("Forbidden value (" + this.kamas) + ") on element of InventoryContentMessage.kamas.")));
  };
};

InventoryContentMessage.prototype.getMessageId = function() {
  return 3016;
};

InventoryContentMessage.prototype.getClassName = function() {
  return 'InventoryContentMessage';
};

module.exports.id = 3016;
module.exports.class = InventoryContentMessage;