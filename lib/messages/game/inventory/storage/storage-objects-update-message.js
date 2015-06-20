var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var StorageObjectsUpdateMessage = function() {
  this.objectList = [];
};

util.inherits(StorageObjectsUpdateMessage, BaseMessage);

StorageObjectsUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_StorageObjectsUpdateMessage(output);
};

StorageObjectsUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StorageObjectsUpdateMessage(input);
};

StorageObjectsUpdateMessage.prototype.serializeAs_StorageObjectsUpdateMessage = function(param1) {
  param1.writeShort(this.objectList.length);
  var _loc2_ = 0;
  while (_loc2_ < this.objectList.length) {
    (this.objectList[_loc2_]).serializeAs_ObjectItem(param1);
    _loc2_++;
  }
};

StorageObjectsUpdateMessage.prototype.deserializeAs_StorageObjectsUpdateMessage = function(param1) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new ObjectItem();
    _loc4_.deserialize(param1);
    this.objectList.push(_loc4_);
    _loc3_++;
  }
};

StorageObjectsUpdateMessage.prototype.getMessageId = function() {
  return 6036;
};

StorageObjectsUpdateMessage.prototype.getClassName = function() {
  return 'StorageObjectsUpdateMessage';
};

module.exports.id = 6036;
module.exports.class = StorageObjectsUpdateMessage;