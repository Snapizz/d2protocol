var d2com = require('d2com'),
  BaseMessage = require('./storage-objects-remove-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var StorageObjectsRemoveMessage = function() {
  this.objectUIDList = [];
};

util.inherits(StorageObjectsRemoveMessage, BaseMessage);

StorageObjectsRemoveMessage.prototype.serialize = function(output) {
  this.serializeAs_StorageObjectsRemoveMessage(output);
};

StorageObjectsRemoveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StorageObjectsRemoveMessage(input);
};

StorageObjectsRemoveMessage.prototype.serializeAs_StorageObjectsRemoveMessage = function(param1) {
  param1.writeShort(this.objectUIDList.length);
  var _loc2_ = 0;
  while (_loc2_ < this.objectUIDList.length) {
    if (this.objectUIDList[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.objectUIDList[_loc2_] + ") on element 1 (starting at 1) of objectUIDList.");
    } else {
      param1.writeVarInt(this.objectUIDList[_loc2_]);
      _loc2_++;
      continue;
    }
  }
};

StorageObjectsRemoveMessage.prototype.deserializeAs_StorageObjectsRemoveMessage = function(param1) {
  var _loc4_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readVarUhInt();
    if (_loc4_ < 0) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of objectUIDList.");
    } else {
      this.objectUIDList.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
};

StorageObjectsRemoveMessage.prototype.getMessageId = function() {
  return 6035;
};

StorageObjectsRemoveMessage.prototype.getClassName = function() {
  return 'StorageObjectsRemoveMessage';
};

module.exports.id = 6035;
module.exports.class = StorageObjectsRemoveMessage;
module.exports.getInstance = function() {
  return new StorageObjectsRemoveMessage();
};