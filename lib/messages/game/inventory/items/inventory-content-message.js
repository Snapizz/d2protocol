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

InventoryContentMessage.prototype.serializeAs_InventoryContentMessage = function(param1) {
  param1.writeShort(this.objects.length);
  var _loc2_ = 0;
  while (_loc2_ < this.objects.length) {
    (this.objects[_loc2_]).serializeAs_ObjectItem(param1);
    _loc2_++;
  }
  if (this.kamas < 0) {
    throw new Error("Forbidden value (" + this.kamas + ") on element kamas.");
  } else {
    param1.writeVarInt(this.kamas);
    return;
  }
};

InventoryContentMessage.prototype.deserializeAs_InventoryContentMessage = function(param1) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new ObjectItem();
    _loc4_.deserialize(param1);
    this.objects.push(_loc4_);
    _loc3_++;
  }
  this.kamas = param1.readVarUhInt();
  if (this.kamas < 0) {
    throw new Error("Forbidden value (" + this.kamas + ") on element of InventoryContentMessage.kamas.");
  } else {
    return;
  }
};

InventoryContentMessage.prototype.getMessageId = function() {
  return 3016;
};

InventoryContentMessage.prototype.getClassName = function() {
  return 'InventoryContentMessage';
};

module.exports.id = 3016;
module.exports.class = InventoryContentMessage;