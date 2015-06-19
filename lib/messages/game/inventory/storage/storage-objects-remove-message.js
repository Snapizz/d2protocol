var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

StorageObjectsRemoveMessage.prototype.serializeAs_StorageObjectsRemoveMessage = function(output) {
  output.writeShort(this.objectUIDList.length);
  var _i1;
  while (_i1 < this.objectUIDList.length) {
    if (this.objectUIDList[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.objectUIDList[_i1]) + ") on element 1 (starting at 1) of objectUIDList.")));
    };
    output.writeVarInt(this.objectUIDList[_i1]);
    _i1++;
  };
};

StorageObjectsRemoveMessage.prototype.deserializeAs_StorageObjectsRemoveMessage = function(input) {
  var _val1;
  var _objectUIDListLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _objectUIDListLen) {
    _val1 = input.readVarUhInt();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of objectUIDList.")));
    };
    this.objectUIDList.push(_val1);
    _i1++;
  };
};

StorageObjectsRemoveMessage.prototype.getMessageId = function() {
  return 6035;
};

StorageObjectsRemoveMessage.prototype.getClassName = function() {
  return 'StorageObjectsRemoveMessage';
};

module.exports.id = 6035;
module.exports.class = StorageObjectsRemoveMessage;