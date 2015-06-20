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

StorageObjectsUpdateMessage.prototype.serializeAs_StorageObjectsUpdateMessage = function(output) {
  output.writeShort(this.objectList.length);
  var _i1 = 0;
  while (_i1 < this.objectList.length) {
    (this.objectList[_i1]).serializeAs_ObjectItem(output);
    _i1++;
  };
};

StorageObjectsUpdateMessage.prototype.deserializeAs_StorageObjectsUpdateMessage = function(input) {
  var _item1;
  var _objectListLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _objectListLen) {
    _item1 = new ObjectItem();
    _item1.deserialize(input);
    this.objectList.push(_item1);
    _i1++;
  };
};

StorageObjectsUpdateMessage.prototype.getMessageId = function() {
  return 6036;
};

StorageObjectsUpdateMessage.prototype.getClassName = function() {
  return 'StorageObjectsUpdateMessage';
};

module.exports.id = 6036;
module.exports.class = StorageObjectsUpdateMessage;